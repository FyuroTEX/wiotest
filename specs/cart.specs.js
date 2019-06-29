const Cart = require('../pageobjects/cart');
const Product = require('../pageobjects/product')
const assert = require('assert');

describe('Cart', () => {
  it('Test count when buy 1 product', () => { 
    Product.openProduct('/playstation_4_slim_1tb_black_bundle_9926009/p88868229');
    
    Product.buy();
    Product.closeModal();
    
    let cartCountText = Cart.cartCount;
    assert.equal(cartCountText.getText(), '1');
  });
  it('Delete from cart 1 product', () => {
    Cart.openCart();
    Cart.dellAllProd();
    
    let emptyCartText = Cart.emptyCart; //Why do we need this?
    assert.equal(emptyCartText.getText(), 'Корзина пуста');
  });
  it('Delete all', () => {
    
    Product.openProduct('/kingston_suv500_240g/p40090208');
    Product.buy();
    
    Product.openProduct('/kingston_kc_s44240_6f/p70512518');
    Product.buy();
    Cart.openCart();
    
    Cart.dellAllProd();
   
    let emptyCartText = Cart.emptyCart;
    assert.equal(emptyCartText.getText(), 'Корзина пуста');
  });
});
