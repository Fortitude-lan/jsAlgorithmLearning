import React from 'react'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function OmsSyntaxHighlight(props) {
  return (
    <SyntaxHighlighter
      children={String(props.children).replace(/\n$/, '')}
      showLineNumbers={true} // 是否展示左侧行数
      style={docco}
      language={'javascript'}
      PreTag="div"
      {...props}
    />
  )
}
