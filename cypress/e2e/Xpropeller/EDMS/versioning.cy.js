describe('template spec', () => {
    it('passes', () => {

        // ADMIN Account

        //  Compare two versions (99)
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
        //select 1st file
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
        // select 2nd file
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').click()
        cy.wait(3000)
        // file compare
        cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').rightclick()
        cy.wait(3000)
        cy.contains('File Compare').click()
        cy.wait(3000)
        // logout
        cy.get('[href="/logout"]').click()

        

        // USER Account

        // Compare two versions (100)
        
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
            //select 1st file
            cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').trigger('mouseover')
            cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').should('be.visible')
            cy.wait(3000)
            cy.get('[style="position: absolute; left: 0px; top: 40px; height: 67px; width: 100%;"]').click()
            cy.wait(3000)
            // select 2nd file
            cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').click()
            cy.wait(3000)
            // file compare
            cy.get('[style="position: absolute; left: 0px; top: 107px; height: 67px; width: 100%;"]').rightclick()
            cy.wait(3000)
            cy.contains('File Compare').click()
            cy.wait(3000)
            // logout
            cy.get('[href="/logout"]').click()
                            
                })
        })
