import * as React from 'react'
import { styled } from '../../stitches.config'
import { Title } from '../styled'

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
  position: 'relative',
  '@bp1': {
    maxWidth: 600,
  },
  borderBottom: '1px solid $gray7',
})

const AuthorContainer = styled('div', {
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  columnGap: '12px',
  paddingBlock: '.5em',
})
const Avatar = styled('img', {
  borderRadius: '100vw',
  width: '24px',
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
  '@bp1': {
    height: 140,
    minWidth: 140,
  }
})

const Img = styled('img', {
  maxHeight: '100%'
})


const Author = styled('p', {
  fontFamily: `'Roboto'`,
  color: '$gray9',
  fontSize: '.8em',
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
  alignItems: 'center',
  gap: '.5em',
})

export const ArticleEntry: React.FC<ArticleFeed> = ({
  title,
  desc,
  slug,
  authorName,
  feedImg,
  authorImg,
}) => {
  return (
    <Container>
      <AuthorContainer>
        <Author>{authorName}</Author>
        <Avatar src={authorImg} />
      </AuthorContainer>
      <ContentContainer>
          <ImgContainer>
            <Img src={feedImg} />
          </ImgContainer>
        <Divider />
        <div>
          <Title as={'a'} variant={'anchor'} href={slug}>{title} of a large, super large title</Title>
          <Desc css={{ display: 'none', '@bp1': { display: 'block'} }}>{desc}</Desc>
        </div>
      </ContentContainer>
    </Container>
  )
}
