describe('Login Test Suite', () => {
    beforeEach(function() {
      cy.fixture('external_signIN').then((external_signIN) => {
        console.log('Loaded credentials:', external_signIN); // Debugging line
        this.external_signIN = external_signIN;
        });
      });
    
      it('Navigate to Terms of Service Page', function() {

        // link
        cy.visit(this.external_signIN)
        cy.wait(3000)

        // account login
        cy.get('#basic_email').type(this.external_signIN.invalid_clientadmin_username)
        cy.get('.ant-input-affix-wrapper').type(this.external_signIN.invalid_clientadmin_password)

        //sign in button
        cy.get('.ant-form-item-control-input-content > .cursor-pointer').click()
        cy.wait(3000)

        // Capture the error message and assert the content
        cy.get('.ant-alert') 
            .should('be.visible')
            .and('contain.text', 'Incorrect Password! You have 2 attempt(s) left before your account is locked.');
    // });

    // // Close the browser after the test
    // after(() => {
    //   cy.exec('taskkill /F /IM chrome.exe /T'); // For Windows
     
});
});