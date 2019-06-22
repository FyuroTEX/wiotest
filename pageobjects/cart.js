class Cart {
    get username() { return $("[name=login]") };
    get password() { return $('[name=password]') };
    get submitButton() { return $('.auth-f-btn') };
    get submitBuyButton() { return $("[type=submit]") };
    get closeModalButton() { return $(".rz-popup-close-icon") };
    get cartCount() { return $('.header-actions__button-counter') };
    get loginButton() { return $('*=войдите в личный кабинет') };
    get logIn() { return $('.header-topline__user-link') };
    
    get delButton() {return $('a[name=before_delete]') };
    get delSubmit() { return $('a[name=delete]') };
    get emptyCart() { return $('//*[@id="drop-block"]/h1') };

    open() {
        browser.url('https://rozetka.com.ua/playstation_4_slim_1tb_black_bundle_9926009/p88868229/')
    };
    openCart() {
        browser.url('https://my.rozetka.com.ua/profile/cart/')
    };
    closeModal() {
        this.closeModalButton.click();
    };
    submitBuy () {
        this.submitBuyButton.click();
    };
    submit () {
        this.submitButton.click();
    };
    login () {
        this.loginButton.click();
    };
    // cartCountText() {
    //     this.cartCount.getText();
    // };
    delete() {
        this.delButton.click();
    };
    deleteSubmit() {
        this.delSubmit.click();
    };
    // emptyCartText() {
    //     this.emptyCart.getText();
    // };
};

module.exports = new Cart();