describe('template spec', () => {
    it('passes', () => {

        // Allow users to share files with other X-Pro users (109)
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
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
        cy.wait(3000)
        cy.get('.mt-2 > .css-b62m3t-container > .css-10u1y7e-control > .css-hlgwow').click()
        cy.wait(3000)
        cy.get('#react-select-12-option-1').click()
        cy.wait(3000)
        cy.get('.mr-2 > .px-4').click()
        cy.wait(3000)
        // logout
        cy.get('[href="/logout"]').click()


        // Allow users to unshare files with other X-Pro users (111)
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
            cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
            cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
            cy.wait(3000)
            cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
            cy.wait(3000)
            cy.get(':nth-child(1) > :nth-child(2) > .relative > .text-sm').click()
            cy.wait(3000)
            cy.get('.absolute > :nth-child(3)').click()
            cy.wait(3000)
            cy.get('.ml-auto > :nth-child(2) > .px-4').click()
            //logout
            cy.get('[href="/logout"]').click()


         // Allow users to unshare files with other X-Pro users (113)
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
        cy.get('.space-y-1 > :nth-child(3) > .block').click()
        cy.wait(3000)
        // select file
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
        cy.wait(3000)
        // unshare
        cy.get(':nth-child(2) > :nth-child(2) > .relative > .text-sm').click()
        cy.wait(3000)
        cy.contains('Remove Access').click()
        cy.wait(5000)
         //logout
         cy.get('[href="/logout"]').click()


        // Allow users to transfer ownership of files (115)
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
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').rightclick()
        cy.wait(3000)
        cy.contains('Transfer Ownership').click()
        cy.wait(3000)
        cy.get('.mt-2 > .css-b62m3t-container > .css-10u1y7e-control > .css-hlgwow').click()
        cy.wait(3000)
        cy.get('#react-select-12-option-0').click()
        cy.wait(3000)
        cy.get('.my-5 > :nth-child(1) > .px-4').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()


        // Allow users to share a folder for the user to upload files into (117)
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
        // folder
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('.bg-blue-100 > .h-max > .justify-items-end > :nth-child(2)').click()
        cy.wait(3000)
        cy.get('.mt-2 > .css-b62m3t-container > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-12-option-0').click()
        cy.wait(3000)
        cy.get('.mr-2 > .px-4').click()
        cy.wait(3000)
         //logout
         cy.get('[href="/logout"]').click()


         //Access of non-xpro users can be restricted by setting permission levels(119)
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
        // Credentials 
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        //correct 2fa
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(3000)
        // retention policy
        cy.get('ul > :nth-child(5) > .flex').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()


        // Allow users to track who has accessed shared files (121)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        // Credentials 
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        //correct 2fa
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(3000)
        // audit trial
        cy.get('ul > :nth-child(4) > .flex').click()
        cy.wait(5000)
        // logout
        cy.get('[href="/logout"]').click()


        // Allow users to share files with other X-Pro users (123)
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
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
        cy.wait(3000)
        cy.get('.mt-2 > .css-b62m3t-container > .css-10u1y7e-control > .css-hlgwow').click()
        cy.wait(3000)
        cy.get('#react-select-12-option-3').click()
        cy.wait(3000)
        cy.get('.mr-2 > .px-4').click()
        // logout
        cy.get('[href="/logout"]').click()


        // Externally shared links should expire after a certain amount of time (125)
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
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
        cy.wait(3000)
        // copy link
        cy.get('.absolute > :nth-child(2) > .px-2').click()
        cy.wait(3000)
        cy.get('.shadow-md > .inline-flex > :nth-child(1)').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()


         // Externally shared links will be password protected (127)
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
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
        cy.wait(3000)
        // copy link
        cy.get('.absolute > :nth-child(2) > .px-2').click()
        cy.wait(3000)
        cy.get('.shadow-md > .inline-flex > :nth-child(2)').click()
        cy.wait(3000)
        cy.get('.bg-opacity-40 > .shadow-md > :nth-child(2) > .border').type('lyduza@closetab.email{enter}')
        cy.wait(3000)
        cy.get('.justify-between > .p-2').click()
        cy.wait(3000)
        cy.get('.ml-auto > .bg-blue-600').click()
        cy.wait(3000)
        cy.get('.ml-auto > .px-4').click()
        cy.wait(3000)
        cy.get('.ml-auto > :nth-child(2) > .px-4').click()
        // logout
        cy.get('[href="/logout"]').click()

        // Set Permission for shared files (341)
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
         cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
         cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
         cy.wait(3000)
         cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
         cy.wait(3000)
         cy.get('.mt-2 > .css-b62m3t-container > .css-10u1y7e-control > .css-hlgwow').click()
         cy.wait(3000)
         cy.get('#react-select-12-option-1').click()
         cy.wait(3000)
         cy.get('.mr-2 > .px-4').click()
        // select file
          cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
          cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
          cy.wait(3000)
          cy.get(':nth-child(2) > :nth-child(2) > .relative > .text-sm').click()
          cy.wait(3000)
          cy.get('.absolute > :nth-child(3)').click()
          cy.wait(3000)
          cy.get('.ml-auto > :nth-child(2) > .px-4').click()
          cy.wait(3000)
          // logout
          cy.get('[href="/logout"]').click()


          // Send Files to me (343)
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
        //  File received
        cy.get('.space-y-1 > :nth-child(7) > .block').click()
        cy.wait(3000)
        cy.get('.space-x-4 > div > .flex > span').click()
        cy.wait(3000)
        cy.get('.space-x-3 > span').click()
        // logout
        cy.get('[href="/logout"]').click()



        // USER Account

        // Allow users to share files with other X-Pro users (110)
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
        // select file
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
        cy.wait(3000)
        cy.get('.mt-2 > .css-b62m3t-container > .css-10u1y7e-control > .css-hlgwow').click()
        cy.wait(3000)
        cy.get('#react-select-12-option-1').click()
        cy.wait(3000)
        cy.get('.mr-2 > .px-4').click()
        cy.wait(3000)
        // logout
        cy.get('[href="/logout"]').click()


        // Allow users to unshare files with other X-Pro users (112)
    
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
        // select file
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > :nth-child(2) > .relative > .text-sm').click()
        cy.wait(3000)
        cy.get('.absolute > :nth-child(3)').click()
        cy.wait(3000)
        cy.get('.ml-auto > :nth-child(2) > .px-4').click()
        //logout
        cy.get('[href="/logout"]').click()

        //    Allow users to unshare files with other X-Pro users (114)
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
        cy.get('.space-y-1 > :nth-child(3) > .block').click()
        cy.wait(3000)
        // select file
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
        cy.wait(3000)
        // unshare
        cy.get(':nth-child(2) > :nth-child(2) > .relative > .text-sm').click()
        cy.wait(3000)
        cy.contains('Remove Access').click()
        cy.wait(5000)
         //logout
         cy.get('[href="/logout"]').click()


         // Allow users to transfer ownership of files (116)
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
        // select file
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').rightclick()
        cy.wait(3000)
        cy.contains('Transfer Ownership').click()
        cy.wait(3000)
        cy.get('.mt-2 > .css-b62m3t-container > .css-10u1y7e-control > .css-hlgwow').click()
        cy.wait(3000)
        cy.get('#react-select-12-option-0').click()
        cy.wait(3000)
        cy.get('.my-5 > :nth-child(1) > .px-4').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()


        // Allow users to share a folder for the user to upload files into (118)
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
        // folder
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('.bg-blue-100 > .h-max > .justify-items-end > :nth-child(2)').click()
        cy.wait(3000)
        cy.get('.mt-2 > .css-b62m3t-container > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-12-option-0').click()
        cy.wait(3000)
        cy.get('.mr-2 > .px-4').click()
        cy.wait(3000)
         //logout
         cy.get('[href="/logout"]').click()


         // Access of of non-xpro users can be restricted by setting permission levels (120)
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
        // Credentials 
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        //correct 2fa
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(3000)
        // retention policy
        cy.get('ul > :nth-child(5) > .flex').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()


        // Allow users to track who has accessed shared files (122)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        // Credentials 
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        //correct 2fa
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(3000)
        // audit trial
        cy.get('ul > :nth-child(4) > .flex').click()
        cy.wait(5000)
        // logout
        cy.get('[href="/logout"]').click()

        // Allow users to share files with other X-Pro users (124)
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
        // select file
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
        cy.wait(3000)
        cy.get('.mt-2 > .css-b62m3t-container > .css-10u1y7e-control > .css-hlgwow').click()
        cy.wait(3000)
        cy.get('#react-select-12-option-1').click()
        cy.wait(3000)
        cy.get('.mr-2 > .px-4').click()
        // logout
        cy.get('[href="/logout"]').click()
        

        // Externally shared links should expire after a certain amount of time (126)
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
        // select file
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
        cy.wait(3000)
        // copy link
        cy.get('.absolute > :nth-child(2) > .px-2').click()
        cy.wait(3000)
        cy.get('.shadow-md > .inline-flex > :nth-child(1)').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()


         // Externally shared links will be password protected (128)
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
            // select file
            cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
            cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
            cy.wait(3000)
            cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
            cy.wait(3000)
            // copy link
            cy.get('.absolute > :nth-child(2) > .px-2').click()
            cy.wait(3000)
            cy.get('.shadow-md > .inline-flex > :nth-child(2)').click()
            cy.wait(3000)
            cy.get('.bg-opacity-40 > .shadow-md > :nth-child(2) > .border').type('lyduza@closetab.email{enter}')
            cy.wait(3000)
            cy.get('.justify-between > .p-2').click()
            cy.wait(3000)
            cy.get('.ml-auto > .bg-blue-600').click()
            cy.wait(3000)
            cy.get('.ml-auto > .px-4').click()
            cy.wait(3000)
            cy.get('.ml-auto > :nth-child(2) > .px-4').click()
            // logout
            cy.get('[href="/logout"]').click()

        // Set Permission for shared files (342)
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
         // select file
         cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
         cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
         cy.wait(3000)
         cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
         cy.wait(3000)
         cy.get('.mt-2 > .css-b62m3t-container > .css-10u1y7e-control > .css-hlgwow').click()
         cy.wait(3000)
         cy.get('#react-select-12-option-3').click()
         cy.wait(3000)
         cy.get('.mr-2 > .px-4').click()
        // select file
          cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
          cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
          cy.wait(3000)
          cy.get(':nth-child(2) > :nth-child(2) > .relative > .text-sm').click()
          cy.wait(3000)
          cy.get('.absolute > :nth-child(3)').click()
          cy.wait(3000)
          cy.get('.ml-auto > :nth-child(2) > .px-4').click()
          cy.wait(3000)
          // logout
          cy.get('[href="/logout"]').click()


          // Send Files to me (344)
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
        //  File received
        cy.get('.space-y-1 > :nth-child(7) > .block').click()
        cy.wait(3000)
        cy.get('.space-x-4 > div > .flex > span').click()
        cy.wait(3000)
        cy.get('.space-x-3 > span').click()
        // logout
        cy.get('[href="/logout"]').click()


        
        // NON-XPRO USER

        // Share Files With Non-Xpro Users Via A Unique Public Link (301)
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
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 50px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 50px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
        cy.wait(3000)
        // copy link
        cy.get('.absolute > :nth-child(2) > .px-2').click()
        cy.wait(3000)
        cy.get('.shadow-md > .inline-flex > :nth-child(1)').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()
        cy.wait(3000)

        cy.visit('https://app.xpropeller.com/files/xpropeller/fa86da27-8948-4620-9f69-303d1058add2')

    

         // Share Folder For Non X-pro Users  To Upload Files Into File Me Concept (340)
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
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 50px; width: 100%;"]').trigger('mouseover')
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 50px; width: 100%;"]').should('be.visible')
         cy.wait(3000)
         cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(2)').click()
         cy.wait(3000)
         // copy link
         cy.get('.absolute > :nth-child(2) > .px-2').click()
         cy.wait(3000)
         cy.get('.shadow-md > .inline-flex > :nth-child(1)').click()
         cy.wait(3000)
         //logout
         cy.get('[href="/logout"]').click()

         cy.visit('https://app.xpropeller.com/files/xpropeller/042ee63e-73f4-441f-a7e1-57c08f4c8e62')


       
       
        })
})