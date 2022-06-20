import { GetStaticPaths, GetStaticProps } from 'next'
import { ArticleFeed, ArticleEntry } from '../../components/feed/articleEntry'
import { Title, Avatar } from '../../components/styled'
import Layout from '../../components/layout'
import { styled } from '../../stitches.config'

type Author = {
  id: number
  name: string
  imgUrl: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:8080/api/authors')
  const paths: Author[] = await res.json()
  return {
    paths: paths.map((a) => ({ params: { user: a.name } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const authorRes = await fetch(
    `http://localhost:8080/api/author/${ctx.params?.user}`
  )
  const author: Author = await authorRes.json()
  const articlesRes = await fetch(
    `http://localhost:8080/api/post/${ctx.params?.user}`
  )
  const articles: ArticleFeed[] = await articlesRes.json()
  return {
    props: {
      author,
      articles,
    },
  }
}

type AuthorPagePropsType = { author: Author; articles: ArticleFeed[] }


const AuthorInfoContainer = styled('div',{
  marginInline: 'auto',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '2em',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.5em',
})

export default function AuthorPage({ author, articles }: AuthorPagePropsType) {
  return (
    <Layout>
      <AuthorInfoContainer>
      <Avatar src={author.imgUrl} size='lg' />
        <Title>{author.name}</Title>
      </AuthorInfoContainer>
      {articles.map((a) => (
        <ArticleEntry withoutAuthor {...a} key={a.id}/>
      ))}
    </Layout>
  )
}
