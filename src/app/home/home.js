import React from 'react'
import ReactMarkdown from 'react-markdown'
import {OmsSyntaxHighlight } from 'components'
export default function Home() {
    const s = `# 学习算法 **巴拉巴拉**.

    `
    return (
        <div>
            <ReactMarkdown children={s} className="markdown-html" />
            {/* <OmsSyntaxHighlight children={s}/> */}
        </div>
    )
}
