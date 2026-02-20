class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  //contructor
  constructor(page) //pass the page
  {
    this.page = page;//initialize the constructor

    //locators
    this.loginLink = page.getByRole('link', { name: 'login page' });
    this.dropdownShippingAdddress = page.locator('#input-shipping-address');
    this.selectShipAddress = page.locator('#input-shipping-address');
    this.shippingConfirmation = page.getByText('Success: You have changed');
    this.shippingMethod = page.locator('#button-shipping-methods');
    this.btnContinue = page.getByRole('button', { name: 'Continue' });
    this.paymentMethod = page.locator('#button-payment-methods');
    //this.btnContinuePaymentMethod = page.locator("//button[@id='button-payment-method']");
    this.btnConfirmOrder = page.getByRole('button', { name: 'Confirm Order' });
    this.confirmationMessage = page.getByRole('heading', { name: 'Your order has been placed!' });
  }

  async clickLoginLink()
  {
    await this.loginLink.click();
  }

  async selectShippingAddress()
  {
    await this.dropdownShippingAdddress.click();
    await this.selectShipAddress.selectOption({ index: 1 });
  }


  async selectShippingMethod()
  {
    await this.shippingMethod.click();
    await this.btnContinue.click();
  }


  async selectPaymentMethod()
  {
    await this.paymentMethod.click();
    await this.btnContinue.click();
  }


  async clickConfirmOrder()
  {
    await this.btnConfirmOrder.click();
  }
}
module.exports = {CheckoutPage};