const {test, expect} = require('@playwright/test');//importing the required libraries for playwright
const {HomePage} = require('../pages/HomePage');//importing HomePage. Variable is HomePage
const {CategoryPage} = require('../pages/CategoryPage');
const {ProductPage} = require('../pages/ProductPage'); 
const {LoginPage} = require('../pages/LoginPage');
const {CheckoutPage} = require('../pages/CheckoutPage');

{test('@sanity @regression TC04_CompletePurchase', async ({page}) =>
{
    const home = new HomePage(page);
    const category = new CategoryPage(page);
    const product = new ProductPage(page);
    const login = new LoginPage(page);
    const checkout = new CheckoutPage(page);

    await home.goto();
    await home.openAllLaptopsAndNotebooks();
    await category.openProductByName('HP LP3065');//HP LP3065 is the parameter for productName
    await product.setDeliveryDate();
    await product.clickAddToCart();
    //await expect(product.successAlert).toContainText("Success");
    await home.goToCheckout();
    await checkout.clickLoginLink();
    await login.login('testacct123@email.com', 'password123');
    await checkout.selectShippingAddress();
    await expect(checkout.shippingConfirmation).toContainText('Success');
    await checkout.selectShippingMethod();
    await checkout.selectPaymentMethod();
    await checkout.clickConfirmOrder();
    await expect(checkout.confirmationMessage).toContainText("Your order has been placed!");
})
    };