import { DashboardPage } from "./dashboard.po";
import {browser, ExpectedConditions} from 'protractor';

export class DashboardPageHelper {

    static async clickDashBoardMenu(menu: string){
        await browser.wait(ExpectedConditions.visibilityOf(DashboardPage.createResource(menu)));
        await DashboardPage.createResource(menu).click();
    }
}