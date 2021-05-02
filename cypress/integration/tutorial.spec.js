describe("Cypress Tutorial", function() {
    beforeEach(function() {
        cy.server();
        cy.route("/200?**").as("fakeNetworkRequest");

        cy.visit("http://localhost:3000");

        cy.wait("@fakeNetworkRequest");
    });

    it("works", function() {
        cy.findByText("Learn React");
    });

    it("has a link pointing to the react website", function() {
        cy.verifyLink("Learn React", "https://reactjs.org");
    });
});