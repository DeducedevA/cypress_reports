describe('template spec', () => {
    it('passes', () => {
      // Admin account



      
      // User’s email address is validated before he is allowed to  sign up (4)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(5000)
      //create account
      cy.get('.ml-auto').click()
      cy.wait(5000)
      //new email id
      cy.get('.px-2').type('mywese@buildrone.co')
      cy.wait(5000)
      //verify mail
      cy.get('.mt-2').click()


       //new account details (2)
       cy.visit('https://app.xpropeller.com/signup?token=b07314a1-7577-4e2b-8af0-130981349f7e&email=fonelo@yogrow.co')
       cy.wait(5000)
       //facility details
       //facility name
       cy.get('form > :nth-child(1) > :nth-child(2) > .px-2').type('Fawin care')
       cy.wait(3000)
       //address 1
       cy.get('form > :nth-child(2) > :nth-child(2) > .px-2').type('no 42 main road')
       cy.wait(3000)
       //address 2
       cy.get(':nth-child(3) > :nth-child(2) > .px-2').type('main street')
       cy.wait(3000)
       //city
       cy.get(':nth-child(4) > :nth-child(1) > :nth-child(2) > .px-2').type('New york city')
       cy.wait(3000)
       //country
       cy.get(':nth-child(4) > :nth-child(2) > :nth-child(2) > .px-2').type('New york')
       cy.wait(3000)
       //   state
       cy.get('.w-full > .border').type('New York{enter}')
       cy.wait(3000)
       //   zipcode
       cy.get(':nth-child(5) > :nth-child(2) > :nth-child(2) > .px-2').type('23456')
       cy.wait(3000)
       //   timezone
       cy.get('.css-10u1y7e-control').click()
       cy.wait(3000)
       cy.get('#react-select-2-option-1').click()
       cy.wait(3000)
       //   phone number
       cy.get(':nth-child(7) > :nth-child(2) > .px-2').type('78945632145214')
       cy.wait(3000)
       //   name
       cy.get(':nth-child(8) > :nth-child(2) > .px-2').type('Fawin')
       cy.wait(3000)
       //   password
       cy.get('.relative > :nth-child(2) > .px-2').type('Admin@123')
       cy.wait(3000)
       //   terms and condtitions
       cy.get('.flex > .rounded').click()
       cy.wait(3000)
       //   sign up
       //cy.get('.mt-2').click()
       cy.wait(3000)
       //logout
       cy.get('[href="/logout"]').click()

      // Admin Credentials email address and password (6)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(5000)
      //correct Credentials 
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
      // password strength 
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(5000)

      //correct 2fa (10)
      cy.get('.px-2').type('123456{enter}')
      cy.wait(10000)
      //logout
      cy.get('[href="/logout"]').click()

      // incorrect Credentials (8)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(5000)
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
      // password strength 
      cy.get('.relative > :nth-child(1) > .px-2').type('fsD_s@123{enter}')
      cy.wait(10000)

      // 2fa invalid (12)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(5000)
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(5000)
      //incorrect 2fa
      cy.get('.px-2').type('123457{enter}')
      cy.wait(7000)

      //password reset (14)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(4000)
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
      cy.wait(5000)
      cy.get('[href="/forgotPassword"]').click()
      cy.wait(5000)
      //password reset mail
      cy.get('.px-2').type('xpropellerwws@gmail.com{enter}')
      //passwor reset link
       cy.visit('https://app.xpropeller.com/resetPassword?token=72a4b0c7-e235-4a34-9db3-ec102e3cb061')
      //    new password
      cy.get(':nth-child(1) > .relative > :nth-child(1) > .px-2').type('XPROwws@123')
      // confirm password
      cy.get(':nth-child(2) > .relative > :nth-child(1) > .px-2').type('XPROwws@123')
      // reset password
      cy.get('.mt-2').click()


      //Admin account lock for invalid Credentials (16)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(5000)
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(10000)
      //Admin account will not lock for n number of invalid Credentials 

      // //User account is unlocked after predetermined period (18)
      // cy.visit('https://alpha.xpropeller.com/signin')
      // cy.wait(1800000000)
      // //correct Credentials 
      // cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
      // cy.get('.relative > :nth-child(1) > .px-2').type(XPROwws@123{enter}')
      // cy.wait(5000)

      // DCA can release locked user accounts (20)
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
      // //user status
      cy.get('.react-switch-handle').click()
      cy.wait(5000)
      //save
      cy.get('.ml-auto > .bg-blue-600').click()
      cy.wait(5000)
      //logout
      cy.get('[href="/logout"]').click()

      //Users can extend invitations to others (23)
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
      //invite user
      cy.get(':nth-child(9) > .flex > span').click()
      cy.wait(5000)
      //mail type box
      cy.get('.px-2').type('fonelo@yogrow.co')
      cy.wait(5000)
      //enter invite
      cy.get('.flex-row > .bg-blue-600').click()
      cy.wait(5000)
      //logout
      cy.get('[href="/logout"]').click()

      // DCA can release locked user accounts (206)
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
      // //user status
      cy.get('.react-switch-handle').click()
      cy.wait(5000)
      //save
      cy.get('.ml-auto > .bg-blue-600').click()
      cy.wait(5000)
      //logout
      cy.get('[href="/logout"]').click()

      
        // Re-send Code (295)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('buttton > .block').click()
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
         //logout
         cy.get('[href="/logout"]').click() 



     // USER ACCOUT

     
      // User’s email address is validated before he is allowed to  sign up (5)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(5000)
      //create account
      cy.get('.ml-auto').click()
      cy.wait(5000)
      //new email id
      cy.get('.px-2').type('mywese@buildrone.co')
      cy.wait(5000)
      //verify mail
      cy.get('.mt-2').click()


    
      //new account details (3)
      cy.visit('https://app.xpropeller.com/signup?token=b07314a1-7577-4e2b-8af0-130981349f7e&email=fonelo@yogrow.co')
      cy.wait(5000)
      //facility details
      //facility name
      cy.get('form > :nth-child(1) > :nth-child(2) > .px-2').type('Fawin care')
      cy.wait(3000)
      //address 1
      cy.get('form > :nth-child(2) > :nth-child(2) > .px-2').type('no 42 main road')
      cy.wait(3000)
      //address 2
      cy.get(':nth-child(3) > :nth-child(2) > .px-2').type('main street')
      cy.wait(3000)
      //city
      cy.get(':nth-child(4) > :nth-child(1) > :nth-child(2) > .px-2').type('New york city')
      cy.wait(3000)
      //country
      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(2) > .px-2').type('New york')
      cy.wait(3000)
    //   state
      cy.get('.w-full > .border').type('New York{enter}')
      cy.wait(3000)
    //   zipcode
      cy.get(':nth-child(5) > :nth-child(2) > :nth-child(2) > .px-2').type('23456')
      cy.wait(3000)
    //   timezone
      cy.get('.css-10u1y7e-control').click()
      cy.wait(3000)
      cy.get('#react-select-2-option-1').click()
      cy.wait(3000)
    //   phone number
      cy.get(':nth-child(7) > :nth-child(2) > .px-2').type('78945632145214')
      cy.wait(3000)
    //   name
      cy.get(':nth-child(8) > :nth-child(2) > .px-2').type('Fawin')
      cy.wait(3000)
    //   password
      cy.get('.relative > :nth-child(2) > .px-2').type('Admin@123')
      cy.wait(3000)
    //   terms and condtitions
      cy.get('.flex > .rounded').click()
      cy.wait(3000)
    //   sign up
    //cy.get('.mt-2').click()
      cy.wait(3000)
      //logout
      cy.get('[href="/logout"]').click()
    
    // User Credentials email address and password
      // correct login
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(5000)
      //correct Credentials 
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
      // password strength (7)
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(5000)

      //correct 2fa (11)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(5000)
      //correct Credentials 
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
      // password strength (7)
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(5000)
      cy.get('.px-2').type('123456{enter}')
      cy.wait(10000)
      //logout
      cy.get('[href="/logout"]').click()

      // incorrect login(9)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(5000)
      //incorrect Credentials 
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
      // invalid password strength 
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(5000)

      // 2fa invalid (13)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(5000)
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(5000)
      //incorrect 2fa
      cy.get('.px-2').type('123457{enter}')
      cy.wait(7000)

      //password reset (15)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(4000)
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
      cy.wait(5000)
      cy.get('[href="/forgotPassword"]').click()
      cy.wait(5000)
      //password reset mail
      cy.get('.px-2').type('wwsxpropellerr@gmail.com{enter}')
      //passwor reset link
      cy.visit('https://app.xpropeller.com/resetPassword?token=22129703-0049-41a1-bbcb-6f34c01d580c')
      //    new password
       cy.get(':nth-child(1) > .relative > :nth-child(1) > .px-2').type('XPROwws@123')
      // confirm password
       cy.get(':nth-child(2) > .relative > :nth-child(1) > .px-2').type('XPROwws@123')
      // reset password
       cy.get('.mt-2').click()

       // Users account is locked after a specified number of failed login attempts (17,204)
        // 1 attempt
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(5000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('Test@123{enter}')
        cy.wait(3000)

         // 2 attempt
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(5000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('fsD_as@123{enter}')
        cy.wait(3000)

        // 3 attempt
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(5000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('fsD_b@123{enter}')
        cy.wait(3000)
        
        // 4 attempt
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(5000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('Test@123{enter}')
        cy.wait(10000)

        // User can extend invitations to others (24)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(5000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(5000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(5000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(5000)
        //invite user
        cy.get(':nth-child(9) > .flex > span').click()
        cy.wait(5000)
        //mail type box
        cy.get('.px-2').type('yilmasuyde@gufum.com')
        cy.wait(5000)
        //enter invite
        cy.get('.flex-row > .bg-blue-600').click()
        cy.wait(5000)
        //logout
        cy.get('[href="/logout"]').click() 

        
        // Re-send Code (296)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('buttton > .block').click()
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
         //logout
         cy.get('[href="/logout"]').click() 





      })
  })