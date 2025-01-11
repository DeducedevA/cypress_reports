describe('Login Test Suite', () => {
    beforeEach(function() {
      cy.fixture('external_signIN').then((external_signINN) => {
        console.log('Loaded credentials:', external_signIN); // Debugging line
        this.external_signIN = external_signIN;
        });
      });
    
      it('Navigate to Terms of Service Page', function() {

        // link
        cy.visit(this.external_signIN.link)
        cy.wait(3000)

        // account login
        cy.get('#basic_email').type(this.external_signIN.clientadmin_username)
        cy.get('.ant-input-affix-wrapper').type(this.external_signIN.clientadmin_password)

        // password eye doggle
        cy.get('.ant-input-suffix').click()
        cy.wait(1000)
        cy.get('.ant-input-suffix').click()

        // remember me
        cy.get('#basic_remember').click()

        // sign in button
        cy.get('.ant-form-item-control-input-content > .cursor-pointer').click()
        cy.wait(3000)
      
    // });

    // // Close the browser after the test
    // after(() => {
    //   cy.exec('taskkill /F /IM chrome.exe /T'); // For Windows
     
});
});