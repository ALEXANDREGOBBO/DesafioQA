const elem = require('./elementos').ELEMENTOS;



class login{

    acessarAndValidarPaginaLogin(){
        cy.visit('https://www.saucedemo.com/') 
        cy.get(elem.username).type('standard_user')
        cy.get(elem.password).type('secret_sauce')
        cy.get(elem.loginButton).click()
    }
    
}


export default new login();
