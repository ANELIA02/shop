export interface Article {
  id: number;
  title: string;
  price: number;
}

export interface ArticleInStore extends Article {
  total: number;
  count: number;
}
