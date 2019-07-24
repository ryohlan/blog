import React from 'react'
import Hljs from 'highlight.js'
import Styled from 'styled-components'

type Props = {
  value: string
  language: string
}

const Pre = Styled.pre`
  background-color: #2f3235;
  color: #eee;
  font-size: 0.9em;
  border-radius: 2px;
  margin: 1rem 0;
`

export class CodeBlock extends React.PureComponent<Props> {
  private codeEl: any = React.createRef<any>()

  public constructor(props: Props) {
    super(props)
  }

  public componentDidMount() {
    this.highlightCode()
  }

  public componentDidUpdate() {
    this.highlightCode()
  }

  public highlightCode() {
    Hljs.highlightBlock(this.codeEl.current)
  }

  public render() {
    return (
      <Pre>
        <code
          style={{
            fontFamily: 'Source Code Pro',
            lineHeight: '1.6em',
            fontSize: '0.7rem',
            overflow: 'auto',
            fontWeight: 100,
            letterSpacing: 0,
            padding: '2em',
            boxSizing: 'border-box'
          }}
          ref={this.codeEl}
          className={`language-${this.props.language}`}
        >
          {this.props.value}
        </code>
      </Pre>
    )
  }
}
