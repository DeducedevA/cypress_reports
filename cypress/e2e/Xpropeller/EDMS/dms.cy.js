describe('template spec', () => {
    it('passes', () => {
        

        // ADMIN ACCOUNT

         // File upload via button (145) 
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
        // user id for summiting
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        // file upload
        cy.get('.p-4 > .relative > .w-full').click()
        cy.wait(3000)
        cy.get('.p-4 > .relative > .bg-white > :nth-child(2) > :nth-child(1)').click()
        cy.contains('File Upload').click()
        //logout
        cy.get('[href="/logout"]').click()


        // Users can also upload files to “My Files”. (148) 
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        // user id for summiting
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        // my files
        cy.get('.space-y-1 > :nth-child(6) > .block').click()
        cy.wait(3000)
        cy.get('.p-4 > .relative > .w-full').click()
        cy.wait(3000)
        cy.get('.p-4 > .relative > .bg-white > :nth-child(2) > :nth-child(1)').click()
        //logout
        cy.get('[href="/logout"]').click()

            // set remainder (149) 
            cy.visit('https://alpha.xpropeller.com/signin')
            cy.wait(3000)
          // user id for summiting
          cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
          cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
          cy.wait(3000)
          cy.get('.px-2').type('123456{enter}')
          cy.wait(3000)
          // documents
          cy.get('[href="/dms"]').click()
          cy.wait(3000)
          //select file
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
          cy.wait(3000)
          cy.contains('Set Reminder').click()
          cy.wait(3000)
          cy.get(':nth-child(2) > .p-1 > input').click()
          cy.wait(3000)
          cy.get('.p-4 > .pt-3 > .flex:nth-child(1) > div > .px-2').click()
          cy.wait(3000)
          cy.get('.p-4 > .pt-3 > .flex:nth-child(1) > div > .px-2').type('2023-12-27')
          cy.wait(3000)
          cy.get('.pt-3 > :nth-child(3) > :nth-child(2) > .px-2').click()
          cy.wait(3000)
          cy.get('.p-4 > .pt-3 > .flex:nth-child(2) > div > .px-2').type('2024-02-29')
          cy.wait(3000)
          cy.get('.p-4 > .pt-3 > .flex:nth-child(3) > div > .px-2').click()
          cy.wait(3000)
          cy.get('.p-4 > .pt-3 > .flex:nth-child(3) > div > .px-2').type('18:17')
          cy.wait(3000)
          cy.get('.z-10 > .bg-white > .p-4 > .pt-3 > .flex:nth-child(5)').click()
          cy.wait(3000)
          cy.get('#react-select-13-option-0').click()
          cy.wait(3000)
          cy.get('.ml-12 > .css-10u1y7e-control').click()
          cy.wait(3000)
          cy.get('#react-select-12-option-0').click()
          cy.wait(3000)
          cy.get('.p-2 > .bg-blue-500').click()
          cy.wait(3000)
          cy.get('.justify-end > .ml-auto').click()
          cy.wait(5000)
          // logout
          cy.get('[href="/logout"]').click()


         // file rename (150) 
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
         // user id for summiting
         cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
         cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
         cy.wait(3000)
         cy.get('.px-2').type('123456{enter}')
         cy.wait(3000)
         // documents
         cy.get('[href="/dms"]').click()
         cy.wait(3000)
         //select file
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
         cy.contains('Rename').click()
         cy.wait(3000)
         cy.get('.bg-white > .py-4 > .block').clear()
         cy.get('.bg-white > .py-4 > .block').type('file{enter}')
         cy.wait(3000)
         //logout
         cy.get('[href="/logout"]').click()

          // Edit metadata (151)
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
        //select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()

        cy.wait(3000)
        cy.contains('Edit Metadata').click()
        cy.wait(3000)
        // fill metadata
        cy.get(':nth-child(1) > .px-2 > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-12-option-0').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > :nth-child(1) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-13-option-5').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-14-option-2').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-15-option-0').click()
        cy.wait(3000)
        cy.get('.p-3 > :nth-child(2) > input').click()
        // save
        cy.get('.ml-auto > .bg-blue-600').click()
        cy.wait(6000)
        //logout
        cy.get('[href="/logout"]').click()

         // Make a copy (152) 
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
         // user id for summiting
         cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
         cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
         cy.wait(3000)
         cy.get('.px-2').type('123456{enter}')
         cy.wait(3000)
         // documents
         cy.get('[href="/dms"]').click()
         cy.wait(3000)
         //select file
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
          cy.wait(3000)
         // make a copy
         cy.contains('Make a copy').click()
         cy.wait(3000)
         cy.reload()
         cy.wait(7000)
         //logout
         cy.get('[href="/logout"]').click()

        //  // show version (153) incomplete 
        //  cy.visit('https://alpha.xpropeller.com/signin')
        //  cy.wait(3000)
        // // user id for summiting
        // cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        // cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        // cy.wait(3000)
        // cy.get('.px-2').type('123456{enter}')
        // cy.wait(3000)
        // // documents
        // cy.get('[href="/dms"]').click()
        // cy.wait(3000)
        // //select file
        // cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        // cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        //   cy.wait(3000)
        //   cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
        //   cy.wait(3000)
        //   cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
        //   cy.wait(3000)
        // // show versions
        // cy.contains('Show Versions').click()
        // cy.wait(3000)
        // cy.get(':nth-child(2) > :nth-child(1) > .p-4').trigger('mouseover')
        // cy.get(':nth-child(2) > :nth-child(1) > .p-4').should('be.visible')
        // cy.wait(3000)
        // cy.get('input[type="checkbox"]').check() // not running
        // cy.get('input[type="checkbox"]').click()
         // //logout
        // cy.get('[href="/logout"]').click()

        //  // add comment (154)  incomplete
        //  cy.visit('https://alpha.xpropeller.com/signin')
        //  cy.wait(3000)
        //  // user id for summiting
        //  cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        //  cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        //  cy.wait(3000)
        //  cy.get('.px-2').type('123456{enter}')
        //  cy.wait(3000)
        //  // documents
        //  cy.get('[href="/dms"]').click()
        //  cy.wait(3000)
        //  //select file
        //  cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        //  cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        //   cy.wait(3000)
        //   cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
        //   cy.wait(3000)
        //   cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
        //   cy.wait(3000)
        //  // add 
        //  cy.contains('Add Comment').click()
        //  cy.wait(3000)
        //  cy.get('.py-1.px-1 > :nth-child(1) > .px-2').click()
        //  cy.get('.py-1.px-1 > :nth-child(1) > .px-2').type('points')
        //  cy.wait(3000)
        //  cy.get('.py-1.px-1 > .dark\:text-gray-300').click()
        //  cy.get('.py-1.px-1 > .dark\:text-gray-300').type('note all the points here') // not running
        //  // submit
        //  cy.get('.my-5 > :nth-child(1) > .px-4').click()
        //  cy.wait(3000)
        //  // //logout
        //  // cy.get('[href="/logout"]').click()


         // add tag (155)  
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
        // user id for summiting
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
        cy.wait(3000)
        // add tag
        cy.contains('Add Tag').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .border-b').click()
        cy.wait(3000)
        cy.get('.my-5 > :nth-child(1) > .px-4').click()
        cy.wait(3000)
        cy.reload()
        cy.wait(7000)
        //logout
        cy.get('[href="/logout"]').click()


        // file download (157)  
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        // user id for summiting
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        // file download
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(3)').click()

        //logout
        cy.get('[href="/logout"]').click()


        // Mark as favorite (158)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        // user id for summiting
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        //  make as favorite
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max > :nth-child(1) > .pl-4 > .items-center > .top-1').click()
        cy.wait(3000)
        // logout
        cy.get('[href="/logout"]').click()


        // DCN (159)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        // user id for summiting
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
       //  DCN
       cy.get('.space-x-2 > .flex > .rounded-full').click()
       cy.wait(3000)
        // logout
       cy.get('[href="/logout"]').click()

       
       // folder download (160)  
       cy.visit('https://alpha.xpropeller.com/signin')
       cy.wait(3000)
       // user id for summiting
       cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
       cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
       cy.wait(3000)
       cy.get('.px-2').type('123456{enter}')
       cy.wait(3000)
       // documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       //select file
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
       cy.wait(3000)
       // folder download
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(3)').click()
       cy.wait(3000)
       //logout
       cy.get('[href="/logout"]').click()

       
       // Review and approve (162)
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
      
       //select file
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
      cy.wait(3000)
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
      cy.wait(3000)
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
      // metadata
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
      cy.wait(3000)
      cy.contains('Edit Metadata').click()
      cy.wait(3000)
      // fill metadata
      cy.get(':nth-child(1) > .px-2 > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
      cy.get('#react-select-12-option-0').click()
      cy.wait(3000)
      cy.get(':nth-child(2) > :nth-child(1) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
      cy.get('#react-select-13-option-5').click()
      cy.wait(3000)
      cy.get(':nth-child(2) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
      cy.get('#react-select-14-option-2').click()
      cy.wait(3000)
      cy.get(':nth-child(3) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
      cy.get('#react-select-15-option-0').click()
      cy.wait(3000)
      cy.get('.p-3 > :nth-child(2) > input').click()
      // save
      cy.get('.ml-auto > .bg-blue-600').click()
      cy.wait(5000) 
      // reload
      cy.reload()
      cy.wait(3000)
      // review and approve in cabinet
       //select file
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
      cy.wait(3000)
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
      cy.wait(3000)
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
      // select review and approve
      cy.contains('Review And Approve').click()
      cy.wait(3000)
      // logout
      cy.get('[href="/logout"]').click()

       
       // Docbridge - Approve (163)
       cy.visit('https://alpha.xpropeller.com/signin')
       cy.wait(3000)
       // user id for summiting
       cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
       cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
       cy.wait(3000)
       cy.get('.px-2').type('123456{enter}')
       cy.wait(3000)
       // Documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       //select file
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
       cy.wait(3000)
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
       cy.wait(3000)
       // metadata
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
       cy.wait(3000)
       cy.contains('Edit Metadata').click()
       cy.wait(3000)
       // fill metadata
       cy.get(':nth-child(1) > .px-2 > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-12-option-0').click()
       cy.wait(3000)
       cy.get(':nth-child(2) > :nth-child(1) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-13-option-5').click()
       cy.wait(3000)
       cy.get(':nth-child(2) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-14-option-2').click()
       cy.wait(3000)
       cy.get(':nth-child(3) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-15-option-0').click()
       cy.wait(3000)
       cy.get('.p-3 > :nth-child(2) > input').click()
       // save
       cy.get('.ml-auto > .bg-blue-600').click()
       cy.wait(5000) 
       // reload
       cy.reload()
       cy.wait(3000)
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
       cy.wait(3000)
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
       cy.wait(3000)
       // metadata
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
       cy.wait(3000)
       // select review and approve
       cy.contains('Submit For Approval').click()
       cy.wait(3000)
       // logout
       cy.get('[href="/logout"]').click()

       // admin account for approve in doc bridge
       cy.visit('https://alpha.xpropeller.com/signin')
       cy.wait(3000)
       // user id for summiting
       cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
       cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
       cy.wait(3000)
       cy.get('.px-2').type('123456{enter}')
       cy.wait(3000)
       // Documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       // doc bridge
       cy.get('.space-y-1 > :nth-child(8) > .block').click()
       cy.wait(3000)
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
       cy.wait(3000)
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
       cy.wait(3000)
       cy.contains('Approved').click()
       cy.wait(5000)
       //logout
       cy.get('[href="/logout"]').click()

       // Docbridge - Interdict(164)
       cy.visit('https://alpha.xpropeller.com/signin')
       cy.wait(3000)
       // user id for summiting
       cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
       cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
       cy.wait(3000)
       cy.get('.px-2').type('123456{enter}')
       cy.wait(3000)
       // Documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       //select file
       cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
       cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
       cy.wait(3000)
       cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').click()
       cy.wait(3000)
       // metadata
       cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').rightclick()
       cy.wait(3000)
       cy.contains('Edit Metadata').click()
       cy.wait(3000)
       // fill metadata
       cy.get(':nth-child(1) > .px-2 > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-12-option-0').click()
       cy.wait(3000)
       cy.get(':nth-child(2) > :nth-child(1) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-13-option-5').click()
       cy.wait(3000)
       cy.get(':nth-child(2) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-14-option-2').click()
       cy.wait(3000)
       cy.get(':nth-child(3) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-15-option-0').click()
       cy.wait(3000)
       cy.get('.p-3 > :nth-child(2) > input').click()
       // save
       cy.get('.ml-auto > .bg-blue-600').click()
       cy.wait(5000) 
       // reload
       cy.reload()
       cy.wait(3000)
       cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').trigger('mouseover')
       cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').should('be.visible')
       cy.wait(3000)
       cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').click()
       cy.wait(3000)
       // metadata
       cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').rightclick()
       cy.wait(3000)
       // select review and approve
       cy.contains('Submit For Approval').click()
       cy.wait(3000)
       // logout
       cy.get('[href="/logout"]').click()

       // admin account for approve in doc bridge
       cy.visit('https://alpha.xpropeller.com/signin')
       cy.wait(3000)
       // user id for summiting
       cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
       cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
       cy.wait(3000)
       cy.get('.px-2').type('123456{enter}')
       cy.wait(3000)
       // Documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       // doc bridge
       cy.get('.space-y-1 > :nth-child(8) > .block').click()
       cy.wait(3000)
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max').click()
       cy.wait(3000)
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max').rightclick()
       cy.wait(3000)
       cy.contains('Mark As Issue').click()
       cy.wait(3000)
       cy.get('.py-1 > .border').type('It has some error')
       cy.wait(3000)
       cy.get('.my-5 > :nth-child(1) > .px-4').click()
       cy.wait(3000)
       cy.reload()
       cy.wait(3000)
       // interdict documents
       cy.get(':nth-child(10) > .block').click()
       cy.wait(3000)
       
       //logout
       cy.get('[href="/logout"]').click()
 


       // Add metadata (165)  
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
      //  doc bridge
       cy.get('.space-y-1 > :nth-child(8) > .block').click()
       cy.wait(3000)
      //select file
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
          cy.wait(3000)
       cy.contains('Edit Metadata').click()
       cy.wait(3000)
       // fill metadata
       cy.get(':nth-child(1) > .px-2 > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-12-option-0').click()
       cy.wait(3000)
       cy.get(':nth-child(2) > :nth-child(1) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-13-option-5').click()
       cy.wait(3000)
       cy.get(':nth-child(2) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-14-option-2').click()
       cy.wait(3000)
       cy.get(':nth-child(3) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-15-option-0').click()
       cy.wait(3000)
       cy.get('.p-3 > :nth-child(2) > input').click()
       // save
       cy.get('.ml-auto > .bg-blue-600').click()
       cy.wait(5000) 
       // logout
       cy.get('[href="/logout"]').click()


       //Docbase - list view (167)
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
       //  doc base
       cy.get(':nth-child(9) > .block').click()
       cy.wait(3000)
       // logout
       cy.get('[href="/logout"]').click()


       //Docbase - compunded view (168)
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
       //  doc base
       cy.get(':nth-child(9) > .block').click()
       cy.wait(3000)
       // logout
       cy.get('[href="/logout"]').click()

       //Docbase - multiple delete prompts (169)
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
      //  doc base
      cy.get(':nth-child(9) > .block').click()
      cy.wait(3000)
      // multiple delete
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').dblclick()
      cy.wait(3000)
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').dblclick()
      // cy.wait(3000)
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').dblclick()
      // //  files
      /cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
      // cy.wait(3000)
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
      cy.wait(3000)
      cy.contains('Remove').click()
      cy.wait(3000)
      cy.get('.ml-auto > .text-white').click()
      cy.wait(3000)
      cy.get('.ml-auto > .text-white').click()
       //logout
       cy.get('[href="/logout"]').click()

       //Interdicted documents (170)
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
      // interdicted documents 
       cy.get(':nth-child(9) > .block').click()
       cy.wait(3000)
       //logout
       cy.get('[href="/logout"]').click()


       //  Interdicted documents  - retension policy (171) incomplete
       cy.visit('https://alpha.xpropeller.com/signin')
       cy.wait(3000)
       cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
       cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
       cy.wait(3000)
       cy.get('.px-2').type('123456{enter}')
       cy.wait(3000)
       //settings
       cy.get('[href="/settings"]').click()
       cy.wait(3000)
      //  retension policy
       cy.get(':nth-child(5) > .flex').click()
       cy.wait(5000)

        // Cabinet - create from template (173) incomplete
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
       //  new folder
        cy.get('.p-4 > .relative > .w-full').click()
        cy.wait(3000)
        cy.get('.border-b > .hover\:bg-gray-100 > span').click()


        //  Request for approval  - Due Date (175) 
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
        //select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
        cy.wait(3000)
        cy.contains('Edit Metadata').click()
        cy.wait(3000)
        // fill metadata
        cy.get(':nth-child(1) > .px-2 > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-12-option-0').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > :nth-child(1) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-13-option-5').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-14-option-2').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-15-option-0').click()
        cy.wait(3000)
        cy.get('.p-3 > :nth-child(2) > input').click()
       //    set reminder
        cy.get('.pt-2 > input').click()
        cy.get('.p-4 > .pt-3 > .flex:nth-child(1) > div > .px-2').type('2023-12-27')
        cy.wait(3000)
        cy.get('.pt-3 > :nth-child(3) > :nth-child(2) > .px-2').click()
        cy.wait(3000)
        cy.get('.p-4 > .pt-3 > .flex:nth-child(2) > div > .px-2').type('2024-02-29')
        cy.wait(3000)
        cy.get('.p-4 > .pt-3 > .flex:nth-child(3) > div > .px-2').click()
        cy.wait(3000)
        cy.get('.p-4 > .pt-3 > .flex:nth-child(3) > div > .px-2').type('18:17')
        cy.wait(3000)
        cy.get('.z-10 > .bg-white > .p-4 > .pt-3 > .flex:nth-child(5)').click()
        cy.wait(3000)
        cy.get('#react-select-17-option-0').click()
        cy.wait(3000)
        cy.get('.ml-12 > .css-10u1y7e-control').click()
        cy.wait(3000)
        cy.get('#react-select-16-option-0').click()
        cy.wait(3000)
        cy.get('.p-2 > .bg-blue-500').click()
        cy.wait(3000)
        cy.get('.ml-auto > .bg-blue-600').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()


        // DR Scoring(338)
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
        // Doc base
        cy.get(':nth-child(9) > .block').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max').dblclick()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max').dblclick()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max').dblclick()
         //logout
         cy.get('[href="/logout"]').click()




        // USER ACCOUNT

         // File upload via button (177) 
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
         // user id for summiting
         cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
         cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
         cy.wait(3000)
         cy.get('.px-2').type('123456{enter}')
         cy.wait(3000)
         // documents
         cy.get('[href="/dms"]').click()
         cy.wait(3000)
         // file upload
         cy.get('.p-4 > .relative > .w-full').click()
         cy.wait(3000)
         cy.get('.p-4 > .relative > .bg-white > :nth-child(2) > :nth-child(1)').click()
         cy.contains('File Upload').click()
         //logout
         cy.get('[href="/logout"]').click()


         // Users can also upload files to “My Files”. (180) 
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
        // user id for summiting
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        // my files
        cy.get('.space-y-1 > :nth-child(6) > .block').click()
        cy.wait(3000)
        cy.get('.p-4 > .relative > .w-full').click()
        cy.wait(3000)
        cy.get('.p-4 > .relative > .bg-white > :nth-child(2) > :nth-child(1)').click()
        //logout
        cy.get('[href="/logout"]').click()

        // set remainder (181) 
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        // user id for summiting
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
        cy.wait(3000)
        cy.contains('Set Reminder').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .p-1 > input').click()
        cy.wait(3000)
        cy.get('.p-4 > .pt-3 > .flex:nth-child(1) > div > .px-2').click()
        cy.wait(3000)
        cy.get('.p-4 > .pt-3 > .flex:nth-child(1) > div > .px-2').type('2023-12-27')
        cy.wait(3000)
        cy.get('.pt-3 > :nth-child(3) > :nth-child(2) > .px-2').click()
        cy.wait(3000)
        cy.get('.p-4 > .pt-3 > .flex:nth-child(2) > div > .px-2').type('2024-02-29')
        cy.wait(3000)
        cy.get('.p-4 > .pt-3 > .flex:nth-child(3) > div > .px-2').click()
        cy.wait(3000)
        cy.get('.p-4 > .pt-3 > .flex:nth-child(3) > div > .px-2').type('18:17')
        cy.wait(3000)
        cy.get('.z-10 > .bg-white > .p-4 > .pt-3 > .flex:nth-child(5)').click()
        cy.wait(3000)
        cy.get('#react-select-13-option-0').click()
        cy.wait(3000)
        cy.get('.ml-12 > .css-10u1y7e-control').click()
        cy.wait(3000)
        cy.get('#react-select-12-option-0').click()
        cy.wait(3000)
        cy.get('.p-2 > .bg-blue-500').click()
        cy.wait(3000)
        cy.get('.justify-end > .ml-auto').click()
        cy.wait(5000)
        // logout
        cy.get('[href="/logout"]').click()

         // file rename(182) 
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
         // user id for summiting
         cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
         cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
         cy.wait(3000)
         cy.get('.px-2').type('123456{enter}')
         cy.wait(3000)
         // documents
         cy.get('[href="/dms"]').click()
         cy.wait(3000)
         //select file
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
          cy.wait(3000)
         // rename
         cy.contains('Rename').click()
         cy.wait(3000)
         cy.get('.bg-white > .py-4 > .block').clear()
         cy.get('.bg-white > .py-4 > .block').type('file{enter}')
         cy.wait(3000)
         //logout
         cy.get('[href="/logout"]').click()

          // Edit metadata (183)
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
         //select file
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
          cy.wait(3000)
         cy.wait(3000)
         cy.contains('Edit Metadata').click()
         cy.wait(3000)
         // fill metadata
         cy.get(':nth-child(1) > .px-2 > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
         cy.get('#react-select-12-option-0').click()
         cy.wait(3000)
         cy.get(':nth-child(2) > :nth-child(1) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
         cy.get('#react-select-13-option-5').click()
         cy.wait(3000)
         cy.get(':nth-child(2) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
         cy.get('#react-select-14-option-2').click()
         cy.wait(3000)
         cy.get(':nth-child(3) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
         cy.get('#react-select-15-option-0').click()
         cy.wait(3000)
         cy.get('.p-3 > :nth-child(2) > input').click()
         // save
         cy.get('.ml-auto > .bg-blue-600').click()
         cy.wait(6000)
         //logout
         cy.get('[href="/logout"]').click()


         // Request for approval (161)
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
        // user id for summiting
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
          cy.wait(3000)
        cy.contains('Edit Metadata').click()
        cy.wait(3000)
        // fill metadata
        cy.get(':nth-child(1) > .px-2 > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-12-option-0').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > :nth-child(1) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-13-option-5').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-14-option-2').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-15-option-0').click()
        cy.wait(3000)
        cy.get('.p-3 > :nth-child(2) > input').click()
        // save
        cy.get('.ml-auto > .bg-blue-600').click()
        cy.wait(5000) 
        // reload
        cy.reload()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
        cy.wait(3000)
        // select review and approve
        cy.contains('Submit For Approval').click()
        cy.wait(3000)
        // logout
        cy.get('[href="/logout"]').click()


        // Make a copy (184) 
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        // user id for summiting
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
        cy.wait(3000)
        // make a copy
        cy.contains('Make a copy').click()
        cy.wait(3000)
        cy.reload()
        cy.wait(7000)
        //logout
        cy.get('[href="/logout"]').click()


        // show version (185) incomplete 
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        // user id for summiting
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
          cy.wait(3000)
        // show versions
        cy.contains('Show Versions').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > :nth-child(1) > .p-4').trigger('mouseover')
        cy.get(':nth-child(2) > :nth-child(1) > .p-4').should('be.visible')
        cy.wait(3000)
        cy.get('input[type="checkbox"]').check() // not running
        cy.get('input[type="checkbox"]').click()
         // //logout
        // cy.get('[href="/logout"]').click()
        

        // add comment (186)  incomplete
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        // user id for summiting
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
          cy.wait(3000)
        // add 
        cy.contains('Add Comment').click()
        cy.wait(3000)
        cy.get('.py-1.px-1 > :nth-child(1) > .px-2').click()
        cy.get('.py-1.px-1 > :nth-child(1) > .px-2').type('points')
        cy.wait(3000)
        cy.get('.py-1.px-1 > .dark\:text-gray-300').click()
        cy.get('.py-1.px-1 > .dark\:text-gray-300').type('note all the points here') // not running
        // submit
        cy.get('.my-5 > :nth-child(1) > .px-4').click()
        cy.wait(3000)
        // //logout
        // cy.get('[href="/logout"]').click()

         // add tag (187)  
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
         // user id for summiting
         cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
         cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
         cy.wait(3000)
         cy.get('.px-2').type('123456{enter}')
         cy.wait(3000)
         // documents
         cy.get('[href="/dms"]').click()
         cy.wait(3000)
         //select file
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
          cy.wait(3000)
          cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
          cy.wait(3000)
         // add tag
         cy.contains('Add Tag').click()
         cy.wait(3000)
         cy.get(':nth-child(3) > .border-b').click()
         cy.wait(3000)
         cy.get('.my-5 > :nth-child(1) > .px-4').click()
         cy.wait(3000)
         cy.reload()
         cy.wait(7000)
         //logout
         cy.get('[href="/logout"]').click()


         // file download (189)  
     
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
      // user id for summiting
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(3000)
      cy.get('.px-2').type('123456{enter}')
      cy.wait(3000)
      // documents
      cy.get('[href="/dms"]').click()
      cy.wait(3000)
      //select file
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
      cy.wait(3000)
      // file download
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(3)').click()

        cy.get('[href="/logout"]').click()


        // Mark as favorite (190)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        // user id for summiting
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        //  make as favorite
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max > :nth-child(1) > .pl-4 > .items-center > .top-1').click()
        cy.wait(3000)
        // logout
        cy.get('[href="/logout"]').click()


        // DCN (191)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        // user id for summiting
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
       //  DCN
       cy.get('.space-x-2 > .flex > .rounded-full').click()
       cy.wait(3000)
        // logout
       cy.get('[href="/logout"]').click()

       
       // folder download (192)  
       cy.visit('https://alpha.xpropeller.com/signin')
       cy.wait(3000)
       // user id for summiting
       cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
       cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
       cy.wait(3000)
       cy.get('.px-2').type('123456{enter}')
       cy.wait(3000)
       // documents
       cy.get('[href="/dms"]').click()
       cy.wait(3000)
       //select file
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
       cy.wait(3000)
       // folder download
       cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(3)').click()
       //logout
       cy.get('[href="/logout"]').click()


       // Add metadata (193)  
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
      //  doc bridge
       cy.get('.space-y-1 > :nth-child(8) > .block').click()
       cy.wait(3000)
      //select file
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
      cy.wait(3000)
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
      cy.wait(3000)
      cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
      cy.wait(3000)
       cy.contains('Edit Metadata').click()
       cy.wait(3000)
       // fill metadata
       cy.get(':nth-child(1) > .px-2 > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-12-option-0').click()
       cy.wait(3000)
       cy.get(':nth-child(2) > :nth-child(1) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-13-option-5').click()
       cy.wait(3000)
       cy.get(':nth-child(2) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-14-option-2').click()
       cy.wait(3000)
       cy.get(':nth-child(3) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
       cy.get('#react-select-15-option-0').click()
       cy.wait(3000)
       cy.get('.p-3 > :nth-child(2) > input').click()
       // save
       cy.get('.ml-auto > .bg-blue-600').click()
       cy.wait(5000) 
       // logout
       cy.get('[href="/logout"]').click()



       //Docbase - list view (194)
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
       //  doc base
       cy.get(':nth-child(9) > .block').click()
       cy.wait(3000)
       // logout
       cy.get('[href="/logout"]').click()


       //Docbase - compunded view (195)
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
       //  doc base
       cy.get(':nth-child(9) > .block').click()
       cy.wait(3000)
       // logout
       cy.get('[href="/logout"]').click()

       //Docbase - multiple delete prompts (196)
       
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
        //  doc base
        cy.get(':nth-child(9) > .block').click()
        cy.wait(3000)
        // multiple delete
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').dblclick()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').dblclick()
        // cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').dblclick()
        // //  files
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
        // cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
        cy.wait(3000)
        cy.contains('Remove').click()
        cy.wait(3000)
        cy.get('.ml-auto > .text-white').click()
        cy.wait(3000)
        cy.get('.ml-auto > .text-white').click()
       //logout
       cy.get('[href="/logout"]').click()

       //Interdicted documents (197)
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
      // interdicted documents 
       cy.get(':nth-child(9) > .block').click()
       cy.wait(3000)
       //logout
       cy.get('[href="/logout"]').click()


       //  Interdicted documents  - retension policy (198) incomplete
       cy.visit('https://alpha.xpropeller.com/signin')
       cy.wait(3000)
       cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
       cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
       cy.wait(3000)
       cy.get('.px-2').type('123456{enter}')
       cy.wait(3000)
       //settings
       cy.get('[href="/settings"]').click()
       cy.wait(3000)
      //  retension policy
       cy.get(':nth-child(5) > .flex').click()
       cy.wait(5000)

        // Cabinet - create from template (199) incomplete
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
       //  new folder
        cy.get('.p-4 > .relative > .w-full').click()
        cy.wait(3000)
        cy.get('.border-b > .hover\:bg-gray-100 > span').click()


        //  Request for approval  - Due Date (203) 
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
        //select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
        cy.wait(3000)
        cy.contains('Edit Metadata').click()
        cy.wait(3000)
        // fill metadata
        cy.get(':nth-child(1) > .px-2 > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-12-option-0').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > :nth-child(1) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-13-option-5').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-14-option-2').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-15-option-0').click()
        cy.wait(3000)
        cy.get('.p-3 > :nth-child(2) > input').click()
       //    set reminder
        cy.get('.pt-2 > input').click()
        cy.get('.p-4 > .pt-3 > .flex:nth-child(1) > div > .px-2').type('2023-12-27')
        cy.wait(3000)
        cy.get('.pt-3 > :nth-child(3) > :nth-child(2) > .px-2').click()
        cy.wait(3000)
        cy.get('.p-4 > .pt-3 > .flex:nth-child(2) > div > .px-2').type('2024-02-29')
        cy.wait(3000)
        cy.get('.p-4 > .pt-3 > .flex:nth-child(3) > div > .px-2').click()
        cy.wait(3000)
        cy.get('.p-4 > .pt-3 > .flex:nth-child(3) > div > .px-2').type('18:17')
        cy.wait(3000)
        cy.get('.z-10 > .bg-white > .p-4 > .pt-3 > .flex:nth-child(5)').click()
        cy.wait(3000)
        cy.get('#react-select-17-option-0').click()
        cy.wait(3000)
        cy.get('.ml-12 > .css-10u1y7e-control').click()
        cy.wait(3000)
        cy.get('#react-select-16-option-0').click()
        cy.wait(3000)
        cy.get('.p-2 > .bg-blue-500').click()
        cy.wait(3000)
        cy.get('.ml-auto > .bg-blue-600').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()

        // DR Scoring(339)
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
        // Doc base
        cy.get(':nth-child(9) > .block').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max').dblclick()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max').dblclick()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"] > .h-max').dblclick()
         //logout
         cy.get('[href="/logout"]').click()




        })
})