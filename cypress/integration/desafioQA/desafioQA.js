/// <reference types="cypress" />
import login from '../../support/pages/pageObjects/login'
import carrinho from '../../support/pages/pageObjects/carrinho'
import ordenarValores from '../../support/pages/pageObjects/ordenarValores'
import produtos from '../../support/pages/pageObjects/produtos'
import checkout from '../../support/pages/pageObjects/checkout'
import preencherInfos from '../../support/pages/pageObjects/preenchendoInfos'
context('Actions', () => {

    

    describe('DesafioQA', () => {
        it('Realizar login', () => {
            login.acessarAndValidarPaginaLogin()
        })

        it('Ordenar os valores (low to high)', () => {
            //Ordenando os valores apenas pegando o container e selcionado low to high =)
            ordenarValores.OrdenarValores()
            cy.wait(2000)
        })

        it('Adicionar ao carrinho Sauce Labs Onesie e Test.allTheThings() T-Shirt (Red)', () => {
            //adicionando os intens selecionados =)
            produtos.ColocarProdutosNoCarrinho()
            cy.wait(2000)
        })

        it('Acessar o carrinho e prosseguir para a conclusão da compra', () => {
            carrinho.AcessarCarrinho() //clicando no carrinho
            cy.wait(2000)

            // Após clicar no carrinho retorna uma mensagem que não pode acessar a página por não estar logado por tanto fiz o login novamente =)

            login.acessarAndValidarPaginaLogin()

            // Adicionando os intens novamente =)

            produtos.ColocarProdutosNoCarrinho()

            // Acessando novamente o carrinho

            carrinho.AcessarCarrinho() 

            //Inicio do Checkout
            checkout.fazerCheckout()

            //Preenchendo as informações
            preencherInfos.preencherInfos()

            //Compra finalizada com sucesso!
            cy.get('[data-test="continue"]').click()
            cy.get('[data-test="finish"]').click()
            cy.get('[data-test="back-to-products"]').click()
        })

        
    })



})