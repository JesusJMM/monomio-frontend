import { styled } from '../../stitches.config'
import { Title, Avatar, Container } from '../../components/styled'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PartialArticle, User, ArticleFeed } from '../../components/feed/articleEntry'
import Link from 'next/link'
import Layout from '../../components/layout'

export type Article = {
  article: PartialArticle & {content: string},
  author: User,
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:8080/api/articles/all')
  const json = await res.json()
  const paths: ArticleFeed[] = json.articles
  console.log(paths)
  return {
    paths: paths.map((a) => ({
      params: { user: a.author.name, article: a.article.slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const articleRes = await fetch(
    `http://localhost:8080/api/article/${ctx.params?.user}/${ctx.params?.article}`
  )
  const article: Article[] = await articleRes.json()
  console.log(article)
  return {
    props: {
      ...article,
    },
  }
}

const AuthorInfo = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '.5em',
  marginBottom: '1em',
  '& p': {
    color: '$gray9',
    cursor: 'pointer',
  },
  '& p:hover': {
    textDecoration: 'underline',
  },
})
const ImgContainer = styled('div', {
  display: 'grid',
  placeContent: 'center',
  boxShadow: '0 2px 16px -8px $gray9',
  overflow: 'hidden',
  borderRadius: '8px',
  marginBlock: '1em',
  '& img':{
    width: '100%',
  },
})

export default function ArticlePage({
  article,
  author,
}: Article) {
  console.log(article, author)
  return (
    <Layout>
      <Container padding='md'>
        <Link href={`/${author.name}`} passHref>
          <AuthorInfo>
            <Avatar src={author.img} size={'md'} />
            <p>{author.name}</p>
          </AuthorInfo>
        </Link>
        <Title>{article.title}</Title>
        <ImgContainer>
          <img src={article.lgImg} />
        </ImgContainer>
        {article.content}
      </Container>
    </Layout>
  )
}
