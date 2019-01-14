const React = require('react')
const ReactDOM = require('react-dom/server')

function collectStyles(Component, ServerStyleSheet) {
  const sheet = new ServerStyleSheet()
  const html = ReactDOM.renderToString(sheet.collectStyles(<Component />))
  const css = sheet.getStyleTags()

  return {
    html,
    css
  }
}

module.exports = {
  collectStyles
}
