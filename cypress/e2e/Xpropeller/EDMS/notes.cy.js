describe('template spec', () => {
    it('passes', () => {
        

     //   ADMIN ACCOUNT

     
     // Users can write down their notes (63)
     cy.visit('https://alpha.xpropeller.com/signin')
     cy.wait(3000)
     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('xpropellerwws@gmail.com')
     cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
     cy.wait(3000)
     cy.get('.px-2').type('123456{enter}')
     cy.wait(3000)
    //  notes
     cy.get('[href="/xproNotes"]').click()
     cy.wait(3000)
    //  new note
     cy.get('.text-blue-500').click()
     cy.wait(3000)
     cy.get('.inline-flex > :nth-child(1) > .px-2').click()
     cy.get('.inline-flex > :nth-child(1) > .px-2').type('Notes')
     cy.wait(3000)
     cy.get('.bg-white > .text-gray-600').type('hey there i am taking notes here')
     cy.wait(3000)
     cy.get('.ml-20').click()
     cy.wait(3000)
     // logout
     cy.get('[href="/logout"]').click()


    //  USER ACCOUNT
     
    //  Users can write down their notes (64)
    cy.visit('https://alpha.xpropeller.com/signin')
    cy.wait(3000)
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
    cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter}')
    cy.wait(3000)
    cy.get('.px-2').type('123456{enter}')
    cy.wait(3000)
   //  notes
    cy.get('[href="/xproNotes"]').click()
    cy.wait(3000)
   //  new note
    cy.get('.text-blue-500').click()
    cy.wait(3000)
    cy.get('.inline-flex > :nth-child(1) > .px-2').click()
    cy.get('.inline-flex > :nth-child(1) > .px-2').type('Notes')
    cy.wait(3000)
    cy.get('.bg-white > .text-gray-600').type('hey there i am taking notes here')
    cy.wait(3000)
    cy.get('.ml-20').click()
    cy.wait(3000)
    // logout
    cy.get('[href="/logout"]').click()



        })
})