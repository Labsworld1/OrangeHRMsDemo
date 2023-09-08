export class AdminLoginPage {
usernameField = 'input[placeholder="Username"]'
passwordField = 'input[placeholder="Password"]'
loginBtn = 'button[type="submit"]'
dashboardClass = '.oxd-topbar-header-breadcrumb'

    setUsername(username){
        cy.get(this.usernameField).clear()
        .type(username)
    }

    setPassword(password){
        cy.get(this.passwordField).clear()
        .type(password)
    }

    clickLoginBtn(){
        cy.get(this.loginBtn).click()
    }

    assertDashboard() {
        cy.get('h6').should('have.text', 'Dashboard')
    }







}