class LoginPage{
    /**
   * @param {import('@playwright/test').Page} page
   */

//constructor
constructor(page) //pass the page
  {
    this.page = page;//initialize the constructor

//locators
this.email = page.getByRole('textbox', { name: 'E-Mail Address' });
this.password = page.getByRole('textbox', { name: 'Password' });
this.loginButton = page.getByRole('button', { name: 'Login' });
}

async login(username, password)//2 parameters coming from the test
{
    await this.email.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
}

}
module.exports = {LoginPage};