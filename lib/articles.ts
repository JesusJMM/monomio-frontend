import type { ArticleFeed, User } from './types'

export async function getArticlePage(page: number): Promise<ArticleFeed[]> {
  const res = await fetch(`http://localhost:8080/api/articles/paginated?page=${page}`)
  const json = await res.json()
  const articles: ArticleFeed[] = json.articles
  return articles
}

export async function getAuthor(authorName: string): Promise<User> {
  const res = await fetch(`http://localhost:8080/api/author/${authorName}`)
  const json = await res.json()
  const author: User = json.author
  return author
}

export async function getAllAuthors(): Promise<User[]> {
  const res = await fetch('http://localhost:8080/api/authors/all')
  const json = await res.json()
  const authors : User[] = json.authors
  return authors
}

export async function getAuthorsAticles(authorName: string, page: number): Promise<ArticleFeed[]> {
  const res = await fetch(`http://localhost:8080/api/articles/author/${authorName}?page=${page}`)
  const json = await res.json()
  const articles: ArticleFeed[] = json.articles
  return articles
}

export async function getArticle(authorName: string, slug: string): Promise<ArticleFeed> {
  const res = await fetch(`http://localhost:8080/api/article/${authorName}/${slug}`)
  const json = await res.json()
  const articles: ArticleFeed = json.articles
  return articles
}

export async function getAllArticles(): Promise<ArticleFeed[]> {
  const res = await fetch(`http://localhost:8080/api/aricles/all`)
  const json = await res.json()
  const articles: ArticleFeed[] = json.aricles
  return articles
}
