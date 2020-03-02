import { Selector, t, ClientFunction } from 'testcafe';
import HomePage from '../../page_models/home_page';
import {signIn} from '../../helper_function/helper_function';
import config from '../../config';
import MarketPlace from '../../page_models/marketplace_page';

const homePage = new HomePage();
const marketPlace = new MarketPlace();

fixture `Marketplace Tests`
	.page `https://facebook.com/login/`;

test('Serach marketplace for products', async t => {

    await signIn(config.user);
    await t
        .click(homePage.marketplace)
        .expect(marketPlace.title.exists).ok;

    await t
        .typeText(marketPlace.searchBar, 'nintendo')
        .pressKey('enter')
        .wait(5000);
	
});