const {test, expect} = require('@playwright/test');//importing the required libraries for playwright
const {HomePage} = require('../pages/HomePage');//importing HomePage. Variable is HomePage
const {LoginPage} = require('../pages/LoginPage');
const {AccountPage} = require('../pages/AccountPage'); 
const {AffiliatePage} = require('../pages/AffiliatePage');


{test('@regression TC06_AddAfiiliate', async ({page}) =>
{
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const account = new AccountPage(page);
    const affiliate = new AffiliatePage(page);

    await home.goto();
    await home.openMyAccount();
    await home.clickLogin();
    await login.login('testacct123@email.com', 'password123');
    await expect(account.myAccountHeading).toContainText("My Account");
    await account.clickAffiliateLink();
    await affiliate.enterCompanyName('123 ABC');
    await affiliate.enterWebSiteName('www.123abc.com');
    await affiliate.enterTaxID('123456');
    await affiliate.enterChequePayeeName('Apple Jack');
    await affiliate.clickContinue();
    await expect(affiliate.successMessage).toContainText("Success");
})
    };