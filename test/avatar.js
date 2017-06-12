const test = require('tape')
const avatar = require('../avatar')
const hash = require('md5')

test('avatar is rendering correctly', function (t) {
  t.plan(3)

  var user = {email: 'test@email.com'}
  var element = avatar(user)

  t.equal(element.getAttribute('class'), 'avatar', 'sets class')
  t.equal(element.getAttribute('src'), `https://www.gravatar.com/avatar/${hash(user.email)}`, 'sets gravatar url with email hash')

  user = {}
  element = avatar(user)
  t.equal(element.childNodes[0].data, 'face', 'uses icon instead of gravatar')
})
