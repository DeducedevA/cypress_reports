// describe('Login Test Suite', () => {
//     beforeEach(function() {
//       cy.fixture('external_signIN').then((external_signIN) => {
//         console.log('Loaded credentials:', external_signIN); // Debugging line
//         this.external_signIN = external_signIN
//         });
//       });
    
//       it('Open WWS About Us Page', function() {

//         cy.visit(this.external_signIN.link)
//         cy.wait(3000)

//         cy.get(':nth-child(1) > .ant-typography').click()
//         cy.wait(3000)
//     // });

//     // // Close the browser after the test
//     // after(() => {
//     //   cy.exec('taskkill /F /IM chrome.exe /T'); // For Windows
     

        

        





//       });
//     });


describe('Login Test Suite', () => {
  beforeEach(function () {
    // Load credentials from the fixture
    cy.fixture('external_signIN').then((external_signIN) => {
      this.external_signIN = external_signIN;
    });
  });

  it('Open WWS About Us Page', function () {
    // Visit the specified link from the fixture
    cy.visit(this.external_signIN.link);

    // Wait for elements to load (consider replacing with assertions if possible)
    cy.wait(3000);

    // Click on the 'About Us' link
    cy.get(':nth-child(1) > .ant-typography').click();

    // Wait for the page to respond (replace with a better approach if applicable)
    cy.wait(3000);
    cy.screenshot();
  });


  // Uncomment this block if needed for closing the browser after tests
  // after(() => {
  //   cy.exec('taskkill /F /IM chrome.exe /T'); // Close the browser (Windows-specific)
  // });
});
