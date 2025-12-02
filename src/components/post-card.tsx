import { Calendar, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/post";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/post/${post.id}`}>
      <div className="block group h-full">
        <Card className="h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] group-hover:-translate-y-1">
          <div className="aspect-video w-full overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-60" />
            <Image
              src={post.coverImage}
              alt={post.title}
              width={100}
              height={100}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <Badge className="absolute top-4 right-4 z-20 bg-secondary text-secondary-foreground hover:bg-secondary/80 font-display tracking-wide">
              {post.category}
            </Badge>
          </div>
          <CardHeader className="space-y-2 p-5">
            <h3 className="font-display text-xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
              {post.title}
            </h3>
          </CardHeader>
          <CardContent className="p-5 pt-0">
            <p className="text-muted-foreground line-clamp-3 text-sm">
              {post.excerpt}
            </p>
          </CardContent>
          <CardFooter className="p-5 pt-0 flex items-center justify-between text-xs text-muted-foreground mt-auto">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>
                {format(new Date(post.createdAt), "dd/MM/yyyy", {
                  locale: ptBR,
                })}
              </span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Link>
  );
}
