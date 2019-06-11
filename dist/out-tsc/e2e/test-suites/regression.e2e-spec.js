"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_po_1 = require("../page-objects/pages/login/login.po");
const login_page_helper_1 = require("../page-objects/pages/login/login-page.helper");
const protractor_1 = require("protractor");
var path = require('path');
describe('G mail suite', () => {
    let loginPageHelper;
    beforeEach(() => {
        loginPageHelper = new login_page_helper_1.LoginPageHelper();
    });
    it('Send email', () => __awaiter(this, void 0, void 0, function* () {
        const user1 = protractor_1.browser.params.user1;
        yield loginPageHelper.goToPage();
        yield login_po_1.LoginPage.username.sendKeys(user1.username);
        yield protractor_1.element(protractor_1.By.id('identifierNext')).click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(login_po_1.LoginPage.password));
        yield login_po_1.LoginPage.password.sendKeys(user1.password);
        yield protractor_1.browser.sleep(5000);
        yield login_po_1.LoginPage.passwordNextButton.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.By.xpath(`//*[@role='button' and (.)='COMPOSE']`))));
        yield protractor_1.element(protractor_1.By.xpath(`//*[@role='button' and (.)='COMPOSE']`)).click();
        yield protractor_1.browser.sleep(15000);
        yield protractor_1.element(protractor_1.By.css('[name="to"]')).clear();
        yield protractor_1.element(protractor_1.By.css('[name="to"]')).sendKeys('secondUser@gmail.com');
        yield protractor_1.element(protractor_1.By.css('[name="subjectbox"]')).clear();
        yield protractor_1.element(protractor_1.By.css('[name="subjectbox"]')).sendKeys('Following is the subject for Crossover');
        yield protractor_1.element(protractor_1.By.xpath('//div[@class="Am Al editable LW-avf"]')).clear();
        yield protractor_1.element(protractor_1.By.xpath('//div[@class="Am Al editable LW-avf"]')).sendKeys('Hi Corssover please use an existing id for testing the same');
        yield protractor_1.element(protractor_1.By.css('[class="a1 aaA aMZ"]')).click();
        var fileToUpload = '../abc.txt';
        var absolutePath = path.resolve(__dirname, fileToUpload);
        protractor_1.element(protractor_1.By.css('input[type="file"]')).sendKeys(absolutePath);
        protractor_1.element(protractor_1.By.id('uploadButton')).click();
        const user2 = protractor_1.browser.params.user2;
        yield loginPageHelper.click(protractor_1.element(protractor_1.By.xpath('//*[@role="button" and text()="Send"]')));
        yield loginPageHelper.goToPage();
        yield login_po_1.LoginPage.username.sendKeys(user2.username);
        yield protractor_1.element(protractor_1.By.id('identifierNext')).click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(login_po_1.LoginPage.password));
        yield login_po_1.LoginPage.password.sendKeys(user2.password);
        yield protractor_1.browser.sleep(5000);
        yield login_po_1.LoginPage.passwordNextButton.click();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.By.xpath(`//*[@role='button' and (.)='COMPOSE']`))));
        yield protractor_1.element(protractor_1.By.css('[aria-label="Search"]')).sendKeys('Following is the subject for Crossover');
        yield protractor_1.element(protractor_1.By.css('[aria-label="Search Mail"]')).click();
        yield protractor_1.browser.sleep(15000);
        expect(protractor_1.element(protractor_1.By.css('[title="abc.txt"]')).isPresent()).toBe(true);
        expect(protractor_1.element(protractor_1.By.xpath('//span[contains(text(),"Following is the subject for Crossover")]')).isPresent()).toBe(true);
        expect(protractor_1.element(protractor_1.By.xpath('//span[contains(text(),"Hi Corssover please use an existing id for testing the same")]')).isPresent()).toBe(true);
    }));
});
//# sourceMappingURL=regression.e2e-spec.js.map