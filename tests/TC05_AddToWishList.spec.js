const {test, expect} = require('@playwright/test');//importing the required libraries for playwright
const {HomePage} = require('../pages/HomePage');//importing HomePage. Variable is HomePage
const {LoginPage} = require('../pages/LoginPage');
const {AccountPage} = require('../pages/AccountPage'); 
const {CategoryPage} = require('../pages/CategoryPage');
const {ProductPage} = require('../pages/ProductPage'); 

{test('@regression TC05_AddToWishList', async ({page}) =>
{
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const account = new AccountPage(page);
    const category = new CategoryPage(page);
    const product = new ProductPage(page);

    await home.goto();
    await home.openMyAccount();
    await home.clickLogin();
    await login.login('testacct123@email.com', 'password123');
    await expect(account.myAccountHeading).toContainText("My Account");
    await home.openAllLaptopsAndNotebooks();
    await category.openProductByName('HP LP3065');//HP LP3065 is the parameter for productName
    await product.clickAddToWishList();
    await expect(product.successAlert).toContainText("Success");

    })
    };