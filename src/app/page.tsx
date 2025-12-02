"use client";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />
          <div className="grid grid-cols-[repeat(20,minmax(0,1fr))] gap-1 opacity-10 h-full w-full transform -skew-y-12 scale-150">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={Number(i)} className="aspect-square bg-primary/30" />
            ))}
          </div>
        </div>

        <div className="container relative z-20 px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 neon-text">
              GAME NEWS <span className="text-primary">EVOLVED</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light">
              Sua fonte definitiva para novidades, análises e cultura gamer.
              Mergulhe no universo digital com a Pixel3D.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest Posts Grid */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-display font-bold flex items-center gap-2">
            <span className="w-2 h-8 bg-secondary rounded-sm block" />
            Últimas Notícias
          </h2>
        </div>

        {/* {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center py-20 text-destructive">
            Erro ao carregar posts. Tente novamente.
          </div>
        ) : publishedPosts.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            Nenhum post publicado ainda.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )} */}

        <div className="text-center py-20 text-muted-foreground">
          Nenhum post publicado ainda.
        </div>
      </section>
    </Layout>
  );
}
