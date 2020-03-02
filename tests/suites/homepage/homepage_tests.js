import { Selector, t, ClientFunction } from 'testcafe';
import LoginPage from '../../page_models/login_page';
import HomePage from '../../page_models/home_page';
import config from '../../config';

const path = require('path');
const pathToImage = path.resolve('./tests/upload');
const loginPage = new LoginPage();
const homePage = new HomePage();

fixture `Home Page Tests`
	.page `https://facebook.com/login/`
	.beforeEach(async t => {
		await t.maximizeWindow();
	});

test('User can Sign in to facebook.com', async t => {

	await t
		.typeText(loginPage.email, config.user.email)
		.typeText(loginPage.password, config.user.password)
		.click(loginPage.loginButton);
	
	await t.expect(homePage.marketplace.exists).ok;
	await t.expect(homePage.newsFeed.exists).ok;
	
});

test('Add a Story and react to friends stories', async t => {

	await t
	.typeText(loginPage.email, config.user.email)
	.typeText(loginPage.password, config.user.password)
	.click(loginPage.loginButton);
	
	await t
		.click(homePage.stories.addStory)
		.wait(8000);
	await t
		.click(homePage.composer.whatsOnYourMind)
		.typeText(homePage.composer.whatsOnYourMind, 'Mar10 2019 ', {speed: 0.5})
		.click(homePage.composer.selectNewsfeed, {speed: 0.5})
		.setFilesToUpload(homePage.composer.uploadImage, [`${pathToImage}/MAR10Day.jpg`])
		.wait(5000)
		.click(homePage.composer.postButton, {speed: 0.5});
	
	// Open add story, composer is not displayed
	await t
		.wait(6600)
		.click(homePage.stories.addStory)
		.expect(homePage.stories.storiesTheater.exists).ok('Stories did not open');

	// await t.click(homePage.stories.firstStory).wait(4500);
	await t.click(homePage.stories.likeReaction);
	await t.click(homePage.facebookHome);
});