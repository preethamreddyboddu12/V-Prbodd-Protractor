import {browser, ExpectedConditions} from 'protractor';
import { NewResourcePage } from "./newresources.po";

export class NewResourcePageHelper {

    static async inputSearch(text: string){
        await browser.wait(ExpectedConditions.visibilityOf(NewResourcePage.searchMarketplace));
        await NewResourcePage.searchMarketplace.sendKeys(text);
    }

    static async clickAutoListValue(text: string){
        await browser.wait(ExpectedConditions.visibilityOf(NewResourcePage.searchAutoPopulateList(text)));
        await NewResourcePage.searchAutoPopulateList(text).click();
    }

    static async clickCreateButton(){
        await browser.wait(ExpectedConditions.visibilityOf(NewResourcePage.createButton));
        await NewResourcePage.createButton.click();
    }

    static async clickSelectButton(){
        await browser.wait(ExpectedConditions.visibilityOf(NewResourcePage.selectButton));
        await NewResourcePage.selectButton.click();
    }

    static async clickSelectSize(){
        await browser.executeScript('arguments[0].scrollIntoView(true)',NewResourcePage.selectSize);
        await NewResourcePage.selectSize.click();
       // await browser.wait(ExpectedConditions.visibilityOf(NewResourcePage.selectSize));
        //await browser.executeScript('arguments[0].click()',NewResourcePage.selectSize);
    }

    static async clickResourceGroupDropdown(){
        await browser.wait(ExpectedConditions.visibilityOf(NewResourcePage.createResourceGroup));
        await NewResourcePage.createResourceGroup.click();
    }

    static async clickResourceListValue(text: string){
        await browser.wait(ExpectedConditions.visibilityOf(NewResourcePage.ResourceGroupList(text)));
        await NewResourcePage.ResourceGroupList(text).click();
    }

    static async enterData(labelText: string, passwordFlag: string, inputText: string){
        await browser.wait(ExpectedConditions.visibilityOf(NewResourcePage.labelTextBoxes(labelText, passwordFlag)));
        await NewResourcePage.labelTextBoxes(labelText, passwordFlag).sendKeys(inputText);
    }

    static async clickSelectList(text1: string, text2: string){
        await browser.wait(ExpectedConditions.visibilityOf(NewResourcePage.selectSizeList(text1, text2)));
        await browser.actions().doubleClick(NewResourcePage.selectSizeList(text1, text2)).perform();
    }

    static async waitForTextBoxCheckIcon(labelText: string, passwordFlag: string){
        await browser.wait(ExpectedConditions.visibilityOf(NewResourcePage.labelTextBoxesCheckIcon(labelText, passwordFlag)));
    }

    static async waitForReviewInputVisibility(text: string){
        await browser.wait(ExpectedConditions.visibilityOf(NewResourcePage.reviewInput(text)));
    }

    static async waitForReviewValidationPassed(){
        await browser.wait(ExpectedConditions.visibilityOf(NewResourcePage.reviewValidationPassed));
        await browser.sleep(3000)
    }

    static async clickCreateAndReviewButton(){
        await browser.wait(ExpectedConditions.visibilityOf(NewResourcePage.createAndReviewButton));
        await NewResourcePage.createAndReviewButton.click();
    }

    static async clickCreateAfterReviewButton(){
        await browser.wait(ExpectedConditions.visibilityOf(NewResourcePage.createAfterReviewButton));
        await NewResourcePage.createAfterReviewButton.click();
    }

    static async verifyDeployemtUnderway(){
        await browser.wait(ExpectedConditions.visibilityOf(NewResourcePage.deploymentUnderway));
    }

}