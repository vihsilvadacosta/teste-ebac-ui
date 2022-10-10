/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
        
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        //.first()
        //.last()
        //.eq(3)
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()    
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3
        cy.get('.product-block')
        .contains('Atlas Fitness Tank')
        .click()  
        cy.get('.button-variable-item-S')
        .click()
        cy.get('.button-variable-item-Blue')
        .click()
        cy.get('.input-text')
        .clear()
        .type(quantidade)
        cy.get('.single_add_to_cart_button')
        .click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')
    });
    
    it.only('Deve adicionar produtos ao carrinho - Usando comandos customizados', () => {
        cy.addProdutos('Atlas Fitness Tank', 'M', 'Blue', 2)
        
    });
});

