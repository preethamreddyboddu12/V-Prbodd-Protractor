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
const protractor_1 = require("protractor");
class CommonPageHelper {
    goTo(url) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.waitForAngularEnabled(false);
            return protractor_1.browser.get(url);
        });
    }
    click(item) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(item));
            return item.click();
        });
    }
}
exports.CommonPageHelper = CommonPageHelper;
//# sourceMappingURL=common-page.helper.js.map