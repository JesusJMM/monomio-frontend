import * as React from 'react'
import { styled } from '../../stitches.config'
import { Title, Avatar, Text, Flex } from '../styled'
import Link from 'next/link'
import format from 'date-fns/format'

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

const Container = styled('div', {
  padding: '1em',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '.5em',
  position: 'relative',
  marginInline: '1em',
  '@bp1': {
    marginInline: 'auto',
    maxWidth: 600,
  },
  borderBottom: '1px solid $gray7',
})

const Header = styled('a', {
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  columnGap: '12px',
  paddingBottom: '.5em',
})

const ImgContainer = styled('div', {
  display: 'flex',
  placeContent: 'center',
  position: 'relative',
  height: 80,
  maxWidth: 80,
  borderRadius: '8px',
  boxShadow: '0 2px 16px -8px $gray9',
  overflow: 'hidden',
  margin: 'auto',
  '@bp1': {
    height: 140,
    minWidth: 140,
  },
})

const Img = styled('img', {
  maxHeight: '100%',
})

const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  gap: '1em',
})

export const ArticleEntry: React.FC<
  ArticleFeed & { withoutAuthor?: boolean }
> = ({ article, author, withoutAuthor }) => {
  return (
    <Container>
      <ContentContainer>
        <ImgContainer>
          <Img src={article.smImg} />
        </ImgContainer>
        <div>
          <Header>
            {withoutAuthor || (
              <Link href={`/${author.name}`} passHref>
                <Flex as={'a'}>
                  <Avatar src={author.img} />
                  <Text size='sm' color='gray' variant='anchor' >{author.name}</Text>
                </Flex>
              </Link>
            )}
            <Text size='sm' color="gray">{format(new Date(article.created_at), "MMM d")}</Text>
          </Header>
          <Link href={`/${author.name}/${article.slug}`} passHref>
            <Title order='3' as={'a'} variant={'anchor'}>
              {article.title}
            </Title>
          </Link>
          <Text css={{ display: 'none', '@bp1': { display: 'block' } }} color="gray">
            {article.desc}
          </Text>
        </div>
      </ContentContainer>
    </Container>
  )
}
