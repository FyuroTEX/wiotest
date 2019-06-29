class Product {
    
    
    get BuyButton() { return $("button[type=submit]") };
    get closeModalButton() { return $(".rz-popup-close-icon") };
    get cartCount() { return $('.header-actions__button-counter') }; 
    get loginButton() { return $('*=войдите в личный кабинет') };
    get logIn() { return $('.header-topline__user-link') };
    
    
    
    open() {
        browser.url('https://rozetka.com.ua');
    };
    openProduct(link) {
        browser.url('https://rozetka.com.ua'+link);
    }
   
   
    closeModal() {
        this.closeModalButton.click();
    };
    
    
    buy () {
        this.BuyButton.click();
    };
    submit () {
        this.submitButton.click();
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

module.exports = new Product();
