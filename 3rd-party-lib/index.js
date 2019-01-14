const React = require('react')
const styled = require('styled-components').default
const { ServerStyleSheet } = require('styled-components')
const { collectStyles } = require('../collectStyles')

const Container = styled.div`
  width: 100%;
`
const Foo = styled.div`
  color: blue;
`
const Bar = styled.div`
  color: green;
`
const Baz = styled.div`
  color: red;
`
const Bam = styled.div`
  color: yellow;
`

const AllComponents = () => {
  return (
    <Container>
      <Foo>Hello</Foo>
      <Bar>How</Bar>
      <Baz>Are</Baz>
      <Bam>You</Bam>
    </Container>
  )
}

module.exports = {
  AllComponents
}

const { html, css } = collectStyles(AllComponents, ServerStyleSheet)

console.log(`
  [/3rd-party-lib]

  This is the main component library. Components are created here and exported
  for consumption in other apps.

  When developing locally, this module is accessed from other modules via yarn link.

  Running \`collectStyles\` from here will properly extract CSS:

  CSS:
  ${css}

  HTML:
  ${html}
`)
