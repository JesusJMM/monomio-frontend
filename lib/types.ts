export type PartialArticle = {
  id: number,
  title: string,
  desc: string,
  created_at: string,
  updated_at: string,
  slug: string,
  smImg: string,
  lgImg: string,
  userID: number,
}

export type ArticleFeed = {
  article: PartialArticle,
  author: User,
}
export type User = {
  id: number,
  name: string,
  img: string,
}

export type Article = {
  article: PartialArticle & { content: string },
  author: User,
}

