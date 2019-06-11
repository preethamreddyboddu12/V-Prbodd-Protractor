import {By, element} from 'protractor';

export class DashboardPage {
    static createResource(menu: string) {
        return element(By.xpath(`//a[contains(.,'${menu}')]`));
    }

}



