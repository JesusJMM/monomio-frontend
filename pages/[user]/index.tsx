import { GetStaticPaths, GetStaticProps } from 'next'
import { ArticleEntry } from '../../components/feed/articleEntry'
import type { ArticleFeed, User } from '../../lib/types'
import { Title, Avatar } from '../../components/styled'
import Layout from '../../components/layout'
import { styled } from '../../stitches.config'

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:8080/api/authors/all')
  const json = await res.json()
  const paths : User[] = json.authors
  return {
    paths: paths.map((a) => ({ params: { user: a.name } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const authorRes = await fetch(
    `http://localhost:8080/api/author/${ctx.params?.user}`
  )
  const authorJson = await authorRes.json()
  console.log(authorJson)
  const articlesRes = await fetch(
    `http://localhost:8080/api/articles/author/${ctx.params?.user}`
  )
  const json = await articlesRes.json()
  const articles: ArticleFeed[] = json.articles
  return {
    props: {
      articles,
      author: authorJson.author
    },
  }
}

type AuthorPagePropsType = { articles: ArticleFeed[], author: User }


const AuthorInfoContainer = styled('div',{
  marginInline: 'auto',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '2em',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.5em',
})

export default function AuthorPage({ articles, author }: AuthorPagePropsType) {
  console.log(author)
  return (
    <Layout>
      <AuthorInfoContainer>
      <Avatar src={author.img} size='lg' />
        <Title order='2'>{author.name}</Title>
      </AuthorInfoContainer>
      {articles.map((a) => (
        <ArticleEntry withoutAuthor {...a} key={a.article.id}/>
      ))}
    </Layout>
  )
}
