

describe('End to End Testing', function () {
    it('ecommerce site', function () {
        const productName = "Nokia edge"
        // login 
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/");
        cy.get('#username').type('rahulshettyacademy');
        cy.get('#password').type('learning');
        cy.contains('Sign In').click();

        // website navigation assertion
        cy.contains("Shop Name").should('be.visible')

        // products assertion
        cy.get('app-card').should('have.length', 4)

        // Select the products
        cy.get(':nth-child(3) > .card > .card-footer > .btn').click();
        cy.get(':nth-child(1) > .card > .card-footer > .btn').click();

        // Checkout
        cy.get('.btn-primary').click()

        // Check the total ambout is below 200000
        let sum = 0; // Initialize sum
        cy.get('tr td:nth-child(4) strong')
          .each(($el) => {
            const amount = Number($el.text().split(" ")[1].trim());
            sum += amount;
          })
          .then(() => {
            expect(sum).to.be.lessThan(200000);
          });
        

        cy.contains('button', 'Checkout').click()
        cy.get("#country").type("India")
        cy.wait(7000);
        cy.get('div ul li a').contains('India').click();
        cy.get(".btn-success").click()
        cy.get(".alert-success").should('contain', 'Success')





    })
})