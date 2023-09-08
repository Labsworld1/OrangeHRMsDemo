export class EmployeeListPage {
  addBtn = '.oxd-button--secondary:nth-child(1)'
  firstNameField = '[name="firstName"]'
  middleNameField =  '[name="middleName"]'
  lastNameField = '[name="lastName"]'
  employeeIdField = '.oxd-input--focus'
  pimBtn = ':nth-child(2) > .oxd-main-menu-item'
  headerTitleFlex = '.oxd-topbar-header-title'
  saveBtn = '.oxd-button--secondary'
  



    clickPIMBtn() {
        cy.get(this.pimBtn).click()
        //assert you are on the admin dashboard
        cy.get(this.headerTitleFlex).should('have.text', 'PIM')
    }

    clickAddButton() {
        cy.get(this.addBtn).click();
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
    
      fillCompanyName(companyName) {
        cy.get('.oxd-input--focus').click().type(companyName);
      }
    
      clickSaveButton() {
        cy.get(this.saveBtn).click();
      }
    }
  
  export default new EmployeeListPage();