export type Lesson = {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  examples: string[];
};

export type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type Quiz = {
  id: string;
  slug: string;
  lessonId: string;
  title: string;
  questions: QuizQuestion[];
};

export const lessons: Lesson[] = [
  {
    id: '1',
    slug: 'understanding-nouns',
    title: 'Understanding Nouns',
    description: 'Learn about the different types of nouns and how to use them correctly in sentences.',
    content:
      'A noun is a word that names a person, place, thing, or idea. Nouns are fundamental building blocks of sentences. There are several types of nouns, including common nouns, proper nouns, concrete nouns, and abstract nouns.',
    examples: [
      'Common Noun: The `dog` barked at the `car`.',
      'Proper Noun: `John` visited `Paris` last summer.',
      'Abstract Noun: Her `bravery` was admirable.',
    ],
  },
  {
    id: '2',
    slug: 'mastering-verbs',
    title: 'Mastering Verbs',
    description: 'Explore action verbs, linking verbs, and verb tenses to make your writing more dynamic.',
    content:
      'A verb is a word that expresses action or a state of being. Verbs are the heart of a sentence, providing the action. The main types are action verbs and linking verbs. Verbs also change form to indicate time, which is known as tense.',
    examples: [
      'Action Verb: She `runs` every morning.',
      'Linking Verb: He `is` a talented musician.',
      'Past Tense: They `played` soccer yesterday.',
    ],
  },
  {
    id: '3',
    slug: 'the-art-of-adjectives',
    title: 'The Art of Adjectives',
    description: 'Discover how adjectives add detail and color to your writing by modifying nouns.',
    content:
      'An adjective is a word that describes or modifies a noun or pronoun. Adjectives provide more information about the noun, such as its size, shape, age, color, or material. They make writing more specific and vivid.',
    examples: [
      'The `red` car is fast.',
      'It was a `beautiful` day.',
      'He wore a `silk` shirt.',
    ],
  },
];

export const quizzes: Quiz[] = [
  {
    id: 'q1',
    slug: 'nouns-quiz',
    lessonId: '1',
    title: 'Nouns Quiz',
    questions: [
      {
        question: 'Which word in the following sentence is a proper noun: "I want to visit London next year."',
        options: ['visit', 'London', 'next', 'year'],
        correctAnswer: 'London',
        explanation: '"London" is a specific name of a place, making it a proper noun.'
      },
      {
        question: 'Identify the abstract noun in the sentence: "His courage in the face of danger was inspiring."',
        options: ['face', 'danger', 'courage', 'inspiring'],
        correctAnswer: 'courage',
        explanation: '"Courage" is a concept or quality that cannot be touched, making it an abstract noun.'
      },
      {
        question: 'Which of the following is a common noun?',
        options: ['Eiffel Tower', 'Amazon River', 'city', 'Mars'],
        correctAnswer: 'city',
        explanation: '"City" is a general name for a type of place, not a specific one, making it a common noun.'
      }
    ],
  },
  {
    id: 'q2',
    slug: 'verbs-quiz',
    lessonId: '2',
    title: 'Verbs Quiz',
    questions: [
      {
        question: 'What is the past tense of the verb "to go"?',
        options: ['goed', 'gone', 'went', 'going'],
        correctAnswer: 'went',
        explanation: 'The simple past tense of "go" is "went".'
      },
      {
        question: 'Identify the linking verb in the sentence: "The soup smells delicious."',
        options: ['soup', 'smells', 'delicious', 'The'],
        correctAnswer: 'smells',
        explanation: '"Smells" is a linking verb here because it connects the subject "soup" to the adjective "delicious" that describes it.'
      },
    ],
  },
   {
    id: 'q3',
    slug: 'adjectives-quiz',
    lessonId: '3',
    title: 'Adjectives Quiz',
    questions: [
      {
        question: 'Which word is an adjective in the sentence: "The quick brown fox jumps over the lazy dog."',
        options: ['jumps', 'over', 'quick', 'fox'],
        correctAnswer: 'quick',
        explanation: '"Quick" is an adjective because it describes the noun "fox". "Brown" and "lazy" are also adjectives.'
      },
    ],
  },
];
