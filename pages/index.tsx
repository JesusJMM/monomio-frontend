import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { ArticleFeed, ArticleEntry } from '../components/feed/articleEntry'
import Layout from '../components/layout'
import { Title, Container } from '../components/styled'

type StaticProps = {
  articles: ArticleFeed[]
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:8080/api/articles/paginated?page=1')
  const json = await res.json()
  return {
    props: {
      articles: json.posts
    },
  }
}

const Home: NextPage<StaticProps> = (props) => {
  console.log(props)
  return (
    <Layout>
      <Head>
        <title>Monomio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container padding='sm'>
        <Title order='2'>Resent Posts</Title>
      </Container>
      {props.articles.map(a => <ArticleEntry key={a.article.id} {...a} /> )}
    </Layout>
  )
}

export default Home
