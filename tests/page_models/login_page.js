import { Selector } from 'testcafe';

export default class LoginPage {
	constructor() {
		this.email = Selector('#email');
		this.password = Selector('#pass');
		this.loginButton = Selector('#loginbutton');
	}
}
