const elem = require('./elementos').ELEMENTOS;



class ordenar{

    OrdenarValores(){
        cy.get(elem.filtro).select('Price (low to high)')
    }
    
}


export default new ordenar();
