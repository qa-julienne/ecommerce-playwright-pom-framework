const {test, expect} = require('@playwright/test');//importing the required libraries for playwright
const {HomePage} = require('../pages/HomePage');//importing HomePage. Variable is HomePage 

test('@sanity @regression TC01_LaunchApplication', async ({ page }) => //page is like a driver
  {
  const home = new HomePage(page);//creating an object from HomePage to use elements. Variable is home
  await home.goto();
  await expect(page).toHaveTitle('Your store of fun');
  });
