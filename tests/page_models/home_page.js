import { Selector, t } from 'testcafe';

export default class HomePage {
    constructor() {
        this.facebookHome = Selector('a').withAttribute('href', 'https://www.facebook.com/?ref=logo');
        this.sideNav = Selector('#universalNav').child('ul');
        this.newsFeed = Selector('span').withAttribute('data-testid', 'bookmark_icon_left_navleft_nav_item_News Feed');
        this.messenger = this.sideNav.child('li').nth(1);
        this.watch = this.sideNav.child('li').nth(2);
        this.marketplace = this.sideNav.child('li').nth(3);
        
        this.stories = new Stories();
        this.composer = new Composer();
    }

}

class Composer {
    constructor() {
        this.composerContainer = Selector('#feedx_sprouts_container');
        this.whatsOnYourMind = this.composerContainer.find('div').withAttribute('role', 'textbox');        
        
        // Composer Buttons
        this.collapsedSprouts = this.composerContainer.find('ul');
        this.uploadImage = this.collapsedSprouts.child('li').nth(0).find('input');
        this.tagFriends = this.collapsedSprouts.child('li').nth(1); // people-sprout
        this.feeling = this.collapsedSprouts.child('li').nth(2);
        this.moreThreeDots = this.collapsedSprouts.child('li').nth(3);
        
        this.destinationPicker = Selector('div').withAttribute('div', 'destination-picker')
        this.selectNewsfeed = Selector('li').withAttribute('data-destination','TIMELINE');
        this.selectYourStory = Selector('li').withAttribute('data-destination','STORIES');;
        this.postButton = this.composerContainer.find('button').withAttribute('type', 'submit');


    }
}

class Stories {
    constructor() {
        this.storiesTray = Selector('#stories_tray', {visibilityCheck: true}).child(0);
        this.addStory = this.storiesTray.child('div').child('div').nth(0);
        this.firstStory = this.storiesTray.child('div').nth(1);

        // Playing Story
        this.storiesTheater = Selector('#fb_stories_theater');
        this.likeReaction = Selector('span').withAttribute('aria-label', 'Like');
        this.loveReaction = Selector('span').withAttribute('aria-label', 'Love');
        this.wowReaction = Selector('span').withAttribute('aria-label', 'Wow');
        this.haHaReaction = Selector('span').withAttribute('aria-label', 'Haha');

        this.playButton = Selector('div').withAttribute('aria-label', 'Play');
        this.pauseButon = Selector('div').withAttribute('aria-label', 'Pause');

    }
}