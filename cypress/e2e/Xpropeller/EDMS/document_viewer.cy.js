describe('template spec', () => {
    it('passes', () => {
        

     // Support for various files types (25)
     cy.visit('https://alpha.xpropeller.com/signin')
     cy.wait(3000)
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
    cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
    cy.wait(3000)
    cy.get('.px-2').type('123456{enter}')
    cy.wait(3000)
   //  documents
    cy.get('[href="/dms"]').click()
    cy.wait(3000)
    cy.get('.space-y-1 > :nth-child(2) > .block').click()
   //  open document
    cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').dblclick()
    cy.wait(10000)
    // logout
    cy.get('[href="/logout"]').click()


    
     // Support for Zip files(27)
     cy.visit('https://alpha.xpropeller.com/signin')
     cy.wait(3000)
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
     cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
     cy.wait(3000)
     cy.get('.px-2').type('123456{enter}')
     cy.wait(3000)
    //  documents
     cy.get('[href="/dms"]').click()
     cy.wait(3000)
     cy.get('.space-y-1 > :nth-child(2) > .block').click()
    //  open document
    cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').dblclick()
     cy.wait(10000)
      //logout
     cy.get('[href="/logout"]').click()

     //Export  as pdf(29)
     cy.visit('https://alpha.xpropeller.com/signin')
     cy.wait(3000)
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
     cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
     cy.wait(3000)
     cy.get('.px-2').type('123456{enter}')
     cy.wait(3000)
    //  documents
     cy.get('[href="/dms"]').click()
     cy.wait(3000)
     cy.get('.space-y-1 > :nth-child(2) > .block').click()
    //  open document
    cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').dblclick()
     cy.wait(10000)
    // print
    cy.get(':nth-child(2) > .inline-flex > :nth-child(1)').click()
     //logout
     cy.get('[href="/logout"]').click()


     // Download files(33)
     cy.visit('https://alpha.xpropeller.com/signin')
     cy.wait(3000)
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
    cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
    cy.wait(3000)
    cy.get('.px-2').type('123456{enter}')
    cy.wait(3000)
   //  documents
    cy.get('[href="/dms"]').click()
    cy.wait(3000)
    cy.get('.space-y-1 > :nth-child(2) > .block').click()
   //  open document
   cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').dblclick()
    cy.wait(10000)
   // downlpad
   cy.get(':nth-child(2) > .inline-flex > :nth-child(2)').click()
    //logout
    cy.get('[href="/logout"]').click()


    //file linking (39)
    cy.visit('https://alpha.xpropeller.com/signin')
    cy.wait(3000)
    // Credentials 
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
    cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
    cy.wait(3000)
    //correct 2fa
    cy.get('.px-2').type('123456{enter}')
    cy.wait(3000)
    // documents
    cy.get('[href="/dms"]').click()
    cy.wait(3000)
    // docbase
    cy.get(':nth-child(9) > .block').click()
    cy.wait(3000)
     //logout
     cy.get('[href="/logout"]').click()

    //  USER ACCOUNT
    
    // Support for various files types (26)
    cy.visit('https://alpha.xpropeller.com/signin')
    cy.wait(3000)
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
    cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
    cy.wait(3000)
    cy.get('.px-2').type('123456{enter}')
    cy.wait(3000)
   //  documents
    cy.get('[href="/dms"]').click()
    cy.wait(3000)
    cy.get('.space-y-1 > :nth-child(2) > .block').click()
   //  open document
   cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').dblclick()
    cy.wait(10000)
    // logout
    cy.get('[href="/logout"]').click()


    
     // Support for Zip files(28)
     cy.visit('https://alpha.xpropeller.com/signin')
     cy.wait(3000)
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
     cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
     cy.wait(3000)
     cy.get('.px-2').type('123456{enter}')
     cy.wait(3000)
    //  documents
     cy.get('[href="/dms"]').click()
     cy.wait(3000)
     cy.get('.space-y-1 > :nth-child(2) > .block').click()
    //  open document
    cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').dblclick()
     cy.wait(10000)
      //logout
     cy.get('[href="/logout"]').click()

     //Export  as pdf(30)
     cy.visit('https://alpha.xpropeller.com/signin')
     cy.wait(3000)
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
     cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
     cy.wait(3000)
     cy.get('.px-2').type('123456{enter}')
     cy.wait(3000)
    //  documents
     cy.get('[href="/dms"]').click()
     cy.wait(3000)
     cy.get('.space-y-1 > :nth-child(2) > .block').click()
    //  open document
    cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').dblclick()
     cy.wait(10000)
    // print
    cy.get(':nth-child(2) > .inline-flex > :nth-child(1)').click()
     //logout
     cy.get('[href="/logout"]').click()


     // Download files(34)
     cy.visit('https://alpha.xpropeller.com/signin')
     cy.wait(3000)
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
    cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
    cy.wait(3000)
    cy.get('.px-2').type('123456{enter}')
    cy.wait(3000)
   //  documents
    cy.get('[href="/dms"]').click()
    cy.wait(3000)
    cy.get('.space-y-1 > :nth-child(2) > .block').click()
   //  open document
   cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').dblclick()
    cy.wait(10000)
   // downlpad
   cy.get(':nth-child(2) > .inline-flex > :nth-child(2)').click()
    //logout
    cy.get('[href="/logout"]').click()

    //file linking (40)
    cy.visit('https://alpha.xpropeller.com/signin')
    cy.wait(3000)
    // Credentials 
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
    cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
    cy.wait(3000)
    //correct 2fa
    cy.get('.px-2').type('123456{enter}')
    cy.wait(3000)
    // documents
    cy.get('[href="/dms"]').click()
    cy.wait(3000)
    // docbase
    cy.get(':nth-child(9) > .block').click()
    cy.wait(3000)
     //logout
     cy.get('[href="/logout"]').click()
    


    // NON -XPRO USER


     // View files without signing in (31)
     cy.visit('https://alpha.xpropeller.com/signin')
     cy.wait(3000)
        // Credentials 
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        //correct 2fa
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        // select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
        cy.wait(3000)
        cy.get('.absolute > :nth-child(2) > .px-2').click()
        cy.wait(3000)
        cy.get('.shadow-md > .inline-flex > :nth-child(1)').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()


     cy.visit('https://app.xpropeller.com/files/xpropeller/fa86da27-8948-4620-9f69-303d1058add2')

     // View files without signing in (31)
     cy.visit('https://alpha.xpropeller.com/signin')
     cy.wait(3000)
        // Credentials 
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        //correct 2fa
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        // select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
        cy.wait(3000)
        cy.get('.absolute > :nth-child(2) > .px-2').click()
        cy.wait(3000)
        cy.get('.shadow-md > .inline-flex > :nth-child(1)').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()


     cy.visit('https://app.xpropeller.com/files/xpropeller/042ee63e-73f4-441f-a7e1-57c08f4c8e62')

   
     
        

        
    })
})