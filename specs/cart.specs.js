const Cart = require('../pageobjects/cart');
const assert = require('assert');

describe('Cart', () => {
  it('Login succses', () => { // Why login success? What do we test in this TC? 
    Cart.open();
    Cart.login();
    Cart.username.addValue('ko3tniw@cryptonet.top');
    Cart.password.addValue('ERdfcv1234');
    Cart.submit();
    browser.pause(1000); // Do not use pauses
    Cart.submitBuy();
    Cart.closeModal();
    browser.pause(2000); // Do not use pauses
    let cartCountText = Cart.cartCount;
    assert.equal(cartCountText.getText(), '1');
  });
  it('Delete from cart', () => {
    Cart.openCart();
    Cart.delete(); //what is delete?
    Cart.deleteSubmit(); // what is deleteSubmit?
    browser.pause(2000); // Do not use pauses
    let emptyCartText = Cart.emptyCart; //Why do we need this?
    assert.equal(emptyCartText.getText(), 'Корзина пуста');
  });
  it('Delete all', () => {
    browser.url('https://hard.rozetka.com.ua/kingston_suv500_240g/p40090208/'); // don't use full URL's try smth like openProduct('kingston_suv500_240g');
    Cart.submitBuy();

    browser.url('https://hard.rozetka.com.ua/kingston_kc_s44240_6f/p70512518/'); // don't use full URL's try smth like openProduct('kingston_suv500_240g');
    Cart.submitBuy();
    Cart.closeModal();
    Cart.openCart();
    Cart.delAll.map(del => {   // Move this to separate method on page object smt like removeProductCount(productName, count)
      del.click();
      browser.pause(1000); //Don;t use pause
      Cart.deleteSubmit();
      browser.pause(3000); // Don;t use pause
    });

    browser.pause(2000);  // Don;t use pause
    let emptyCartText = Cart.emptyCart;
    assert.equal(emptyCartText.getText(), 'Корзина пуста');
  });
});
