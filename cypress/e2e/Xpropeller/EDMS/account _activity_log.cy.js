
describe('template spec', () => {
  it('passes', () => {

    // Admin account
      
       // Filter log by Facility (207)
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
       //settings
       cy.get('[href="/settings"]').click()
       cy.wait(5000)
       cy.get('ul > :nth-child(3) > .flex').click()
       cy.wait(3000)
       cy.get('.flex-row').click()
       cy.wait(3000)
       cy.get('#react-select-4-option-0').click()
       cy.wait(5000)
       //logout
       cy.get('[href="/logout"]').click()


       //Query by specifying a date range (209)
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
     cy.get('ul > :nth-child(3) > .flex').click()
     cy.wait(3000)
     cy.get('.bg-slate-200 > :nth-child(3)').dblclick()
     cy.wait(3000)
     cy.get('.bg-slate-200 > .text-sm > .absolute > .flex:nth-child(1) > .standard').click()
     cy.wait(3000)
     cy.get('.bg-slate-200 > .text-sm > .absolute > .flex:nth-child(1) > .standard').type('2024-01-02')
     cy.wait(3000)
     cy.get('.bg-slate-200 > .text-sm > .absolute > .flex:nth-child(3) > .standard').click()
     cy.wait(3000)
     cy.get('.bg-slate-200 > .text-sm > .absolute > .flex:nth-child(3) > .standard').type('2024-01-04')
     cy.wait(5000)
     // logout
     cy.get('[href="/logout"]').click()

     //Query by specifying the user name (211)
     cy.visit('https://alpha.xpropeller.com/signin')
     cy.wait(3000)
     //correct Credentials 
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
     // password strength 
     cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
     cy.wait(3000)
     //correct 2fa
     cy.get('.px-2').type('123456{enter}')
     cy.wait(5000)
     //settings
     cy.get('[href="/settings"]').click()
     cy.wait(5000)
     cy.get('ul > :nth-child(3) > .flex').click()
     cy.wait(3000)
     cy.get('.bg-slate-200 > .py-3').dblclick()
     cy.get('.p-2 > .css-10u1y7e-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
     cy.get('#react-select-5-option-0').click()
     
     //logout
     cy.get('[href="/logout"]').click()

     //Query by specifying the user email(213)
     cy.visit('https://alpha.xpropeller.com/signin')
     cy.wait(3000)
     //correct Credentials 
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
     // password strength 
     cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
     cy.wait(3000)
     //correct 2fa
     cy.get('.px-2').type('123456{enter}')
     cy.wait(5000)
     //settings
     cy.get('[href="/settings"]').click()
     cy.wait(5000)
     cy.get('ul > :nth-child(3) > .flex').click()
     cy.wait(3000)
     cy.get('.bg-slate-200 > :nth-child(2)').dblclick()
     cy.get('.p-2 > .css-10u1y7e-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
     cy.get('#react-select-5-option-0').click()
     
     //logout
     cy.get('[href="/logout"]').click()


       //Query by specifying the user role(215)
       cy.visit('https://alpha.xpropeller.com/signin')
       cy.wait(3000)
       //correct Credentials 
       cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
       // password strength 
       cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
       cy.wait(3000)
       //correct 2fa
       cy.get('.px-2').type('123456{enter}')
       cy.wait(5000)
       //settings
       cy.get('[href="/settings"]').click()
       cy.wait(5000)
       cy.get('ul > :nth-child(3) > .flex').click()
       cy.wait(3000)
       cy.get('.bg-slate-200 > :nth-child(4)').dblclick()
       cy.get('.p-2 > .css-10u1y7e-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
       cy.get('#react-select-5-option-1').click()
 
       //logout
       cy.get('[href="/logout"]').click()


       //Query by specifying the user type(217)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(3000)
      //correct Credentials 
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
      // password strength 
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(3000)
      //correct 2fa
      cy.get('.px-2').type('123456{enter}')
      cy.wait(5000)
      //settings
      cy.get('[href="/settings"]').click()
      cy.wait(5000)
      cy.get('ul > :nth-child(3) > .flex').click()
      cy.wait(3000)
      cy.get('.bg-slate-200 > :nth-child(5)').dblclick()
      cy.get('.p-2 > .css-10u1y7e-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
      cy.get('#react-select-5-option-1').click()

      //logout
      cy.get('[href="/logout"]').click()


       //Query by specifying the action performed(219)
       cy.visit('https://alpha.xpropeller.com/signin')
       cy.wait(3000)
       //correct Credentials 
       cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
       // password strength 
       cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
       cy.wait(3000)
       //correct 2fa
       cy.get('.px-2').type('123456{enter}')
       cy.wait(5000)
       //settings
       cy.get('[href="/settings"]').click()
       cy.wait(5000)
       cy.get('ul > :nth-child(3) > .flex').click()
       cy.wait(3000)
       cy.get('.bg-slate-200 > :nth-child(6)').dblclick()
       cy.get('.p-2 > .css-10u1y7e-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
       cy.get('#react-select-5-option-1').click()
 
       //logout
       cy.get('[href="/logout"]').click()

       //Export as Excel(223)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(3000)
      //correct Credentials 
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
      // password strength 
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(3000)
      //correct 2fa
      cy.get('.px-2').type('123456{enter}')
      cy.wait(5000)
     //settings
     cy.get('[href="/settings"]').click()
     cy.wait(5000)
     cy.get('ul > :nth-child(3) > .flex').click()
     cy.wait(3000)
     cy.get('.bg-slate-200 > :nth-child(6)').dblclick()
     cy.get('.p-2 > .css-10u1y7e-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
     cy.get('#react-select-5-option-1').click()
     cy.get('.items-center > .w-32').click()
        cy.wait(3000)
        cy.get('.top-2 > :nth-child(1)').click()

      //logout
      cy.get('[href="/logout"]').click()


      //Export as PDF (225)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(3000)
      //correct Credentials 
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
      // password strength 
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(3000)
      //correct 2fa
      cy.get('.px-2').type('123456{enter}')
      cy.wait(5000)
     //settings
     cy.get('[href="/settings"]').click()
     cy.wait(5000)
     cy.get('ul > :nth-child(3) > .flex').click()
     cy.wait(3000)
     cy.get('.bg-slate-200 > :nth-child(6)').dblclick()
     cy.get('.p-2 > .css-10u1y7e-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
     cy.get('#react-select-5-option-1').click()
     cy.get('.items-center > .w-32').click()
        cy.wait(3000)
        cy.get('.top-2 > :nth-child(2)').click()

      //logout
      cy.get('[href="/logout"]').click()
       



      //  User account

         // Filter log by Facility (208)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(5000)
      //correct Credentials 
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
      // password strength 
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(5000)
      //correct 2fa
      cy.get('.px-2').type('123456{enter}')
      cy.wait(5000)
  
      //settings
      cy.get('[href="/settings"]').click()
      cy.wait(5000)
      cy.get('ul > :nth-child(3) > .flex').click()
      cy.wait(3000)
      cy.get('.flex-row').click()
      cy.wait(3000)
      cy.get('#react-select-4-option-0').click()
      cy.wait(5000)
      //logout
      cy.get('[href="/logout"]').click()


      //Query by specifying a date range (210)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(5000)
      //correct Credentials 
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
      // password strength 
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(5000)
      //correct 2fa
      cy.get('.px-2').type('123456{enter}')
      cy.wait(5000)
       //settings
     cy.get('[href="/settings"]').click()
     cy.wait(5000)
     cy.get('ul > :nth-child(3) > .flex').click()
     cy.wait(3000)
     cy.get('.bg-slate-200 > :nth-child(3)').dblclick()
     cy.wait(3000)
     cy.get('.bg-slate-200 > .text-sm > .absolute > .flex:nth-child(1) > .standard').click()
     cy.wait(3000)
     cy.get('.bg-slate-200 > .text-sm > .absolute > .flex:nth-child(1) > .standard').type('2024-01-02')
     cy.wait(3000)
     cy.get('.bg-slate-200 > .text-sm > .absolute > .flex:nth-child(3) > .standard').click()
     cy.wait(3000)
     cy.get('.bg-slate-200 > .text-sm > .absolute > .flex:nth-child(3) > .standard').type('2024-01-04')
     cy.wait(5000)
     // logout
     cy.get('[href="/logout"]').click()


     //Query by specifying the user name (211)
     cy.visit('https://alpha.xpropeller.com/signin')
     cy.wait(3000)
     //correct Credentials 
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
     // password strength 
     cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
     cy.wait(3000)
     //correct 2fa
     cy.get('.px-2').type('123456{enter}')
     cy.wait(5000)
     //settings
     cy.get('[href="/settings"]').click()
     cy.wait(5000)
     cy.get('ul > :nth-child(3) > .flex').click()
     cy.wait(3000)
     cy.get('.bg-slate-200 > .py-3').dblclick()
     cy.get('.p-2 > .css-10u1y7e-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
     cy.get('#react-select-5-option-0').click()
     
     //logout
     cy.get('[href="/logout"]').click()


     //Query by specifying the user email(214)
     cy.visit('https://alpha.xpropeller.com/signin')
     cy.wait(3000)
     //correct Credentials 
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
     // password strength 
     cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
     cy.wait(3000)
     //correct 2fa
     cy.get('.px-2').type('123456{enter}')
     cy.wait(5000)
     //settings
     cy.get('[href="/settings"]').click()
     cy.wait(5000)
     cy.get('ul > :nth-child(3) > .flex').click()
     cy.wait(3000)
     cy.get('.bg-slate-200 > :nth-child(2)').dblclick()
     cy.get('.p-2 > .css-10u1y7e-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
     cy.get('#react-select-5-option-1').click()
     
     //logout
     cy.get('[href="/logout"]').click()

       //Query by specifying the user role(216)
       cy.visit('https://alpha.xpropeller.com/signin')
       cy.wait(3000)
       //correct Credentials 
       cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
       // password strength 
       cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
       cy.wait(3000)
       //correct 2fa
       cy.get('.px-2').type('123456{enter}')
       cy.wait(5000)
       //settings
       cy.get('[href="/settings"]').click()
       cy.wait(5000)
       cy.get('ul > :nth-child(3) > .flex').click()
       cy.wait(3000)
       cy.get('.bg-slate-200 > :nth-child(4)').dblclick()
       cy.get('.p-2 > .css-10u1y7e-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
       cy.get('#react-select-5-option-1').click()
 
       //logout
       cy.get('[href="/logout"]').click()


       //Query by specifying the user type(218)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(3000)
      //correct Credentials 
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
      // password strength 
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(3000)
      //correct 2fa
      cy.get('.px-2').type('123456{enter}')
      cy.wait(5000)
      //settings
      cy.get('[href="/settings"]').click()
      cy.wait(5000)
      cy.get('ul > :nth-child(3) > .flex').click()
      cy.wait(3000)
      cy.get('.bg-slate-200 > :nth-child(5)').dblclick()
      cy.get('.p-2 > .css-10u1y7e-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
      cy.get('#react-select-5-option-1').click()

      //logout
      cy.get('[href="/logout"]').click()


       //Query by specifying the action performed(220)
       cy.visit('https://alpha.xpropeller.com/signin')
       cy.wait(3000)
       //correct Credentials 
       cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
       // password strength 
       cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
       cy.wait(3000)
       //correct 2fa
       cy.get('.px-2').type('123456{enter}')
       cy.wait(5000)
       //settings
       cy.get('[href="/settings"]').click()
       cy.wait(5000)
       cy.get('ul > :nth-child(3) > .flex').click()
       cy.wait(3000)
       cy.get('.bg-slate-200 > :nth-child(6)').dblclick()
       cy.get('.p-2 > .css-10u1y7e-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
       cy.get('#react-select-5-option-1').click()
 
       //logout
       cy.get('[href="/logout"]').click()


       //Export as Excel(224)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(3000)
      //correct Credentials 
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
      // password strength 
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(3000)
      //correct 2fa
      cy.get('.px-2').type('123456{enter}')
      cy.wait(5000)
     //settings
     cy.get('[href="/settings"]').click()
     cy.wait(5000)
     cy.get('ul > :nth-child(3) > .flex').click()
     cy.wait(3000)
     cy.get('.bg-slate-200 > :nth-child(6)').dblclick()
     cy.get('.p-2 > .css-10u1y7e-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
     cy.get('#react-select-5-option-1').click()
     cy.get('.items-center > .w-32').click()
        cy.wait(3000)
        cy.get('.top-2 > :nth-child(1)').click()

      //logout
      cy.get('[href="/logout"]').click()


      //Export as PDF(225)
      cy.visit('https://alpha.xpropeller.com/signin')
      cy.wait(3000)
      //correct Credentials 
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
      // password strength 
      cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
      cy.wait(3000)
      //correct 2fa
      cy.get('.px-2').type('123456{enter}')
      cy.wait(5000)
     //settings
     cy.get('[href="/settings"]').click()
     cy.wait(5000)
     cy.get('ul > :nth-child(3) > .flex').click()
     cy.wait(3000)
     cy.get('.bg-slate-200 > :nth-child(6)').dblclick()
     cy.get('.p-2 > .css-10u1y7e-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
     cy.get('#react-select-5-option-1').click()
     cy.get('.items-center > .w-32').click()
        cy.wait(3000)
        cy.get('.top-2 > :nth-child(2)').click()

      //logout
      cy.get('[href="/logout"]').click()
       







  
  })
})