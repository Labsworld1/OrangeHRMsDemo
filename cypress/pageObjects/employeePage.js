export class EmployeeListPage {
  addBtn = '.oxd-button--secondary:nth-child(1)'
  firstNameField = '[name="firstName"]'
  middleNameField =  '[name="middleName"]'
  lastNameField = '[name="lastName"]'
  employeeIdField = '.oxd-input--focus'
  pimBtn = ':nth-child(2) > .oxd-main-menu-item'
  headerTitleFlex = '.oxd-topbar-header-title'
  saveBtn = '.oxd-button--secondary'
  pwdField = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
  confirmPwdField = '.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
  


    clickPIMBtn() {
        cy.get(this.pimBtn).click()
        //assert you are on the admin dashboard
        cy.get(this.headerTitleFlex).should('have.text', 'PIM')
    }

    clickAddButton() {
        cy.get(this.addBtn).click();
        cy.get('h6').should('have.text', 'PIMAdd Employee');
    }


    fillFirstName(firstName) {
        cy.get(this.firstNameField).clear()
        .type(firstName);
    }
    
      fillMiddleName(middleName) {
        cy.get(this.middleNameField).clear()
        .type(middleName);
    }
    
      fillLastName(lastName) {
        cy.get(this.lastNameField).clear()
        .type(lastName);
      }
    
      fillEmployeeId(employeeId) {
        cy.get(this.employeeIdField).clear()
        .type(employeeId);
      }
    
      toggleSwitch() {
        cy.get('.oxd-switch-input').click();
      }
    
      fillUserName(userName) {
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .should('exist')
        .should('be.visible')
        .clear()
        .type(userName)
        // Add any additional assertions or actions you need to perform on this element

      }

      fillPassword(password) {
        cy.get(this.pwdField).clear()
        .type(password)
      }

    fillConfirmPassword(confirmPwd) {
        cy.get(this.confirmPwdField).clear()
        .type(confirmPwd)
    }
    
      clickSaveButton() {
        cy.get(this.saveBtn).click();
      }

      assertCreatedEmployee() {
        
      }
    }
  
  export default new EmployeeListPage();