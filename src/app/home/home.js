import React from 'react'
import ReactMarkdown from 'react-markdown'
import {OmsSyntaxHighlight } from 'components'
export default function Home() {
    const s = `
    let a=1;\nconsole.log('sdds')
console.log('It works!')\nHello
    `
    return (
        <div>
            <ReactMarkdown children={s} className="markdown-html" />
            <OmsSyntaxHighlight children={s}/>
        </div>
    )
}
