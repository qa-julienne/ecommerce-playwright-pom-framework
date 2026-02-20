const {test, expect} = require('@playwright/test');//importing the required libraries for playwright
const {HomePage} = require('../pages/HomePage');//importing HomePage. Variable is HomePage
const {LoginPage} = require('../pages/LoginPage');
const {AccountPage} = require('../pages/AccountPage'); 
const dataset = JSON.parse(JSON.stringify(require('../utils/CloudBerryStoreTestData.json')));//importing the dataset JSON File
const users = dataset.Sheet1; //get datasheet from Sheet1, which is the name of the array


for(const data of users)
{test(`@sanity @datadriven @regression TC02_Login-${data.username}`, async ({page}) => //each test run
{
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const account = new AccountPage(page);

    await home.goto();
    await home.openMyAccount();
    await home.clickLogin();
    await login.login(data.username, data.password);//dynamic data driven test

    //await expect(account.myAccountHeading).toContainText("My Account");//assertion that validates the Header Text
    await expect(account.myAccountHeading).toBeVisible(); //assertion that validates the Header is visible
})
};
