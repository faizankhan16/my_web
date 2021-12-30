const {new_search} =  require("selectors.json")
class NewSearch {
    search() {
        cy.get(new_search.searchField).type("Google")
        cy.get(new_search.searchBtn).click();
    }
}

const s = new NewSearch();

s.search();