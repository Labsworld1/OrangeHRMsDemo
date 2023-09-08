export class AdminPage{
adminBtn = ':nth-child(1) > .oxd-main-menu-item'

userMgtBtn = ':nth-child(1) > .oxd-topbar-body-nav-tab-item'
usersBtn = '.oxd-topbar-body-nav-tab-link'
jobBtn = ':nth-child(2) > .oxd-topbar-body-nav-tab-item'
orgBtn = ':nth-child(3) > .oxd-topbar-body-nav-tab-item'
jobTitleBtn = ':nth-child(1)>.oxd-topbar-body-nav-tab-link'
payGradeBtn = ':nth-child(2)>.oxd-topbar-body-nav-tab-link'
employmentStatusBtn = ':nth-child(3)>.oxd-topbar-body-nav-tab-link'
jobCatsBtn = ':nth-child(4)>.oxd-topbar-body-nav-tab-link'
workShiftsBtn = ':nth-child(5)>.oxd-topbar-body-nav-tab-link'
headerTitleFlex = '.oxd-topbar-header-title'
addBtn = '.orangehrm-header-container > .oxd-button'
userRoleDrpdown = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'


clickAdminBtn() {
    cy.get(this.adminBtn).click()
    //assert you are on the admin dashboard
    cy.get(this.headerTitleFlex).should('have.text', 'AdminUser Management')
}


clickUserMgtBtn() {
    cy.get(this.userMgtBtn).click()
    //assert you are on the admin dashboard
    cy.get(this.headerTitleFlex).should('have.text', 'AdminUser Management')
}

clickAddBtn() {
    cy.get(this.addBtn).click()
}

assertAddUser() {
    cy.get('h6').should('have.text','AdminAdd User')
}

selectUserRole() {
    cy.get(this.userRoleDrpdown).click()
}

}