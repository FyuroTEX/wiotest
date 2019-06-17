// const assert = require('assert');

describe('DuckDuckGo search', () => {
    it('searches for WebdriverIO', () => {
        browser.setTimeout({ 'pageLoad': 10000 });
        browser.url('https://duckduckgo.com/');

        $('#search_form_input_homepage').setValue('WebdriverIO');
        $('#search_button_homepage').click();

        const title = browser.getTitle();
        console.log('This Title is: ' + title);
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
});
describe('Google search', () => {
    it('searches for WebdriverIO', () => {
        browser.url('https://google.com');

        $('[name=q]').setValue('WebdriverIO');
        $('[name=btnK]').click();

        const title = browser.getTitle();
        console.log('This Title is: ' + title);
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
});
describe('Rozetka test', () => {
    it('invalid login', () => {
        browser.url('https://rozetka.com.ua/');
        $('*=войдите в личный кабинет').click();
        $('.button-inner=Войти').click();
        $('#auth_email.form_state_error');

       
    })
    it('invalid login', () => {
        browser.url('https://rozetka.com.ua/');
        $('*=войдите в личный кабинет').click();
        $('.button-inner=Войти').click();
        $('#auth_email.form_state_error');

       
    })
});