const elem = require('./elementos').ELEMENTOS;

class carrinho{

    AcessarCarrinho(){
        cy.get(elem.carrinho).click()
    }
    
}


export default new carrinho();
