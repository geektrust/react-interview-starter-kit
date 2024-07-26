import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:6565/react-app');
});


test('has select location header', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Select Location' })).toBeVisible();
});

// test('has the select country dropdown', async({page})=> {
//   // / Wait for the REST call that loads the dropdown options
//   await page.waitForResponse(response => 
//       response.url().includes('https://crio-location-selector.onrender.com/countries') && response.status() === 200  // Replace with actual API endpoint
//   );
//   const dropdownSelector = await page.$('xpath=//select[option[contains(text(), "Select Country")]]');
//   await expect(dropdownSelector).toBeTruthy()
//   if (dropdownSelector) {
//     // Get the options of the dropdown, excluding the "Select Country" option
//     const options = await dropdownSelector.$$eval('option', options => 
//         options.map(option => option.textContent).filter(text => text !== "Select Country")
//     );
//     console.log(options.length)
//     expect(options.length>0).toBeTruthy()
//   }
// });


