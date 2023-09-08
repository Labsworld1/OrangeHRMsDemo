import { AdminLoginPage } from "../pageObjects/authPage";
import { EmployeeListPage } from "../pageObjects/employeePage";

describe('CRUD Employee', () => {
    beforeEach('Admin Login', () => {
        const loginPage = new AdminLoginPage()
        cy.adminLogin('admin', 'admin123')
        loginPage.assertDashboard()
    })

    it('Create Employee', () => {
        const employeePage = new EmployeeListPage()
        employeePage.clickPIMBtn()
        employeePage.clickAddButton()
        employeePage.fillFirstName('Holla')
        employeePage.fillMiddleName('Bola')
        employeePage.fillLastName('Jackson')
        employeePage.clickSaveButton()
        
    })

})