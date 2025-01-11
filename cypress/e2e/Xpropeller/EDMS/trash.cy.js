
describe('template spec', () => {
    it('passes', () => {

        // ADMIN account

        // Deleted files are moved to the trash (129)
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
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"] > .h-max > .justify-items-end > :nth-child(4)').click()
        cy.wait(3000)
        cy.get('.ml-auto > .text-white').click()
        cy.wait(3000)
        cy.get('.ml-auto > .text-white').click()
        cy.wait(3000)
        cy.get(':nth-child(11) > .block').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()


        // Users should be able to restore data from the trash (130)
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
        // trash
        cy.get(':nth-child(11) > .block').click()
        cy.wait(3000)
        // select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
        cy.wait(3000)
        // restore
        cy.contains('Restore').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()

        // The retention policy should be displayed in the trash (131)
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
        // trash
        cy.get(':nth-child(11) > .block').click()
        cy.wait(5000)
        //logout
        cy.get('[href="/logout"]').click()


        // Users should be able to delete data from the trash (132)
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
        // trash
        cy.get(':nth-child(11) > .block').click()
        cy.wait(3000)
        // select file
        cy.get('[style="position: absolute; left: 0px; top: 90px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 90px; height: 50px; width: 100%;"]').rightclick()
        cy.wait(3000)
        // remove
        cy.contains('Delete forever').click()
        cy.wait(3000)
        cy.get('.ml-auto > .text-white').click()
        cy.wait(3000)
        cy.get('.ml-auto > .text-white').click() 
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()


        // Users should be able to restore multiple documents at once(133)
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
        // trash
        cy.get(':nth-child(11) > .block').click()
        cy.wait(3000)
        // selecting multiple file
        cy.get('[style="position: absolute; left: 0px; top: 90px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 240px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 140px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 90px; height: 50px; width: 100%;"]').rightclick()
        cy.wait(3000)
        // restore
        cy.contains('Restore').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()


        // Users should be able to restore multiple documents at once(134)
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
        // trash
        cy.get(':nth-child(11) > .block').click()
        cy.wait(3000)
        // selecting multiple file
        cy.get('[style="position: absolute; left: 0px; top: 90px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 240px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 140px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 90px; height: 50px; width: 100%;"]').rightclick()
        cy.wait(3000)
        // delete forever
        cy.contains('Delete forever').click()
        cy.wait(3000)
        cy.get('.ml-auto > .text-white').click()
        cy.wait(3000)
        cy.get('.ml-auto > .text-white').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()





        // USER ACCOUNT

        // Users should be able to restore data from the trash (137)
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
        // trash
        cy.get(':nth-child(11) > .block').click()
        cy.wait(3000)
        // select file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').rightclick()
        cy.wait(3000)
        // restore
        cy.contains('Restore').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()

       // The retention policy should be displayed in the trash (138)
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
        // trash
        cy.get(':nth-child(11) > .block').click()
        cy.wait(5000)
        //logout
        cy.get('[href="/logout"]').click()


         // Users should be able to delete data from the trash (139)
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
        // trash
        cy.get(':nth-child(11) > .block').click()
        cy.wait(3000)
        // select file
        cy.get('[style="position: absolute; left: 0px; top: 90px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 90px; height: 50px; width: 100%;"]').rightclick()
        cy.wait(3000)
        // remove
        cy.contains('Delete forever').click()
        cy.wait(3000)
        cy.get('.ml-auto > .text-white').click()
        cy.wait(3000)
        cy.get('.ml-auto > .text-white').click() 
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()

        // Users should be able to restore multiple documents at once(140)
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
        // trash
        cy.get(':nth-child(11) > .block').click()
        cy.wait(3000)
        // selecting multiple file
        cy.get('[style="position: absolute; left: 0px; top: 90px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 240px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 140px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 140px; height: 50px; width: 100%;"]').rightclick()
        cy.wait(3000)
        // restore
        cy.contains('Restore').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()

         // Users should be able to restore multiple documents at once(141)
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
         // trash
         cy.get(':nth-child(11) > .block').click()
         cy.wait(3000)
         // selecting multiple file
         cy.get('[style="position: absolute; left: 0px; top: 90px; height: 50px; width: 100%;"]').click()
         cy.wait(3000)
         cy.get('[style="position: absolute; left: 0px; top: 240px; height: 50px; width: 100%;"]').click()
         cy.wait(3000)
         cy.get('[style="position: absolute; left: 0px; top: 140px; height: 50px; width: 100%;"]').click()
         cy.wait(3000)
         cy.get('[style="position: absolute; left: 0px; top: 90px; height: 50px; width: 100%;"]').rightclick()
         cy.wait(3000)
         // delete forever
         cy.contains('Delete forever').click()
         cy.wait(3000)
         cy.get('.ml-auto > .text-white').click()
         cy.wait(3000)
         cy.get('.ml-auto > .text-white').click()
         cy.wait(3000)
         //logout
         cy.get('[href="/logout"]').click()



})
})