describe('template spec', () => {
    it('passes', () => {
     
        // edit Profile (281)
        cy.visit('https://alpha.xpropeller.com/signin')
          cy.wait(5000)
          // Credentials 
          cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
          cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
          cy.wait(5000)
          //correct 2fa
          cy.get('.px-2').type('123456{enter}')
          cy.wait(5000)
          //settings
          cy.get('[href="/settings"]').click()
          cy.wait(5000)
          //get in to profile 
          cy.get('ul > :nth-child(1) > .flex').click()
          cy.wait(5000)
          //   profile
          cy.get(':nth-child(3) > :nth-child(2) > .px-2').clear()
          cy.wait(5000)
          cy.get(':nth-child(3) > :nth-child(2) > .px-2').type('Any help....')
          // save
          cy.get('.ml-auto > .px-4').click()
          cy.wait(5000)
          // logout
            cy.get('[href="/logout"]').click()  

        //   Profile Change password (283)
        cy.visit('https://alpha.xpropeller.com/signin')
          cy.wait(5000)
          // Credentials 
          cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
          cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
          cy.wait(5000)
        //correct 2fa
          cy.get('.px-2').type('123456{enter}')
          cy.wait(5000)
          //settings
          cy.get('[href="/settings"]').click()
          cy.wait(5000)
          //get in to profile 
          cy.get('ul > :nth-child(1) > .flex').click()
          cy.wait(5000)
        //    change password
          cy.contains('Change Password').click()
          cy.wait(3000)
          // current password
          cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .px-2').type('XPROwws@1236')
          cy.wait(3000)
          // new password
          cy.get('.mt-4 > :nth-child(1) > :nth-child(2) > .px-2').type('XPROwws@123')
          cy.wait(3000)
          // confirm password
          cy.get(':nth-child(2) > :nth-child(2) > .px-2').type('XPROwws@123')
          cy.wait(3000)
          // save 
          cy.get('.ml-auto > .px-4')
          cy.wait(5000)
          //logout
          cy.get('[href="/logout"]').click()

        //  Users are able to modify the information about the created facility (285)
        cy.visit('https://alpha.xpropeller.com/signin')
          cy.wait(5000)
          // Credentials 
          cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
          cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
          cy.wait(5000)
        //correct 2fa
          cy.get('.px-2').type('123456{enter}')
          cy.wait(5000)
          //settings
          cy.get('[href="/settings"]').click()
          cy.wait(5000)
        //    facilities
          cy.get('ul > :nth-child(2) > .flex').click()
          cy.wait(5000)
        //   open facilities
          cy.get('[href="/settings/facilities/manage/655aee4d267d24e006d5cd59"]').click()
          cy.wait(5000)
          // edit facilities
          cy.get(':nth-child(3) > .space-x-2 > :nth-child(1) > :nth-child(2) > .px-2').clear()
          cy.wait(5000)
          cy.get(':nth-child(3) > .space-x-2 > :nth-child(1) > :nth-child(2) > .px-2').type('wonder')
          cy.wait(5000)
          cy.get(':nth-child(3) > .space-x-2 > :nth-child(4) > :nth-child(2) > .px-2').clear()
          cy.get(':nth-child(3) > .space-x-2 > :nth-child(4) > :nth-child(2) > .px-2').type('12345')
          cy.wait(5000)
          cy.get(':nth-child(4) > :nth-child(2) > :nth-child(4) > :nth-child(4) > :nth-child(2) > .px-2').clear()
          cy.get(':nth-child(4) > :nth-child(2) > :nth-child(4) > :nth-child(4) > :nth-child(2) > .px-2').type('12345')
          cy.wait(5000)
          // save
          cy.get('.ml-auto > .bg-blue-600').click()
          cy.wait(5000)
          //logout
            cy.get('[href="/logout"]').click()
            

          // facility delete (287)
          cy.visit('https://alpha.xpropeller.com/signin')
          cy.wait(5000)
         //correct Credentials 
         cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
         cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
         cy.wait(3000)
         //correct 2fa
         cy.get('.px-2').type('123456{enter}')
         cy.wait(3000)
         //settings
         cy.get('[href="/settings"]').click()
         cy.wait(3000)
         //    facilities
         cy.get('ul > :nth-child(2) > .flex').click()
         cy.wait(3000)
         cy.get('[href="/settings/facilities/manage/659525ec511844675b97140e"] > .p-2').click()
         cy.wait(3000)
         cy.get('.z-10 > .bg-white > .ml-auto > .text-white').click()
         cy.wait(3000)
         cy.get('.px-2').click().type('XPROwws@123')
         cy.wait(3000)
         cy.get('.bg-red-600').click()
         cy.wait(3000)
         cy.get('.z-10 > .bg-white > .ml-auto > .text-white').click()
         //logout
         cy.get('[href="/logout"]').click()
          

          // invite user threw link (289)
          cy.visit('https://alpha.xpropeller.com/signin')
          cy.wait(5000)
          //correct Credentials 
          cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
          cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
          cy.wait(5000)
          //correct 2fa
          cy.get('.px-2').type('123456{enter}')
          cy.wait(5000)
          //settings
          cy.get('[href="/settings"]').click()
          cy.wait(5000)
          //invite user
          cy.get(':nth-child(9) > .flex').click()
          cy.wait(5000)
          //invite mail
          cy.get('.px-2').type('hefyeterde@gufum.com')
          cy.wait(5000)
          // save
          cy.get('.flex-row > .bg-blue-600').click()
          cy.wait(5000)
          //logout
          cy.get('[href="/logout"]').click()

          // Storage in x- pro (291)
          cy.visit('https://alpha.xpropeller.com/signin')
          cy.wait(5000)
          //correct Credentials 
          cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
          cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
          cy.wait(5000)
          //correct 2fa
          cy.get('.px-2').type('123456{enter}')
          cy.wait(5000)
          //settings
          cy.get('[href="/settings"]').click()
          cy.wait(5000)
          // storage
          cy.get(':nth-child(10) > .flex').click()
          cy.wait(5000)
          //logout
          cy.get('[href="/logout"]').click()

          // USER ACCOUT

          // edit Profile (282)
          cy.visit('https://alpha.xpropeller.com/signin')
          cy.wait(5000)
          // Credentials 
          cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
          cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
          cy.wait(5000)
          //correct 2fa
          cy.get('.px-2').type('123456{enter}')
          cy.wait(5000)
          //settings
          cy.get('[href="/settings"]').click()
          cy.wait(5000)
          //get in to profile 
          cy.get('ul > :nth-child(1) > .flex').click()
          cy.wait(5000)
          //   profile
          cy.get(':nth-child(3) > :nth-child(2) > .px-2').clear()
          cy.wait(5000)
          cy.get(':nth-child(3) > :nth-child(2) > .px-2').type('Any help....')
          // save
          cy.get('.ml-auto > .px-4').click()
          cy.wait(5000)
          // logout
          cy.get('[href="/logout"]').click()

          //   Profile Change password (284)
          cy.visit('https://alpha.xpropeller.com/signin')
          cy.wait(5000)
          // Credentials 
          cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
          cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
          cy.wait(5000)
        //correct 2fa
          cy.get('.px-2').type('123456{enter}')
          cy.wait(5000)
          //settings
          cy.get('[href="/settings"]').click()
          cy.wait(5000)
          //get in to profile 
          cy.get('ul > :nth-child(1) > .flex').click()
          cy.wait(5000)
        //    change password
          cy.contains('Change Password').click()
          cy.wait(3000)
          // current password
          cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .px-2').type('Test@123')
          cy.wait(3000)
          // new password
          cy.get('.mt-4 > :nth-child(1) > :nth-child(2) > .px-2').type('Test@123')
          cy.wait(3000)
          // confirm password
          cy.get(':nth-child(2) > :nth-child(2) > .px-2').type('Test@123')
          cy.wait(3000)
          // save 
          cy.get('.ml-auto > .px-4')
          cy.wait(5000)
          //logout
          cy.get('[href="/logout"]').click()


          //  Users are able to modify the information about the created facility (286)
          cy.visit('https://alpha.xpropeller.com/signin')
          cy.wait(5000)
         // Credentials 
         cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
         cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
         cy.wait(5000)
       //correct 2fa
         cy.get('.px-2').type('123456{enter}')
         cy.wait(5000)
         //settings
         cy.get('[href="/settings"]').click()
         cy.wait(5000)
       //    facilities
         cy.get('ul > :nth-child(2) > .flex').click()
         cy.wait(5000)
        //   open facilities
         cy.get('[href="/settings/facilities/manage/65803a21afae4ef9090a13e8"]').click()
         cy.wait(5000)
         // edit facilities
         cy.get(':nth-child(3) > .space-x-2 > :nth-child(1) > :nth-child(2) > .px-2').clear()
         cy.wait(5000)
         cy.get(':nth-child(3) > .space-x-2 > :nth-child(1) > :nth-child(2) > .px-2').type('wonder')
         cy.wait(5000)
         cy.get(':nth-child(3) > .space-x-2 > :nth-child(4) > :nth-child(2) > .px-2').clear()
         cy.get(':nth-child(3) > .space-x-2 > :nth-child(4) > :nth-child(2) > .px-2').type('12345')
         cy.wait(5000)
         cy.get(':nth-child(4) > :nth-child(2) > :nth-child(4) > :nth-child(4) > :nth-child(2) > .px-2').clear()
         cy.get(':nth-child(4) > :nth-child(2) > :nth-child(4) > :nth-child(4) > :nth-child(2) > .px-2').type('12345')
         cy.wait(5000)
        //  save
         cy.get('.ml-auto > .bg-blue-600').click()
         cy.wait(5000)
         //logout
           cy.get('[href="/logout"]').click()


           // facility delete (288)
           cy.visit('https://alpha.xpropeller.com/signin')
           cy.wait(5000)
         //correct Credentials 
         cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
         cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
         cy.wait(3000)
         //correct 2fa
         cy.get('.px-2').type('123456{enter}')
         cy.wait(3000)
         //settings
         cy.get('[href="/settings"]').click()
         cy.wait(3000)
         //    facilities
         cy.get('ul > :nth-child(2) > .flex').click()
         cy.wait(3000)
         cy.get('[href="/settings/facilities/manage/659525ec511844675b97140e"] > .p-2').click()
         cy.wait(3000)
         cy.get('.z-10 > .bg-white > .ml-auto > .text-white').click()
         cy.wait(3000)
         cy.get('.px-2').click().type('XPROwws@123')
         cy.wait(3000)
         cy.get('.bg-red-600').click()
         cy.wait(3000)
         cy.get('.z-10 > .bg-white > .ml-auto > .text-white').click()
         //logout
         cy.get('[href="/logout"]').click()


          // invite user threw link (290)
          cy.visit('https://alpha.xpropeller.com/signin')
          cy.wait(5000)
          //correct Credentials 
          cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
          cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
          cy.wait(5000)
          //correct 2fa
          cy.get('.px-2').type('123456{enter}')
          cy.wait(5000)
          //settings
          cy.get('[href="/settings"]').click()
          cy.wait(5000)
          //invite user
          cy.get(':nth-child(9) > .flex').click()
          cy.wait(5000)
          //invite mail
          cy.get('.px-2').type('hefyeterde@gufum.com')
          cy.wait(5000)
          // save
          cy.get('.flex-row > .bg-blue-600').click()
          cy.wait(5000)
          //logout
          cy.get('[href="/logout"]').click()


          // Storage in x- pro (292)
          cy.visit('https://alpha.xpropeller.com/signin')
          cy.wait(5000)
         //correct Credentials 
         cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
         cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
         cy.wait(5000)
         //correct 2fa
         cy.get('.px-2').type('123456{enter}')
         cy.wait(5000)
         //settings
         cy.get('[href="/settings"]').click()
         cy.wait(5000)
         // storage
         cy.get(':nth-child(10) > .flex').click()
         cy.wait(5000)
         //logout
         cy.get('[href="/logout"]').click()
         
 
        
    
    
        })
})