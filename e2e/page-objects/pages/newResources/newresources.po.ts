import {By, element} from 'protractor';

export class NewResourcePage {
    static get searchMarketplace() {
        return element(By.xpath(`//div[contains(@class,'azc-formElementSubLabelContainer')]//input`));
    }


    static searchAutoPopulateList(text: string ) {
        return element(By.xpath(`//li[@role='option' and contains(.,'${text}')]`));
    }


    static get createButton() {
        return element(By.css(`div[title=Create]`));
    }

    static get createResourceGroup(){
        return element(By.xpath(`//div[contains(@aria-label,'Resource group')]//input`));
    }

    static ResourceGroupList(text: string){
        return element(By.xpath(`//div[contains(@aria-label,'${text}')]`));
    }

    static labelTextBoxes(labelText: string, passwordFlag: string){
        return element(By.xpath(`//div[contains(@class,'fxc-${passwordFlag}Field') and contains(.,'${labelText}')]//input`));
    }

    static labelTextBoxesCheckIcon(labelText: string, passwordFlag: string){
        return element(By.xpath(`//div[contains(@class,'fxc-${passwordFlag}Field') and contains(.,'${labelText}')]//span[contains(@data-bind,'check')]`));
    }

    static selectSizeList(text1: string, text2: string){
        return element(By.xpath(`//tr[contains(.,'${text1}') and contains(.,'${text2}')]`));
    }

    static get selectButton() {
        return element(By.css(`div[title=Select]`));
    }

    static get selectSize() {
        return element(By.css(`span.fxc-pricing-control-link`));
    }

    static get createAndReviewButton() {
        return element(By.css(`div[title='Review + create']`));
    }

    static reviewInput(text: string){
        return element(By.xpath(`//div[contains(@class,'fxc-summary-item-valu') and contains(.,'${text}')]`));
    }

    static get reviewValidationPassed(){
        return element(By.xpath(`//div[contains(@class,'status-container') and contains(.,'Validation passed')]`));
    }

    static get createAfterReviewButton() {
        return element(By.xpath(`//div[contains(@data-bind,'createForm.createButton')]//div[@title='Create']`));
    }


    static get deploymentUnderway() {
        return element(By.xpath(`//div[@data-bind='text: status' and contains(.,'deployment is underway')]`));
    }


    //span[.='Select size']

    //div[@title='Select']

    //div[@data-bind='text: status' and contains(.,'deployment is underway')]

//tr[contains(.,'A0') and contains(.,'Basic')]


}