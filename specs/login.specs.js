// import assert from 'assert';
// import LoginPage from '../pageobjects/login.page';
const LoginPage = require('../pageobjects/login.page');
const assert = require('assert');

describe('auth form', () => {
  it('should deny access with wrong creds', () => {
    LoginPage.open()
    LoginPage.login();
    LoginPage.username.addValue('foo');
    LoginPage.password.addValue('bar');
    LoginPage.submit();
    LoginPage.loginError;
    // assert.ok(FormPage.flash.getText().includes('Your username is invalid!'))
  });

  it('should allow access with correct creds', () => {
    LoginPage.open()
    LoginPage.login();
    LoginPage.username.addValue('ko3tniw@cryptonet.top');
    LoginPage.password.addValue('ERdfcv1234');
    LoginPage.submit();
    browser.pause(2000);
    let loginSucces = LoginPage.logIn;
    assert.equal(loginSucces.getText(), 'LtngRest');
    // assert.ok(FormPage.flash.getText().includes('You logged into a secure area!'))
  });
});
