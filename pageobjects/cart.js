class Cart {
    get username() { return $("[name=login]") };
    get password() { return $('[name=password]') };
    get submitButton() { return $('.auth-f-btn') };
    get submitBuyButton() { return $("button[type=submit]") };
    get closeModalButton() { return $(".rz-popup-close-icon") };
    //VERY LONG LOCATOR
    get cartCount() { return $('body > app-root > rz-main-app > rz-header > div > header > div > div.header-bottomline > rz-header-user-buttons > ul > li.header-actions__item.header-actions__item_type_cart > rz-user-buttons-cart > div > a > span.header-actions__button-counter.ng-star-inserted') }; 
    get loginButton() { return $('*=войдите в личный кабинет') };
    get logIn() { return $('.header-topline__user-link') };
    
    get delButton() {return $('a[name=before_delete]') };
    get delSubmit() { return $('a[name=delete]') };
    get emptyCart() { return $('//*[@id="drop-block"]/h1') };
    get delAll() { return $$('a[name=before_delete]') };
    // This is not a cart link
    open() {
        browser.url('https://rozetka.com.ua/playstation_4_slim_1tb_black_bundle_9926009/p88868229/')
    };
    // Can't navigate to this link while logged out
    openCart() {
        browser.url('https://my.rozetka.com.ua/profile/cart/')
    };
    closeModal() {
        this.closeModalButton.click();
    };
    
    // What is submit and submitBuy ?
    submitBuy () {
        this.submitBuyButton.click();
    };
    submit () {
        this.submitButton.click();
    };
    // I don't see login action on cart
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
