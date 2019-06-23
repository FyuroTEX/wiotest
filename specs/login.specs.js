const LoginPage = require('../pageobjects/login.page');
const assert = require('assert');

describe('Auth form', () => {
  it('Invalid login', () => {
    LoginPage.open()
    LoginPage.login();
    LoginPage.username.addValue('foo');
    LoginPage.password.addValue('bar');
    LoginPage.submit();
    LoginPage.loginError;
  });

  it('Valid login', () => {
    LoginPage.open()
    LoginPage.login();
    LoginPage.username.addValue('ko3tniw@cryptonet.top');
    LoginPage.password.addValue('ERdfcv1234');
    LoginPage.submit();
    browser.pause(3000);
    let loginSucces = LoginPage.logIn;
    assert.equal(loginSucces.getText(), 'LtngRest');
  });
});
