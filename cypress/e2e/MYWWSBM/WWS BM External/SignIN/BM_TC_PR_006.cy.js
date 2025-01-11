describe('Login Test Suite', () => {
    beforeEach(function() {
      cy.fixture('external_signIN').then((external_signIN) => {
        console.log('Loaded credentials:', external_signIN); // Debugging line
        this.external_signIN = external_signIN;
        });
      });
    
      it('Navigate to Privacy Policy Page', function() {

        cy.visit(this.external_signIN.link)
        cy.wait(3000)

        cy.get('.ant-row > :nth-child(3) > .ant-typography').click()
        cy.wait(3000)
    // });

    // // Close the browser after the test
    // after(() => {
    //   cy.exec('taskkill /F /IM chrome.exe /T'); // For Windows
     
});
});