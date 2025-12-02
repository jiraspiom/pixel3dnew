export type Post = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  category: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

export async function getPosts(): Promise<Post[]> {
  const primeiro: Post[] = [
    {
      id: 1,
      title: "O futuro do ray tracing",
      excerpt:
        "Analisamos como a nova geração de consoles está lidando com a tecnologia de iluminação em tempo real.",
      content: "string aqui2",
      coverImage: "/tse.jpeg",
      author: "Jiraspiom pixel Silva",
      category: "Hardware",
      status: "published",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: "outra",
      excerpt:
        "Analisamos como a nova geração de consoles está lidando com a tecnologia de iluminação em tempo real.",
      content: "string aqui2",
      coverImage: "/tse.jpeg",
      author: "Jiraspiom pixel Silva",
      category: "Hardware",
      status: "published",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  return primeiro;
}
