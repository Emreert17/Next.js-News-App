import { EditorailLabel } from "../types/editorial";
import { NavbarLink } from "../types/navigation";

export const navbar_links: NavbarLink[] = [
  { id: 1, title: "politics", href: "/news/politics" },
  { id: 2, title: "entertainment", href: "/news/entertainment" },
  { id: 3, title: "business", href: "/news/business" },
  { id: 4, title: "sports", href: "/news/sports" },
  { id: 5, title: "technology", href: "/news/technology" },
];
export const EDITORIAL_LABELS: EditorailLabel[] = [
  {
    key: "technology",
    label: "Technology",
    match: (article) =>
      ["AI", "Cursor", "Microsoft", "Google", "Meta", "iOS", "Android"].some(
        (word) =>
          article.title?.toLowerCase().includes(word.toLowerCase()) ||
          article.description?.toLowerCase().includes(word.toLowerCase())
      ),
  },
  {
    key: "politics",
    label: "Politics",
    match: (article) =>
      ["Election", "Government", "President", "Senate", "Politics"].some(
        (word) => article.title?.toLowerCase().includes(word.toLowerCase())
      ),
  },
  {
    key: "sports",
    label: "Sports",
    match: (article) =>
      ["Football", "Soccer", "NBA", "Tennis", "Olympics"].some((word) =>
        article.title?.toLowerCase().includes(word.toLowerCase())
      ),
  },
  {
    key: "entertainment",
    label: "Entertainment",
    match: (article) =>
      ["Movie", "Music", "TV", "Celebrity", "Entertainment"].some((word) =>
        article.title?.toLowerCase().includes(word.toLowerCase())
      ),
  },
  {
    key: "business",
    label: "Business",
    match: (article) =>
      ["Stock", "Finance", "Market", "Business", "Economy"].some((word) =>
        article.title?.toLowerCase().includes(word.toLowerCase())
      ),
  },
  {
    key: "science",
    label: "Science",
    match: (article) =>
      ["Research", "Space", "NASA", "Physics", "Science"].some((word) =>
        article.title?.toLowerCase().includes(word.toLowerCase())
      ),
  },
  {
    key: "health",
    label: "Health",
    match: (article) =>
      ["Health", "Medicine", "COVID", "Nutrition", "Wellness"].some((word) =>
        article.title?.toLowerCase().includes(word.toLowerCase())
      ),
  },
  {
    key: "features",
    label: "Features",
    match: () => true,
  },
];
