const html = require('bel')

module.exports = (props) => html`
  <div class="modal is-active">
    <div class="modal-background" onclick=${props.onClose}></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">${props.title}</p>
      </header>
      <div class="modal-card-body">
        ${props.content}
      </div>
      <footer class="modal-card-foot">
        ${props.actions}
      </footer>
    </div>

    <button class="modal-close" onclick=${props.onClose}></button>
  </div>
`
