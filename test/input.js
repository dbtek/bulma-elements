const test = require('tape')
const input = require('../input')

test('input is rendering correctly', function (t) {
  t.plan(4)

  var props = {
    label: 'Test label',
    onChange: val => {
      console.log('onChange', val)
      t.equal(val, 'new val')
    }
  }
  var elements = input(props)
  t.equal(elements.length, 2, 'contains two children')
  t.equal(elements[0].tagName.toLowerCase(), 'label', 'creates a label')

  t.equal(elements[1].tagName.toLowerCase(), 'p', 'creates a p element')
  var inputEl = elements[1].childNodes[1]
  t.equal(inputEl.tagName.toLowerCase(), 'input', 'creates an input element')

  // change val and click
  inputEl.value = 'new val'
  // const event = new window.Event('change')
  // inputEl.dispatchEvent(event)
})
