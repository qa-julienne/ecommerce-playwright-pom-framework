class AccountPage
{/**
   * @param {import('@playwright/test').Page} page
   */

//contructor
  constructor(page) //pass the page
  {
    this.page = page;//initialize the constructor
    
    //locators
    this.myAccountHeading = page.locator("//h1[normalize-space()='My Account']");
    this.affiliateLink = page.getByRole('link', { name: 'Affiliate', exact: true });

}

//actions or methods
async clickAffiliateLink()
{
    await this.affiliateLink.click();
}
}

module.exports = {AccountPage};