class Cart {
  get cartCount() {
    return $('.header-actions__button-counter');
  }

  get delButton() {
    return $('a[name=before_delete]');
  }
  get delSubmit() {
    return $('a[name=delete]');
  }
  get emptyCart() {
    return $('//*[@id="drop-block"]/h1');
  }
  get dellAll() {
    return $$('a[name=before_delete]');
  }

  openCart() {
    browser.url('https://my.rozetka.com.ua/cart/');
  }

  // cartCountText() {
  //     this.cartCount.getText();
  // };
  delete() {
    this.delButton.click();
  }
  deleteSubmit() {
    this.delSubmit.click();
  }
  dellAllProd() {
    this.dellAll.map(del => {
      del.click();
    //   let dellSubButt = this.delSubmit.waitForDisplayed(3000);
      this.deleteSubmit();
      browser.pause(1500);
    // dellSubButt.click();
    });
  }
  // emptyCartText() {
  //     this.emptyCart.getText();
  // };
}

module.exports = new Cart();
