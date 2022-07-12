import { styled } from '../../stitches.config'
import { Title, Avatar, Container, Text, Flex } from '../../components/styled'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PartialArticle, User, ArticleFeed } from '../../components/feed/articleEntry'
import Link from 'next/link'
import Layout from '../../components/layout'
import format from 'date-fns/format'

export type Article = {
  article: PartialArticle & { content: string },
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

const ImgContainer = styled('div', {
  display: 'grid',
  placeContent: 'center',
  boxShadow: '0 2px 16px -8px $gray9',
  overflow: 'hidden',
  borderRadius: '8px',
  marginBlock: '1em',
  '& img': {
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
        <Flex position='start' css={{ marginBottom:'1em'}}>
          <Link href={`/${author.name}`} passHref>
            <Flex as='a'>
              <Avatar src={author.img} size={'md'} />
              <Text size='md' variant='anchor' color='gray'>{author.name}</Text>
            </Flex>
          </Link>
          <Text size='md' color='gray'>{format(new Date(article.updated_at), 'MMMM d')}</Text>
        </Flex>
        <Title>{article.title}</Title>
        <ImgContainer>
          <img src={article.lgImg} />
        </ImgContainer>
        {article.content}
      </Container>
    </Layout>
  )
}
