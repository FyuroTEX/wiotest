// import assert from 'assert';
// import LoginPage from '../pageobjects/login.page';
const LoginPage = require('../pageobjects/login.page');
const assert = require('assert');

describe('auth form', () => {
    // it('should deny access with wrong creds', () => {
    //     browser.url('https://rozetka.com.ua/');
    //     // LoginPage.open()
    //     LoginPage.login()
    //     LoginPage.username.addValue('foo')
    //     LoginPage.password.addValue('bar')
    //     LoginPage.submit()
    //     $('#auth_email.form_state_error');
    //     // assert.ok(FormPage.flash.getText().includes('Your username is invalid!'))
    // });

    it('should allow access with correct creds', () => {
        // LoginPage.open()
        
        browser.url('https://rozetka.com.ua/');
        LoginPage.login()
        LoginPage.username.addValue('ko3tniw@cryptonet.top')
        LoginPage.password.addValue('ERdfcv1234')
        LoginPage.submit()

       let loginSucces = LoginPage.logIn.waitUntil(3000)
        // browser.pause(2000)
        assert.equal(loginSucces.getText(), 'LtngRest');
        // assert.ok(FormPage.flash.getText().includes('You logged into a secure area!'))
    });
}); 
test