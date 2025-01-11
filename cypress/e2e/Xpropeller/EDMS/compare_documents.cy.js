describe('template spec', () => {
    it('passes', () => {

        // ADMIN Account

        // Diff and highlight PDF to PDf (259)
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
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        // select 2nd file
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').click()
        cy.wait(3000)
        // file compare
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').rightclick()
        cy.wait(3000)
        cy.contains('File Compare').click()
        cy.wait(8000)
        // logout
        cy.get('[href="/logout"]').click()


        // Diff and highlight PDF to DOC(260)
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
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        // select 2nd file
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').click()
        cy.wait(3000)
        // file compare
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').rightclick()
        cy.wait(3000)
        cy.contains('File Compare').click()
        cy.wait(8000)
        // logout
        cy.get('[href="/logout"]').click()

        // Diff and highlight PDF to TXT (261)
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
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        // select 2nd file
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').click()
        cy.wait(3000)
        // file compare
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').rightclick()
        cy.wait(3000)
        cy.contains('File Compare').click()
        cy.wait(8000)
        // logout
        cy.get('[href="/logout"]').click()

        // Diff and highlight DOC to DOC (262)
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
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        // select 2nd file
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').click()
        cy.wait(3000)
        // file compare
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').rightclick()
        cy.wait(3000)
        cy.contains('File Compare').click()
        cy.wait(8000)
        // logout
        cy.get('[href="/logout"]').click()

        // Diff and highlight DOC to TXT (263)
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
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        // select 2nd file
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').click()
        cy.wait(3000)
        // file compare
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').rightclick()
        cy.wait(3000)
        cy.contains('File Compare').click()
        cy.wait(8000)
        // logout
        cy.get('[href="/logout"]').click()

        // Diff and highlight TXT to TXT (264)
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
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        // select 2nd file
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').click()
        cy.wait(3000)
        // file compare
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').rightclick()
        cy.wait(3000)
        cy.contains('File Compare').click()
        cy.wait(8000)
        // logout
        cy.get('[href="/logout"]').click()


        // Diff and highlight multiple version (271)
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
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        // select 2nd file
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').click()
        cy.wait(3000)
        // file compare
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').rightclick()
        cy.wait(3000)
        cy.contains('File Compare').click()
        cy.wait(8000)
        // logout
        cy.get('[href="/logout"]').click()

        // USER Account

        // Diff and highlight PDF to PDf (265)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select 1st file
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        // select 2nd file
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').click()
        cy.wait(3000)
        // file compare
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').rightclick()
        cy.wait(3000)
        cy.contains('File Compare').click()
        cy.wait(8000)
        // logout
        cy.get('[href="/logout"]').click()


        // Diff and highlight PDF to DOC (266)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select 1st file
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        // select 2nd file
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').click()
        cy.wait(3000)
        // file compare
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').rightclick()
        cy.wait(3000)
        cy.contains('File Compare').click()
        cy.wait(8000)
        // logout
        cy.get('[href="/logout"]').click()

       
        // Diff and highlight PDF to TXT (267)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select 1st file
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        // select 2nd file
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').click()
        cy.wait(3000)
        // file compare
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').rightclick()
        cy.wait(3000)
        cy.contains('File Compare').click()
        cy.wait(8000)
        // logout
        cy.get('[href="/logout"]').click()


        // Diff and highlight DOC to DOC (268)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select 1st file
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        // select 2nd file
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').click()
        cy.wait(3000)
        // file compare
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').rightclick()
        cy.wait(3000)
        cy.contains('File Compare').click()
        cy.wait(8000)
        // logout
        cy.get('[href="/logout"]').click()

        // Diff and highlight DOC to TXT (269)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select 1st file
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        // select 2nd file
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').click()
        cy.wait(3000)
        // file compare
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').rightclick()
        cy.wait(3000)
        cy.contains('File Compare').click()
        cy.wait(8000)
        // logout
        cy.get('[href="/logout"]').click()


        // Diff and highlight TXT to TXT (270)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select 1st file
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        // select 2nd file
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').click()
        cy.wait(3000)
        // file compare
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').rightclick()
        cy.wait(3000)
        cy.contains('File Compare').click()
        cy.wait(8000)
        // logout
        cy.get('[href="/logout"]').click()

        // Diff and highlight multipe version (272)
        cy.visit('https://alpha.xpropeller.com/signin')
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .px-2').type('wwsxpropellerr@gmail.com')
        cy.get('.relative > :nth-child(1) > .px-2').type('XPROwws@123{enter{enter}')
        cy.wait(3000)
        cy.get('.px-2').type('123456{enter}')
        cy.wait(3000)
        // Documents
        cy.get('[href="/dms"]').click()
        cy.wait(3000)
        //select 1st file
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').trigger('mouseover')
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').should('be.visible')
        cy.wait(3000)
        cy.get('[style="position: absolute; left: 0px; top: 190px; height: 50px; width: 100%;"]').click()
        cy.wait(3000)
        // select 2nd file
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').click()
        cy.wait(3000)
        // file compare
        cy.get('[style="position: absolute; left: 0px; top: 290px; height: 50px; width: 100%;"] > .h-max').rightclick()
        cy.wait(3000)
        cy.contains('File Compare').click()
        cy.wait(8000)
        // logout
        cy.get('[href="/logout"]').click()

        })
})


    