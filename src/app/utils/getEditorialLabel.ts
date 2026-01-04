import { EDITORIAL_LABELS } from "@/app/data/data";
import { Article } from "../types/news";

export function getEditorialLabel(article:Article):string {
  const labelObj = EDITORIAL_LABELS.find((item) => item.match(article));
  return labelObj ? labelObj.label : "Default";
}
