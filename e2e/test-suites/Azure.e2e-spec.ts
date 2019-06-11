import {LoginPage} from '../page-objects/pages/login/login.po';
import {LoginPageHelper} from '../page-objects/pages/login/login-page.helper';
import {browser, ExpectedConditions} from 'protractor';
import { DashboardPageHelper } from '../page-objects/pages/dashboard/dashboard-page.helper';
import { NewResourcePageHelper } from '../page-objects/pages/newResources/newresources-page.helper';


//var path = require('path');



describe('Azure Login Check', () => {
    let loginPageHelper: LoginPageHelper;

    beforeEach(() => {
        loginPageHelper = new LoginPageHelper();
    });

    afterEach(() => {
        browser.driver.close();
       console.log('afterEach');
   });
   afterAll(() => {
    browser.driver.close();
  // console.log('afterEach');
});

   
//   browser.driver.close();

    it('Verify Deployment', async () => {
        const user1 = browser.params.user1;
        
        await loginPageHelper.goToPage();
        await browser.wait(ExpectedConditions.visibilityOf(LoginPage.username));
        await LoginPage.username.sendKeys(user1.username);
        await LoginPage.nextButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(LoginPage.password));
        await LoginPage.password.sendKeys(user1.password);
        await LoginPage.nextButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(LoginPage.signInYes));
        await LoginPage.signInYes.click();
        await DashboardPageHelper.clickDashBoardMenu('Create a resource');
        await NewResourcePageHelper.inputSearch('Data Science');
        await NewResourcePageHelper.clickAutoListValue('Data Science Virtual Machine - Windows 2016');
        await NewResourcePageHelper.clickCreateButton();
        await NewResourcePageHelper.clickResourceGroupDropdown();
        await NewResourcePageHelper.clickResourceListValue('ankit');
        await NewResourcePageHelper.enterData('Virtual machine name', 'Text','BF7867688975599867');
        await NewResourcePageHelper.waitForTextBoxCheckIcon('Virtual machine name', 'Text');
        await NewResourcePageHelper.clickSelectSize();
        await NewResourcePageHelper.clickSelectList('B1ms','Standard');
        await NewResourcePageHelper.clickSelectButton();
        await NewResourcePageHelper.enterData('Username', 'Text','username');
        await NewResourcePageHelper.enterData('Password', 'Password','Password@123');
        await NewResourcePageHelper.enterData('Confirm password', 'Password','Password@123');
        await NewResourcePageHelper.waitForTextBoxCheckIcon('Confirm password', 'Password')
        await NewResourcePageHelper.clickCreateAndReviewButton();
        await NewResourcePageHelper.waitForReviewValidationPassed();
        await NewResourcePageHelper.clickCreateAfterReviewButton();
        await NewResourcePageHelper.verifyDeployemtUnderway();
        expect(true).toBe(true);  
        browser.sleep(20000);
     
    });

});