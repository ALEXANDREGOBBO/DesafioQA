const elem = require('./elementos').ELEMENTOS;



class produtos{

    ColocarProdutosNoCarrinho(){
        cy.get(elem.produto1).click()
        cy.get(elem.produto2).click()
    }
    
}


export default new produtos();
