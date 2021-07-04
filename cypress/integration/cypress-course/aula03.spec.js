/// <reference types="cypress" />

// aula 03 - primeiros comandos

describe("todo list", () => {
    it("should add todo", () => {
        cy.visit("https://google.com")
        cy.get('.gLFyf').type("cypress{enter}")
    })
})