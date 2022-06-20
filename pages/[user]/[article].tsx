import { styled } from '../../stitches.config'
import { Title, Avatar, Container } from '../../components/styled'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ArticleFeed } from '../../components/feed/articleEntry'
import Link from 'next/link'
import Layout from '../../components/layout'

export type Article = ArticleFeed & {
  content: string
  createdAt: string
  updatedAt: string
  articleImg: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:8080/api/posts/all')
  const paths: Article[] = await res.json()
  return {
    paths: paths.map((a) => ({
      params: { user: a.authorName, article: a.slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const articleRes = await fetch(
    `http://localhost:8080/api/post/${ctx.params?.user}/${ctx.params?.article}`
  )
  const article: ArticleFeed[] = await articleRes.json()
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
  content,
  title,
  authorName,
  authorImg,
  articleImg,
}: Article) {
  return (
    <Layout>
      <Container padding='md'>
        <Link href={`/${authorName}`} passHref>
          <AuthorInfo>
            <Avatar src={authorImg} size={'md'} />
            <p>{authorName}</p>
          </AuthorInfo>
        </Link>
        <Title>{title}</Title>
        <ImgContainer>
          <img src={articleImg} />
        </ImgContainer>
        {content}
      </Container>
    </Layout>
  )
}
