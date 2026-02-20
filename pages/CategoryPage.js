class CategoryPage
{/**
   * @param {import('@playwright/test').Page} page
   */

//contructor
  constructor(page) //pass the page
  {
    this.page = page;//initialize the constructor


    //locators
    //page.getByText('HP LP3065', { exact: true }).click();

  }

  //actions or methods
  async openProductByName (productName)//productName is the parameter
  {
    await this.page.getByText(productName, { exact: true }).click();
  }
}
module.exports = {CategoryPage};
