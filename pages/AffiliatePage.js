class AffiliatePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  //contructor
  constructor(page) //pass the page
  {
    this.page = page;//initialize the constructor

    //locators
    this.clearCompany = page.getByRole('textbox', { name: 'Company' });
    this.txtCompany = page.locator("#input-company");
    this.txtWebSite = page.getByRole('textbox', { name: 'Web Site' });
    this.txtTaxId = page.getByRole('textbox', { name: 'Tax ID' });
    this.chequePayeeName = page.getByRole('textbox', { name: '* Cheque Payee Name' });
    this.btnContinue = page.getByRole('button', { name: 'Continue' });
    this.successMessage = page.getByText('Success: Your affiliate');

 }

 async enterCompanyName(companyName)
  {
    await this.clearCompany.clear();
    await this.txtCompany.fill(companyName);
  }

   async enterWebSiteName(webSiteName)
  {
    await this.txtWebSite.clear();
    await this.txtWebSite.fill(webSiteName);
  }

  async enterTaxID(taxID)
  {
    await this.txtTaxId.clear();
    await this.txtTaxId.fill(taxID);
  }

  async enterChequePayeeName(chequePayeeName)
  {
    await this.chequePayeeName.clear();
    await this.chequePayeeName.fill(chequePayeeName);
  }

  async clickContinue()
  {
    await this.btnContinue.click();
  }
}
module.exports = {AffiliatePage};