describe('user can click on button', () => {
    it('test', () => {
        cy.visit('http://localhost:3003')
        cy.contains("Greetings")
        cy.get("#quote").click()
    })

    it('displays a message', () => {
        cy.get("#message").should("contain", "hello how are you")
    })
})
