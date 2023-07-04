/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve adicionar 1 contato a lista', () => {
    cy.get('input[type="text"]').type('Matheus Barbosa')
    cy.get('input[type="email"]').type('matts.barbosa@gmail.com')
    cy.get('input[type="tel"]').type('123456')
    cy.get('.adicionar').click()

    cy.get('ul').should('have.length', 4)
    cy.screenshot('Contato adicionado a lista')
  })

  it('Deve editar o primeiro contato da lista', () => {
    cy.get('.edit').first().click()
    cy.get('input[type="text"]').clear().type('Contato Editado')
    cy.get('input[type="email"]').clear().type('Editado@gmail.com')
    cy.get('input[type="tel"]').clear().type('0000')
    cy.get('.alterar').click()

    cy.get('li').first().should('have.text', "Contato Editado")
    cy.screenshot('Primeiro contato editado')
  })

  it('Deve deletar o primeiro contato da lista', () => {
    cy.get('.delete').first().click()

    cy.get('ul').should('have.length', 3)
    cy.screenshot('Primeiro contato deletado')
  })

})