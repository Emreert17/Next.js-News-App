import { Article } from "./news";

export interface EditorailLabel{
    key: string;
    label: string;
    match: (article: Article) => boolean
}
