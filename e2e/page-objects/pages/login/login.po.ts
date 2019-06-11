import {By, element} from 'protractor';

export class LoginPage {
    static get password() {
        return element(By.name('passwd'));
    }

    static get username() {
        return element(By.css('input[type=email]'));
    }

    static get nextButton() {
        return element(By.css('input[type=submit]'))
    }

    static get signInYes() {
        return element(By.css('input[value=Yes]'))
    }




}



