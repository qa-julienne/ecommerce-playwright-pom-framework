class ProductPage
{/**
   * @param {import('@playwright/test').Page} page
   */

//contructor
  constructor(page) //pass the page
  {
    this.page = page;//initialize the constructor


    //locators
    
    this.deliveryDateInput = page.getByRole('textbox', { name: '* Delivery Date' });
    this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' });
    this.btnWishList = page.locator("//div//button//i[@class='fa-solid fa-heart']");
    this.successAlert = page.getByText('Success: You have added HP');

   
    
   
    }

     //actions or methods

     async setDeliveryDate()
     {
        const deliveryDate = new Date();
        console.log(deliveryDate);

        deliveryDate.setDate(deliveryDate.getDate()+5);//Added 5 days to current date

        const mm = String(deliveryDate.getMonth()+1).padStart(2, '0');
        const dd = String(deliveryDate.getDate()).padStart(2, '0');
        const yyyy = String(deliveryDate.getFullYear());

        const formattedDeliveryDate = `${yyyy}-${mm}-${dd}`; //date format compatible with javascript
        console.log(formattedDeliveryDate);
        await this.deliveryDateInput.fill(formattedDeliveryDate);
     }

     async clickAddToCart()
     {
        await this.addToCartButton.click();
     }
     async clickAddToWishList()
     {
      await this.btnWishList.click();
     }


}
module.exports = {ProductPage};