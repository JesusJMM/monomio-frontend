import * as React from 'react'
import { styled } from '../../stitches.config'
import { Title, Avatar, Text, Flex, Container, Box } from '../styled'
import type { ArticleFeed } from '../../lib/types'
import Link from 'next/link'
import format from 'date-fns/format'

const Img = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
})

const ImgContainer = styled('div', {
  position: 'relative',
  width: '120px',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  overflow: 'hidden',
  alignSelf: 'center',
})

export const ArticleEntry: React.FC<
  ArticleFeed & { withoutAuthor?: boolean }
> = ({ article, author, withoutAuthor }) => {
  return (
    <Container css={{ marginBlock: '1em' }} padding='md'>
      <Flex position='space' align='start'>
        <div>
          <Flex position='start'>
            {withoutAuthor || (
              <>
              <Link href={`/${author.name}`} passHref>
                <Flex as='a'>
                  <Avatar src={author.img} />
                  <Text css={{fontWeight: '600'}} variant='anchor'>{author.name}</Text>
                </Flex>
              </Link>
              <Text size='sm' font='mono' color='gray'> · </Text>
              </>
            )}
            <Text size='sm' font='mono' color='gray'>{format(new Date(article.updated_at), "MMM d")}</Text>
          </Flex>
          <Link href={`/${author.name}/${article.slug}`} passHref>
            <Title order="3" css={{ marginTop: '.4em' }} as='a' variant='anchor'>{article.title}</Title>
          </Link>
          <Text color='gray' css={{ display: 'none', '@bp1': { display: 'block' } }}>{article.desc}</Text>
        </div>
        <Box css={{ alignSelf: 'center' }}>
          <ImgContainer>
            <Img src={article.smImg}></Img>
          </ImgContainer>
        </Box>
      </Flex>
    </Container>
  )
}
