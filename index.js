require('@babel/register')
require('./app')

const { ServerStyleSheet } = require('styled-components')
const { AllComponents } = require('3rd-party-lib')
const { collectStyles } = require('./collectStyles')

const { html, css } = collectStyles(AllComponents, ServerStyleSheet)

console.log(`
  -------------------

  [/]

  This is the project root that imports /app and /3rd-party-lib, and yarn links.

  Running \`collectStyles\` from here fails to collect styles since the  instance
  of styled-components that created the components is located in a linked module.

  CSS:
  ${css}

  HTML:
  ${html}
`)
