const html = require('bel')
const lory = require('lory.js').lory
const icon = require('./icon')

module.exports = (props) => {
  const elem = html`
    <div onload=${handleLoad} class="slider js_slider">
      <div class="frame js_frame">
        <ul class="slides js_slides">
          ${props.slides.map(s => html`<li class="js_slide">${s}</li>`)}
        </ul>
      </div>
      <span class="js_prev prev" onclick=${handlePrev}>
        ${icon('keyboard_arrow_left')}
      </span>
      <span class="js_prev next" onclick=${handleNext}>
        ${icon('keyboard_arrow_right')}
      </span>
    </div>
  `

  // tell nanomormph not to diff element
  elem.isSameNode = (target) => {
    return target && target.nodeName && target.nodeName === 'DIV'
  }

  var slider
  function handleLoad (element) {
    slider = lory(element, {
      infinite: 1
    })
  }

  function handleNext () {
    slider.next()
  }
  function handlePrev () {
    slider.prev()
  }

  return elem
}
