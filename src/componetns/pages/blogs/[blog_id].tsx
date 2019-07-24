import React from 'react'
import styled from 'styled-components'
import { NextPageContext } from 'next'
import { getBlog } from '@src/api/blogs'
import ReactMarkdown from 'react-markdown'
import { CodeBlock } from '@src/componetns/markdown/CodeBlock'
import { Link } from '@src/componetns/markdown/Link'

type Props = {
  data: Blog
}

const Colors = {
  font: {
    main: '#666'
  }
}

export default function Page({ data }: Props) {
  return (
    <Wrapper>
      <ReactMarkdown source={data.body} />
    </Wrapper>
  )
}

Page.getInitialProps = async function({ query: { blog_id } }: NextPageContext) {
  const blogId = typeof blog_id === 'string' ? blog_id : blog_id[0]
  try {
    const {
      data: { data }
    } = await getBlog(blogId)
    return { data }
  } catch (e) {
    console.log(e)
  }
}

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`
