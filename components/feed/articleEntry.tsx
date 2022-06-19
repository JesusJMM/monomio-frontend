import * as React from 'react'
import { styled } from '../../stitches.config'
import { Title, Avatar } from '../styled'
import Link from 'next/link'

export type ArticleFeed = {
  title: string
  desc: string
  feedImg: string
  slug: string
  authorName: string
  authorImg: string
  id: number
}

const Container = styled('div', {
  padding: '1em',
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  marginBottom: '.5em',
  position: 'relative',
  '@bp1': {
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

const Divider = styled('div', {
  with: '100%',
  borderTop: '1px solid $gray8',
  marginBlock: '.5em',
})

const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  gap: '.5em',
})

export const ArticleEntry: React.FC<
  ArticleFeed & { withoutAuthor?: boolean }
> = ({ title, desc, slug, authorName, feedImg, authorImg, withoutAuthor }) => {
  return (
    <Container>
      {withoutAuthor || (
        <Link href={`/${authorName}`} passHref>
        <AuthorContainer>
          <Author>{authorName}</Author>
          <Avatar src={authorImg} />
        </AuthorContainer>
        </Link>
      )}
      <ContentContainer>
        <ImgContainer>
          <Img src={feedImg} />
        </ImgContainer>
        <Divider />
        <div>
          <Link href={`/${authorName}/${slug}`} passHref>
            <Title as={'a'} variant={'anchor'}>
              {title}
            </Title>
          </Link>
          <Desc css={{ display: 'none', '@bp1': { display: 'block' } }}>
            {desc}
          </Desc>
        </div>
      </ContentContainer>
    </Container>
  )
}
