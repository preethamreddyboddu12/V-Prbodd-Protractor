"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginPage {
    static get password() {
        return protractor_1.element(protractor_1.By.name('password'));
    }
    static get username() {
        return protractor_1.element(protractor_1.By.id('identifierId'));
    }
    static get passwordNextButton() {
        return protractor_1.element(protractor_1.By.id('passwordNext'));
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.po.js.map