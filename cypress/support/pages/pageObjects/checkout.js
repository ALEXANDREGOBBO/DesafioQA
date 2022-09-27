const elem = require('./elementos').ELEMENTOS;



class checkout{

    fazerCheckout(){
        cy.get(elem.checkout).click()
    }
    
}


export default new checkout();
