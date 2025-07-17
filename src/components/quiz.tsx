"use client";

import { useState } from "react";
import type { Quiz as QuizType, QuizQuestion } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, XCircle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

type QuizProps = {
  quiz: QuizType;
};

export function Quiz({ quiz }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) return;
    setIsAnswered(true);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };
  
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  }

  if (isFinished) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-center font-headline text-2xl">Quiz Completed!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
                <p className="text-lg">Your final score is:</p>
                <p className="text-4xl font-bold text-primary">
                    {score} / {quiz.questions.length}
                </p>
                <p className="text-muted-foreground">
                    ({((score / quiz.questions.length) * 100).toFixed(0)}%)
                </p>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button onClick={handleRestart}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Restart Quiz
                </Button>
            </CardFooter>
        </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <Progress value={((currentQuestionIndex + 1) / quiz.questions.length) * 100} className="mb-4" />
        <CardTitle className="text-lg">
          Question {currentQuestionIndex + 1}: {currentQuestion.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedAnswer ?? undefined}
          onValueChange={setSelectedAnswer}
          disabled={isAnswered}
        >
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswer === option;
            const isCorrectAnswer = currentQuestion.correctAnswer === option;
            return (
                <Label
                key={option}
                className={cn(
                    "flex items-center space-x-2 p-4 rounded-md border transition-all",
                    isAnswered && isCorrectAnswer && "border-green-500 bg-green-500/10",
                    isAnswered && isSelected && !isCorrectAnswer && "border-red-500 bg-red-500/10",
                    !isAnswered && "cursor-pointer hover:bg-muted"
                )}
                >
                <RadioGroupItem value={option} id={option} />
                <span>{option}</span>
                </Label>
            );
            })}
        </RadioGroup>
        {isAnswered && (
            <Alert className={cn("mt-4", isCorrect ? "border-green-500 text-green-700" : "border-red-500 text-red-700")}>
                {isCorrect ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                <AlertTitle>{isCorrect ? 'Correct!' : 'Incorrect'}</AlertTitle>
                <AlertDescription>
                    {currentQuestion.explanation}
                </AlertDescription>
            </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={isAnswered ? handleNextQuestion : handleAnswerSubmit} className="w-full" disabled={!selectedAnswer}>
          {isAnswered ? 'Next Question' : 'Submit Answer'}
        </Button>
      </CardFooter>
    </Card>
  );
}
