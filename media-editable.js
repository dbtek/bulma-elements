const html = require('bel')

module.exports = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit && props.type === 'radio' ? props.onSubmit(e.target.querySelector('input:checked').value) : props.onSubmit(e.target.querySelector('input').value)
  }

  if (!props.readOnly && props.editMode) {
    return html`
      <form onsubmit=${handleSubmit} class="media">
        <div class="media-left">${props.label}</div>
        <div class="media-content">
          <p class="control">
            ${props.type === 'radio'
              ? props.options.map(opt => html`<label class="radio"><input type="radio" name=${props.name} value="${opt.value}" checked=${props.value === opt.value}/> ${opt.label}</label>`)
              : html`<input class="input" type="${props.type || 'text'}" value="${props.value || ''}">`
            }
          </p>
        </div>
        <div class="media-right">
          <button type="submit" class="button is-icon-button is-primary is-inverted">
            <i class="material-icons">save</i>
          </button>
        </div>
      </form>
    `
  } else {
    return html`
      <div class="media">
        <div class="media-left">${props.label}</div>
        <div class="media-content">
          ${props.linkto ? html`<a href="${props.linkto}" target="${props.linktarget ? props.linktarget : html`_self`}">${props.value}</a>` : props.value}
          ${props.type === 'password' ? '●●●●●●●●' : ''}
        </div>
        ${!props.readOnly ? html`
            <div class="media-right">
              <button class="button is-icon-button is-info is-inverted" onclick=${props.onEditClick}>
                <i class="material-icons">edit</i>
              </button>
            </div>
          ` : ''}
      </div>
    `
  }
}
