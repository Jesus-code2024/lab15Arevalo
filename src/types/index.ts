export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string; // URL de la imagen
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export interface Metadata {
    title: string;
    description: string;
    keywords?: string[];
    author?: string;
    ogImage?: string;

}
