

 class LoginPage {
    /**
     * define elements
     */
    get username () { return $('#auth_email') }
    get password () { return $('#auth_pass') }
    get submitButton () { return $('.auth-modal__login-button') }
    get loginButton () { return $('*=войдите в личный кабинет') }
    get logIn () { return $('.header-topline__user-link') }

    /**
     * define or overwrite page methods
     */
    open () {
        browser.open('https://rozetka.com.ua/')
    }

    submit () {
        this.submitButton.click()
    }
    login () {
        this.loginButton.click()
    }
};

module.exports = new LoginPage()