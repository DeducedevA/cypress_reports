
describe('template spec', () => {
    it('passes', () => {
        
        // DCA can set permission levels on a folder , such as read only (227)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(5000)
        //correct Credentials 
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        // password strength 
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(5000)
        //correct 2fa
        cy.get('.px-2').type('123456{enter}')
        cy.wait(5000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(5000)
        // retention policy
        cy.get('ul > :nth-child(5) > .flex').click()
        cy.wait(5000)
         //logout
        cy.get('[href="/logout"]').click()

        // DCA can set system alerts for various account-related activities (228)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(5000)
        //correct Credentials 
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        // password strength 
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(5000)
        //correct 2fa
        cy.get('.px-2').type('123456{enter}')
        cy.wait(5000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(5000)
        // retention policy
        cy.get('ul > :nth-child(5) > .flex').click()
        cy.wait(5000)
         //logout
        cy.get('[href="/logout"]').click()
  
        

        // admin Add user (229)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(5000)
        //correct Credentials 
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        // password strength 
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(5000)
        //correct 2fa
        cy.get('.px-2').type('123456{enter}')
        cy.wait(5000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(5000)
        // facilities
        cy.get('ul > :nth-child(2) > .flex').click()
        cy.wait(5000)
        // user
        cy.get('.border-b > :nth-child(2)').click()
        cy.wait(5000)
        // create user
        cy.get('.ml-auto > .px-4').click()
        cy.wait(5000)
        // new user name
        cy.get(':nth-child(1) > .flex-1 > :nth-child(2) > .px-2').type('Xavi')
        cy.wait(5000)
        // new mail
        cy.get(':nth-child(2) > .flex-1 > :nth-child(2) > .px-2').type('xerybely@tutuapp.bid')
        cy.wait(5000)
        // role
        cy.get('.css-1xc3v61-indicatorContainer').click()
        cy.wait(5000)
        // select role
        cy.get('#react-select-3-option-1').click()
        cy.wait(5000)
        // save 
        cy.get('.ml-auto > .bg-blue-600').click()
        cy.wait(5000)
        //logout
        cy.get('[href="/logout"]').click()

        // admin edit user (230)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(5000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(5000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(5000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(5000)
        //facilities
        cy.get('ul > :nth-child(2) > .flex > span').click()
        cy.wait(5000)
        //user
        cy.get('.border-b > :nth-child(2)').click()
        cy.wait(5000)
        //user account
        cy.get(':nth-child(3) > :nth-child(7) > .p-1').click()
        cy.wait(5000)
        //edit
        cy.contains('Edit').click()
        cy.wait(5000)
        // edit name
        cy.get(':nth-child(1) > .flex-1 > :nth-child(2) > .px-2').clear()
        cy.get(':nth-child(1) > .flex-1 > :nth-child(2) > .px-2').type('Trainee')
        cy.wait(5000)
        // save
        cy.get('.ml-auto > .bg-blue-600').click()
        cy.wait(5000)
        //logout
        cy.get('[href="/logout"]').click()

        // Admin Delete User (231)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(5000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(5000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(5000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(5000)
        //facilities
        cy.get('ul > :nth-child(2) > .flex > span').click()
        cy.wait(5000)
        //user
        cy.get('.border-b > :nth-child(2)').click()
        cy.wait(5000)
        //user account
        cy.get(':nth-child(4) > :nth-child(7) > .p-1').click()
        cy.wait(5000)
        // delete user
        cy.contains('Delete').click()
        cy.wait(5000)
        // delete pop up
        cy.get('.z-10 > .bg-white > .ml-auto > .text-white').click()
        cy.wait(5000)
        // password for verify
        cy.get('.px-2').type('XPROwws@123')
        cy.wait(5000)
        // confirm
        cy.contains('Confirm').click()
        cy.wait(5000)
        cy.contains('Confirm').click()
        cy.wait(5000)
        //logout
        cy.get('[href="/logout"]').click()
        

        // Feature Distribution/ Access control (232)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(5000)
        //correct Credentials 
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        // password strength 
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(5000)
        //correct 2fa
        cy.get('.px-2').type('123456{enter}')
        cy.wait(5000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(5000)
        // retention policy
        cy.get('ul > :nth-child(5) > .flex').click()
        cy.wait(5000)
         //logout
        cy.get('[href="/logout"]').click()


        // User account Data Purge (233)
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
        //facilities
        cy.get('ul > :nth-child(2) > .flex > span').click()
        cy.wait(3000)
        //user
        cy.get('.border-b > :nth-child(2)').click()
        cy.wait(3000)
        //user account
        cy.get(':nth-child(3) > :nth-child(7) > .p-1').click()
        cy.wait(3000)
        //edit
        cy.contains('Edit').click()
        cy.wait(3000)
        // Data Purge
        cy.get('div.p-2 > .flex > :nth-child(4)').click()
        cy.wait(3000)
        cy.get('.bg-red-500').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > .px-2').click().type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.bg-red-600').click()
        cy.wait(3000)
        cy.get('.min-w-\[50\%\] > :nth-child(1) > .p-2 > .bg-red-500').click()
        //logout
        cy.get('[href="/logout"]').click()


        // Suspend User (234)
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
        //facilities
        cy.get('ul > :nth-child(2) > .flex > span').click()
        cy.wait(3000)
        //user
        cy.get('.border-b > :nth-child(2)').click()
        cy.wait(3000)
        //user account
        cy.get(':nth-child(3) > :nth-child(7) > .p-1').click()
        cy.wait(3000)
        //edit
        cy.contains('Edit').click()
        cy.wait(3000)
        cy.get('div.p-2 > .flex > :nth-child(1)').click()
        cy.wait(3000)
        cy.get('.dark\:bg-gray-800 > .css-b62m3t-container > .css-10u1y7e-control').click()
        // //logout
        cy.get('[href="/logout"]').click()


        //Revoke user (235)
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
        //facilities
        cy.get('ul > :nth-child(2) > .flex > span').click()
        cy.wait(3000)
        //user
        cy.get('.border-b > :nth-child(2)').click()
        cy.wait(3000)
        //user account
        cy.get(':nth-child(3) > :nth-child(7) > .p-1').click()
        cy.wait(3000)
        //edit
        cy.contains('Edit').click()
        cy.wait(3000)
        cy.get('div.p-2 > .flex > :nth-child(3)').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()


        //Hold user (236)
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
        //facilities
        cy.get('ul > :nth-child(2) > .flex > span').click()
        cy.wait(3000)
        //user
        cy.get('.border-b > :nth-child(2)').click()
        cy.wait(3000)
        //user account
        cy.get(':nth-child(3) > :nth-child(7) > .p-1').click()
        cy.wait(3000)
        //edit
        cy.contains('Edit').click()
        cy.wait(3000)
        cy.get('div.p-2 > .flex > :nth-child(2)').click()
        cy.wait(3000)
        cy.get('.css-azw1wt-control').click()
        //logout
        cy.get('[href="/logout"]').click()





    
    })
})