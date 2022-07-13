import { styled } from '../../stitches.config'
import { Title, Avatar, Container, Text, Flex } from '../../components/styled'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllArticles, getArticle } from '../../lib/articles'
import type { Article } from '../../lib/types'
import Link from 'next/link'
import Layout from '../../components/layout'
import format from 'date-fns/format'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllArticles()
  return {
    paths: paths.map((a) => ({
      params: { user: a.author.name, article: a.article.slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const article = await getArticle(`${ctx.params?.user}`, `${ctx.params?.article}`)
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
        <Flex position='start' css={{ marginBottom: '1em' }}>
          <Link href={`/${author.name}`} passHref>
            <Flex as='a'>
              <Avatar src={author.img} size={'md'} />
              <Text size='md' variant='anchor' color='gray'>{author.name}</Text>
            </Flex>
          </Link>
          <span>·</span>
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
