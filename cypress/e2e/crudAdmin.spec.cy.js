import { AdminPage} from "../pageObjects/adminPage";
import { AdminLoginPage } from "../pageObjects/authPage";

describe('CRUD Admin', () => {
    beforeEach('Admin Login', () => {
        const loginPage = new AdminLoginPage()
        cy.adminLogin('admin', 'admin123')
        loginPage.assertDashboard()
    })

    it('Create Admin', () => {
        const adminPage = new AdminPage()
        adminPage.clickAdminBtn()
        adminPage.clickAddBtn()
        adminPage.assertAddUser()
        adminPage.selectUserRole()
    })
})