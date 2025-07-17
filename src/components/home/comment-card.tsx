import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export type CommentCardProps = {
    name: string;
    role: string;
    avatarSrc: string;
    avatarFallback: string;
    avatarHint: string;
    quote: string;
}

export function CommentCard({ name, role, avatarSrc, avatarFallback, avatarHint, quote }: CommentCardProps) {
    return (
        <Card className="bg-white shadow-lg rounded-xl p-6 h-full">
            <CardContent className="flex flex-col gap-4 p-0 h-full">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src={avatarSrc} alt={name} data-ai-hint={avatarHint} />
                        <AvatarFallback>{avatarFallback}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold text-foreground">{name}</p>
                        <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
                    ))}
                </div>
                <blockquote className="text-muted-foreground italic flex-grow">
                    &quot;{quote}&quot;
                </blockquote>
            </CardContent>
        </Card>
    )
}
