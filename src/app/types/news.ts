export interface Article{
    title: string;
    author: string | null;
    description: string | null;
    content: string | null;
    urlToImage: string;
    url: string;
}
export interface ApiResponse {
    articles: Article[];
}