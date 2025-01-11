describe('template spec', () => {
    it('passes', () => {


        // ADMIN ACCOUNT

        // Data validation (237)
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
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(5000)
        cy.get('ul > :nth-child(4) > .flex').click()
        cy.wait(7000)
        //logout
        cy.get('[href="/logout"]').click()

        // Filter log by Facility (239)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(5000)
        cy.get('ul > :nth-child(4) > .flex').click()
        cy.wait(3000)
        cy.get('.flex-row').click()
        cy.wait(3000)
        cy.get('#react-select-4-option-0').click()
        cy.wait(5000)
        //logout
        cy.get('[href="/logout"]').click()


         // Query by specifying a date range (241)
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
     cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
     cy.wait(3000)
     cy.get('.px-2').type('123456{enter}')
     cy.wait(3000)
     //settings
     cy.get('[href="/settings"]').click()
     cy.wait(5000)
     cy.get('ul > :nth-child(4) > .flex').click()
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

     
        // Query by specifying the user name (243)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(5000)
        cy.get('ul > :nth-child(4) > .flex').click()
        cy.wait(3000)
        cy.get('.py-3').click()
        cy.wait(3000)
        cy.get('.p-2 > .css-10u1y7e-control').click()
        cy.wait(3000)
        cy.get('#react-select-5-option-0').click()
        cy.wait(5000)
        //logout
        cy.get('[href="/logout"]').click()

        //Query by specifying the user email (245)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(5000)
        cy.get('ul > :nth-child(4) > .flex').click()
        cy.wait(3000)
        cy.get('.bg-slate-200 > :nth-child(2)').click()
        cy.wait(3000)
        cy.get('.p-2 > .css-10u1y7e-control').click()
        cy.wait(3000)
        cy.get('#react-select-5-option-0').click()
        cy.wait(5000)
        // logout
        cy.get('[href="/logout"]').click()


        
        //Query by specifying the user who uploaded the file (247)
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
     cy.get('ul > :nth-child(4) > .flex').click()
     cy.wait(5000)
     cy.get('.bg-slate-200 > :nth-child(7)').dblclick()
     cy.wait(3000)
     cy.get('#react-select-5-option-0').click()
     cy.wait(5000)
      // logout
      cy.get('[href="/logout"]').click()


      
        //Query by specifying the user who approved the file (249)
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
     cy.get('ul > :nth-child(4) > .flex').click()
     cy.wait(5000)
     cy.get('.bg-slate-200 > :nth-child(8)').dblclick()
     cy.wait(3000)
     cy.get('#react-select-5-option-0').click()
     cy.wait(5000)
      // logout
      cy.get('[href="/logout"]').click()
     


      //Query by specifying the action performed (251)
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
     cy.get('ul > :nth-child(4) > .flex').click()
     cy.wait(5000)
     cy.get('.bg-slate-200 > :nth-child(6)').dblclick()
     cy.wait(3000)
     cy.get('#react-select-4-option-0').click()
     cy.wait(5000)
     //logout
     cy.get('[href="/logout"]').click()
     

     //Export as Excel(255)
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
      cy.get('ul > :nth-child(3) > .flex').click()
      cy.wait(3000)
      cy.get('.bg-slate-200 > :nth-child(6)').click()
      cy.wait(3000)
      cy.get('.p-2 > .css-10u1y7e-control').click()
      cy.wait(3000)
      cy.get('#react-select-5-option-2').click()
      cy.wait(5000)
      cy.get('.items-center > .w-32').click()
      cy.wait(3000)
      cy.get('span > .text-gray-600').click()
      cy.wait(3000)
      //logout
      cy.get('[href="/logout"]').click()

      //Export as PDF (255)
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
        cy.get('ul > :nth-child(4) > .flex').click()
        cy.wait(3000)
        cy.get('.bg-slate-200 > :nth-child(6)').click()
        cy.wait(3000)
        cy.get('.p-2 > .css-10u1y7e-control').click()
        cy.wait(3000)
        cy.get('#react-select-5-option-2').click()
        cy.wait(5000)
        cy.get('.items-center > .w-32').click()
        cy.wait(3000)
        cy.get('.top-2 > :nth-child(2)').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()
     
        



        // USER ACCOUNT

        // Data validation (238)
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
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(5000)
        cy.get('ul > :nth-child(4) > .flex').click()
        cy.wait(7000)
        //logout
        cy.get('[href="/logout"]').click()

        // Filter log by Facility (240)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(5000)
        cy.get('ul > :nth-child(4) > .flex').click()
        cy.wait(3000)
        cy.get('.flex-row').click()
        cy.wait(3000)
        cy.get('#react-select-4-option-0').click()
        cy.wait(5000)
        //logout
        cy.get('[href="/logout"]').click()


         // Query by specifying a date range (242)
         cy.visit('https://alpha.xpropeller.com/signin')
         cy.wait(3000)
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
     cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
     cy.wait(3000)
     cy.get('.px-2').type('123456{enter}')
     cy.wait(3000)
     //settings
     cy.get('[href="/settings"]').click()
     cy.wait(5000)
     cy.get('ul > :nth-child(4) > .flex').click()
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


     
        // Query by specifying the user name (244)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        //settings
        cy.get('[href="/settings"]').click()
        cy.wait(5000)
        cy.get('ul > :nth-child(4) > .flex').click()
        cy.wait(3000)
        cy.get('.py-3').click()
        cy.wait(3000)
        cy.get('.p-2 > .css-10u1y7e-control').click()
        cy.wait(3000)
        cy.get('#react-select-5-option-0').click()
        cy.wait(5000)
        //logout
        cy.get('[href="/logout"]').click()


        //Query by specifying the user email (246)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
     cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
     cy.wait(3000)
     cy.get('.px-2').type('123456{enter}')
     cy.wait(3000)
     //settings
     cy.get('[href="/settings"]').click()
     cy.wait(5000)
     cy.get('ul > :nth-child(4) > .flex').click()
     cy.wait(3000)
     cy.get('.bg-slate-200 > :nth-child(2)').click()
     cy.wait(3000)
     cy.get('.p-2 > .css-10u1y7e-control').click()
     cy.wait(3000)
     cy.get('#react-select-5-option-0').click()
     cy.wait(5000)
      // logout
      cy.get('[href="/logout"]').click()
        


      
        //Query by specifying the user who uploaded the file (248)
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
     cy.get('ul > :nth-child(4) > .flex').click()
     cy.wait(5000)
     cy.get('.bg-slate-200 > :nth-child(7)').dblclick()
     cy.wait(3000)
     cy.get('#react-select-5-option-0').click()
     cy.wait(5000)
      // logout
      cy.get('[href="/logout"]').click()
     


    
        //Query by specifying the user who approved the file (250)
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
        cy.get('ul > :nth-child(4) > .flex').click()
        cy.wait(5000)
        cy.get('.bg-slate-200 > :nth-child(8)').dblclick()
        cy.wait(3000)
        cy.get('#react-select-5-option-0').click()
        cy.wait(5000)
         // logout
         cy.get('[href="/logout"]').click()


         
      //Query by specifying the action performed (252)
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
     cy.get('ul > :nth-child(4) > .flex').click()
     cy.wait(5000)
     cy.get('.bg-slate-200 > :nth-child(6)').dblclick()
     cy.wait(3000)
     cy.get('#react-select-4-option-0').click()
     cy.wait(5000)
     //logout
     cy.get('[href="/logout"]').click()


     //Export as Excel(256)
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
      cy.get('ul > :nth-child(3) > .flex').click()
      cy.wait(3000)
      cy.get('.bg-slate-200 > :nth-child(6)').click()
      cy.wait(3000)
      cy.get('.p-2 > .css-10u1y7e-control').click()
      cy.wait(3000)
      cy.get('#react-select-5-option-2').click()
      cy.wait(5000)
      cy.get('.items-center > .w-32').click()
      cy.wait(3000)
      cy.get('span > .text-gray-600').click()
      cy.wait(3000)
      //logout
      cy.get('[href="/logout"]').click()


      //Export as PDF (258)
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
        cy.get('ul > :nth-child(4) > .flex').click()
        cy.wait(3000)
        cy.get('.bg-slate-200 > :nth-child(6)').click()
        cy.wait(3000)
        cy.get('.p-2 > .css-10u1y7e-control').click()
        cy.wait(3000)
        cy.get('#react-select-5-option-2').click()
        cy.wait(5000)
        cy.get('.items-center > .w-32').click()
        cy.wait(3000)
        cy.get('.top-2 > :nth-child(2)').click()
        cy.wait(3000)
        //logout
        cy.get('[href="/logout"]').click()
        
        

        
    


  


       






  
  

   















        })
})