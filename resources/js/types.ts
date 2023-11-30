type Blog = {
    id: number;
    name: string;
    description: string;
    slug: string;
    photo: string;
    background_photo: string;
    route: string;
    published_at: string;
};

type Post = {
    id: number;
    title: string;
    description: string,
    content: string;
    slug: string;
    photo: string;
    route: string;
};

export type { Blog, Post };
