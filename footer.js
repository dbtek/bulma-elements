const html = require('bel')
const year = new Date().getFullYear()

module.exports = (props = {}) => html`
  <footer class="has-text-centered has-padding-10">
    ${`© ${year} ${props.url}`}
  </footer>
`
