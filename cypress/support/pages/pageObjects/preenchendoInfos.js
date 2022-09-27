const elem = require('./elementos').ELEMENTOS;



class preencherInfos{

    preencherInfos(){
        cy.get(elem.primeiroNome).type('Alexandre')
        cy.get(elem.segundoNome).type('Gobbo')
        cy.get(elem.CEP).type('1569963')
    }
    
}


export default new preencherInfos();
