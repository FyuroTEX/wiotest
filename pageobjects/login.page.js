class LoginPage {
   
    get username () { return $('#auth_email') }
    get password () { return $('#auth_pass') }
    get submitButton () { return $('.auth-modal__login-button') }
    get loginButton () { return $('*=войдите в личный кабинет') }
    get logIn () { return $('.header-topline__user-link') }
    get loginError () {return $('#auth_email.form_state_error')}
   
    open () {
        browser.url('https://rozetka.com.ua/')
    }

    submit () {
        this.submitButton.click()
    }
    login () {
        this.loginButton.click()
    }
};

module.exports = new LoginPage();