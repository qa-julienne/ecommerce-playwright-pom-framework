class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  //contructor
  constructor(page) //pass the page
  {
    this.page = page;//initialize the constructor

    //locators
    // Header / top navigation
    this.myAccountIcon = page.getByRole('link', { name: ' My Account ' });
    this.laptopsAndNotebooksMenu = page.getByRole('link', { name: 'Laptops & Notebooks', exact: true });
    this.showAllLaptopsAndNotebooks = page.getByRole('link', { name: 'Show All Laptops & Notebooks' });
    this.checkoutLink = page.getByRole('link', { name: ' Checkout' });

    // My Account dropdown
    this.loginLink = page.getByRole('link', { name: 'Login' });
  }

  //actions or methods
  async goto() {
    await this.page.goto('https://cloudberrystore.services/');
  }

  async openMyAccount() {
    await this.myAccountIcon.click();
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async openAllLaptopsAndNotebooks() {
    await this.laptopsAndNotebooksMenu.click();
    await this.showAllLaptopsAndNotebooks.click();
  }

  async goToCheckout() {
    await this.checkoutLink.click();
  }
}

module.exports = {HomePage};
