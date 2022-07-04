import * as React from 'react'
import { styled } from '../../stitches.config'
import { Title, Avatar } from '../styled'
import Link from 'next/link'

export type ArticleFeed = {
  article: {
    id: number,
    title: string,
    desc: string,
    created_at: string,
    updated_at: string,
    slug: string,
    smImg: string,
    lgImg: string,
    userID: number,
  },
  author: User
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

const AuthorContainer = styled('a', {
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

const Author = styled('p', {
  fontFamily: `'Roboto'`,
  color: '$gray9',
  fontSize: '.8em',
  '&:hover': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
})

const Desc = styled('p', {
  fontFamily: `'Roboto'`,
  color: '$gray11',
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
          {withoutAuthor || (
            <Link href={`/${author.name}`} passHref>
              <AuthorContainer>
                <Author>{author.name}</Author>
                <Avatar src={author.img} />
              </AuthorContainer>
            </Link>
          )}
          <Link href={`/${author.name}/${article.slug}`} passHref>
            <Title order='3' as={'a'} variant={'anchor'}>
              {article.title}
            </Title>
          </Link>
          <Desc css={{ display: 'none', '@bp1': { display: 'block' } }}>
            {article.desc}
          </Desc>
        </div>
      </ContentContainer>
    </Container>
  )
}
