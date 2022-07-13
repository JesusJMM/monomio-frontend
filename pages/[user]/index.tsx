import { GetStaticPaths, GetStaticProps } from 'next'
import { ArticleEntry } from '../../components/feed/articleEntry'
import type { ArticleFeed, User } from '../../lib/types'
import { Title, Avatar } from '../../components/styled'
import Layout from '../../components/layout'
import { styled } from '../../stitches.config'
import { getAllAuthors, getAuthor, getAuthorsAticles } from '../../lib/articles'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllAuthors()
  return {
    paths: paths.map((a) => ({ params: { user: a.name } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const author = await getAuthor(`${ctx.params?.user}`)
  const articles = await getAuthorsAticles(`${ctx.params?.user}`, 1)
  return {
    props: {
      articles,
      author,
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
