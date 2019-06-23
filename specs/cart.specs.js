const Cart = require('../pageobjects/cart');
const assert = require('assert');

describe('Cart', () => {
  
  it('Login succses', () => {
    Cart.open()
    Cart.login();
    Cart.username.addValue('ko3tniw@cryptonet.top');
    Cart.password.addValue('ERdfcv1234');
    Cart.submit();
      Cart.submitBuy();
      Cart.closeModal();
      browser.pause(2000);
      let cartCountText = Cart.cartCount;
    assert.equal(cartCountText.getText(), "1");
    
  });
  it('Delete from cart', () => {
      Cart.openCart();
      Cart.delete();
      Cart.deleteSubmit();
      browser.pause(2000);
      let emptyCartText = Cart.emptyCart;
    assert.equal(emptyCartText.getText(), 'Корзина пуста');
  });
  it('Delete all', () => {
   

    browser.url('https://hard.rozetka.com.ua/kingston_suv500_240g/p40090208/');
    Cart.submitBuy();
      
    browser.url('https://hard.rozetka.com.ua/kingston_kc_s44240_6f/p70512518/');
    Cart.submitBuy();
    Cart.closeModal();
    Cart.openCart();
    Cart.delAll.map(del => {
      del.click();
      browser.pause(700);
      Cart.deleteSubmit();
      browser.pause(700);
    }
      

    );
    

      browser.pause(2000);
      let emptyCartText = Cart.emptyCart;
    assert.equal(emptyCartText.getText(), 'Корзина пуста');
  });
});
