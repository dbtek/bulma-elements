const html = require('bel')
const hash = require('md5')

function avatar (user, size) {
  if (user && user.email) {
    return html`<img class="avatar" src="https://www.gravatar.com/avatar/${hash(user.email)}${size ? '?s=' + size : ''}" alt="Image">`
  } else {
    return html`<i class="avatar icon is-large material-icons">face</i>`
  }
}

module.exports = avatar
