describe('template spec', () => {
    it('passes', () => {

        // ADMIN ACCOUNT

        // View metadata (273)
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
        // view metadata
        cy.get('.space-x-2 > .flex > .rounded-full').click()
        cy.wait(8000)
        //logout
        cy.get('[href="/logout"]').click()


        // Add metadata (275)
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
        cy.wait(6000)
        //logout
        cy.get('[href="/logout"]').click()

        // Edit metadata (277)  
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
        // metadata
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
        cy.wait(3000)
        cy.contains('Edit Metadata').click()
        cy.wait(3000)
        // fill metadata
        cy.get(':nth-child(3) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
        cy.get('#react-select-15-option-1').click()
        cy.wait(3000)
        cy.get('.p-3 > :nth-child(2) > input').click()
        // save
        cy.get('.ml-auto > .bg-blue-600').click()
        cy.wait(6000)
        //logout
        cy.get('[href="/logout"]').click()



         // edit metadata in docbridge (279) [application not accepting]
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
         // docbridge
         cy.get('.space-y-1 > :nth-child(8) > .block').click()
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max').trigger('mouseover')
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max').should('be.visible')
         cy.wait(3000)
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max').click()
         cy.wait(3000)
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max').rightclick()
         cy.contains('Edit Metadata').click()
         cy.wait(3000)
         // fill metadata
         cy.get(':nth-child(3) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
         cy.get('#react-select-15-option-1').click()
         cy.wait(3000)
         cy.get('.p-3 > :nth-child(2) > input').click()
         // save
         cy.get('.ml-auto > .bg-blue-600').click()
         cy.wait(6000)
         //logout
         cy.get('[href="/logout"]').click()


        // USER ACCOUNT

        // View metadata (274)
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
        // view metadata
        cy.get('.space-x-2 > .flex > .rounded-full').click()
        cy.wait(8000)
        //logout
        cy.get('[href="/logout"]').click()


        // Add metadata (276)
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
        cy.wait(6000)
        //logout
        cy.get('[href="/logout"]').click()


         // Edit metadata (278)  
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
         // metadata
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
         cy.wait(3000)
         cy.contains('Edit Metadata').click()
         cy.wait(3000)
         // fill metadata
         cy.get(':nth-child(3) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
         cy.get('#react-select-15-option-1').click()
         cy.wait(3000)
         cy.get('.p-3 > :nth-child(2) > input').click()
         // save
         cy.get('.ml-auto > .bg-blue-600').click()
         cy.wait(6000)
         //logout
         cy.get('[href="/logout"]').click()


         // edit metadata in docbridge (280) [application not accepting]
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
         // docbridge
         cy.get('.space-y-1 > :nth-child(8) > .block').click()
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max').trigger('mouseover')
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max').should('be.visible')
         cy.wait(3000)
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max').click()
         cy.wait(3000)
         cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max').rightclick()
         cy.contains('Edit Metadata').click()
         cy.wait(3000)
         // fill metadata
         cy.get(':nth-child(3) > .mt-1 > .css-10u1y7e-control > .css-hlgwow').click()
         cy.get('#react-select-15-option-1').click()
         cy.wait(3000)
         cy.get('.p-3 > :nth-child(2) > input').click()
         // save
         cy.get('.ml-auto > .bg-blue-600').click()
         cy.wait(6000)
         //logout
         cy.get('[href="/logout"]').click()
        })
})