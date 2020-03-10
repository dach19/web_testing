import { Selector, t } from 'testcafe';

export default class MarketPlace {
    constructor() {
        this.title = Selector('a', {visibilityCheck: true}).withAttribute('tilte', 'Marketplace');
        this.searchBar = Selector('div').withAttribute('data-testid', 'marketplace_search_input_container');
        this.searchFeedContent = Selector('div').withAttribute('data-testid', 'marketplace_search_feed_content');
        this.searchResults = this.searchFeedContent.find('div')
    }

}