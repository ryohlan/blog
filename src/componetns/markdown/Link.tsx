import React from 'react'

type Props = {
  href: string
}

export class Link extends React.Component<Props> {
  public render() {
    const { href } = this.props
    return (
      <React.Fragment>
        <a href={href} target="_blank" rel="noopener">
          {href}
        </a>
      </React.Fragment>
    )
  }
}
