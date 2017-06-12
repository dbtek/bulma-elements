const html = require('bel')

module.exports = (props) => [
  html`
    <label class="label">${props.label}</label>
  `, html`
    <p class="control${props.type === 'date' ? ' is-not-full-width' : ''}">
      <input class="input${props.class ? ' ' + props.class : ''}"
        type="${props.type || 'text'}"
        placeholder=${props.placeholder}
        onchange=${e => props.onChange(e.target.value)}
        required="${props.required ? 'required' : false}"
        value="${props.value || ''}"/>
    </p>
  `]
