describe('template spec', () => {
    it('passes', () => {
      

        // ADMIN ACCOUNT

        //  Free-text search (81)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       cy.get('.w-full.flex-1 > .flex-1.flex-col > :nth-child(1) > .relative').click()
       cy.get('.space-y-2 > :nth-child(2)').click()
        // logout
        cy.get('[href="/logout"]').click()


         // Seach results will show only files that the user has access to (83)
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
         cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
         cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
         cy.wait(3000)
         cy.get('.px-2').type('123456{enter}')
         cy.wait(3000)
         // Documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        cy.get('.w-full.flex-1 > .flex-1.flex-col > :nth-child(1) > .relative').click()
        cy.get('.space-y-2 > :nth-child(2)').click()
         // logout
         cy.get('[href="/logout"]').click()
 

        //Users should be able to filter the search results by file type(85)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
         // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //  search
        cy.get('.relative > .css-10u1y7e-control').click()
        cy.wait(3000)
        cy.get('#react-select-7-option-3').click()
        cy.wait(3000)
         //logout
        cy.get('[href="/logout"]').click()

        
        //Users should be able to filter the search results by owner(87)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
         // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //  search
        cy.get(':nth-child(2) > .css-10u1y7e-control').click()
        cy.wait(3000)
        cy.get('#react-select-8-option-1').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()


        //Users should be able to filter the search results by  modified date.(89)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
         // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //  search
        cy.get('.w-full > .flex-1 > .relative > div > .px-2').click()
        cy.wait(3000)
        cy.get('.w-full > .flex-1 > .relative > div > .px-2').type('2023-12-23{enter}')
        cy.wait(3000)
         //logout
         cy.get('[href="/logout"]').click()

         //  Search via DCN (91)
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       cy.get('.w-full.flex-1 > .flex-1.flex-col > :nth-child(1) > .relative').click()
       cy.get('.space-y-2 > :nth-child(2)').click()
        // logout
        cy.get('[href="/logout"]').click()


        // User should be able to search via date (93)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       cy.get('.w-full.flex-1 > .flex-1.flex-col > :nth-child(1) > .relative').click()
       cy.get('.space-y-2 > :nth-child(2)').click()
        // logout
        cy.get('[href="/logout"]').click()

         // User should be able to search via author (95)
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
         cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
         cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
         cy.wait(3000)
         cy.get('.px-2').type('123456{enter}')
         cy.wait(3000)
         // Documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        cy.get('.w-full.flex-1 > .flex-1.flex-col > :nth-child(1) > .relative').click()
        cy.get('.space-y-2 > :nth-child(2)').click()
         // logout
         cy.get('[href="/logout"]').click()

         // User should be able to search via Keyword (97)
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       cy.get('.w-full.flex-1 > .flex-1.flex-col > :nth-child(1) > .relative').click()
       cy.get('.space-y-2 > :nth-child(2)').click()
        // logout
        cy.get('[href="/logout"]').click()


        
        // Search Through Content Of A File / OCR Based Search (297)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       cy.get('.w-full.flex-1 > .flex-1.flex-col > :nth-child(1) > .relative').click()
       cy.get('.space-y-2 > :nth-child(2)').click()
        // logout
        cy.get('[href="/logout"]').click()




        //  USER ACCOUNT

        //  Free-text search (82)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       cy.get('.w-full.flex-1 > .flex-1.flex-col > :nth-child(1) > .relative').click()
       cy.get('.space-y-2 > :nth-child(2)').click()
        // logout
        cy.get('[href="/logout"]').click()

         // Seach results will show only files that the user has access to (84)
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
         cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
         cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
         cy.wait(3000)
         cy.get('.px-2').type('123456{enter}')
         cy.wait(3000)
         // Documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        cy.get('.w-full.flex-1 > .flex-1.flex-col > :nth-child(1) > .relative').click()
        cy.get('.space-y-2 > :nth-child(2)').click()
         // logout
         cy.get('[href="/logout"]').click()
 

          //Users should be able to filter the search results by file type(86)
          cy.visit('https://alpha.xpropeller.com/signin')
          cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
         // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //  search
        cy.get('.relative > .css-10u1y7e-control').click()
        cy.wait(3000)
        cy.get('#react-select-7-option-3').click()
        cy.wait(3000)
         //logout
        cy.get('[href="/logout"]').click()

        
        //Users should be able to filter the search results by owner(88)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
         // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //  search
        cy.get(':nth-child(2) > .css-10u1y7e-control').click()
        cy.wait(3000)
        cy.get('#react-select-8-option-1').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()


        //Users should be able to filter the search results by  modified date.(90)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
         // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //  search
        cy.get('.w-full > .flex-1 > .relative > div > .px-2').click()
        cy.wait(3000)
        cy.get('.w-full > .flex-1 > .relative > div > .px-2').type('2023-12-23{enter}')
         //logout
         cy.get('[href="/logout"]').click()


         //  Search via DCN (92)
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       cy.get('.w-full.flex-1 > .flex-1.flex-col > :nth-child(1) > .relative').click()
       cy.get('.space-y-2 > :nth-child(2)').click()
        // logout
        cy.get('[href="/logout"]').click()

        // User should be able to search via date (94)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       cy.get('.w-full.flex-1 > .flex-1.flex-col > :nth-child(1) > .relative').click()
       cy.get('.space-y-2 > :nth-child(2)').click()
        // logout
        cy.get('[href="/logout"]').click()


         // User should be able to search via author (96)
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
         cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
         cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
         cy.wait(3000)
         cy.get('.px-2').type('123456{enter}')
         cy.wait(3000)
         // Documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        cy.get('.w-full.flex-1 > .flex-1.flex-col > :nth-child(1) > .relative').click()
        cy.get('.space-y-2 > :nth-child(2)').click()
         // logout
         cy.get('[href="/logout"]').click()

         // User should be able to search via Keyword (98)
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       cy.get('.w-full.flex-1 > .flex-1.flex-col > :nth-child(1) > .relative').click()
       cy.get('.space-y-2 > :nth-child(2)').click()
        // logout
        cy.get('[href="/logout"]').click()


      
        // Search Through Content Of A File / OCR Based Search (298)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       cy.get('.w-full.flex-1 > .flex-1.flex-col > :nth-child(1) > .relative').click()
       cy.get('.space-y-2 > :nth-child(2)').click()
        // logout
        cy.get('[href="/logout"]').click()
   


        })
})