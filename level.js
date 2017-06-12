const html = require('bel')

module.exports = (items) => html`
  <nav class="level">
    ${items.map(item => html`
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">${item.title}</p>
          <p class="title">${item.value}</p>
        </div>
      </div>
    `)}
  </nav>
`
