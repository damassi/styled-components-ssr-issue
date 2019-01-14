const { ServerStyleSheet } = require('styled-components')
const { AllComponents } = require('3rd-party-lib')
const { collectStyles } = require('../collectStyles')

const { html, css } = collectStyles(AllComponents, ServerStyleSheet)

console.log(`
  -------------------

  [/app]

  This is an app that imports the linked module /3rd-party-lib for use.

  Running \`collectStyles\` from here fails to collect styles since the instance
  of styled-components that created the components is located in a linked module.

  CSS:
  ${css}

  HTML:
  ${html}
`)
