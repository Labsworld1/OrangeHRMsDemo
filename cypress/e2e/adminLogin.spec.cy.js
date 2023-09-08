import { AdminLoginPage } from "../pageObjects/authPage"

describe('Dashboard Tests', () => {
  const loginPage = new AdminLoginPage()

  it('should login and access the dashboard', () => {
    cy.adminLogin('admin', 'admin123')
    loginPage.assertDashboard()
  })
})