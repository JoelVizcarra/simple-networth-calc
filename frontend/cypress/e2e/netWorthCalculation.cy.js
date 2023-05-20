describe('add-items-cart', () => {
  it('user can add items to cart', () => {
    cy.viewport(1980, 1080);
    cy.visit(Cypress.env('REACT_APP_URL'));

    cy.get('input[name="assets.cashAndInvestments.chequing"]')
      .should('be.visible')
      .type(10);
    cy.get('input[name="assets.cashAndInvestments.savingsForTaxes"')
      .should('be.visible')
      .type(10);
    cy.get('input[name="assets.cashAndInvestments.rainyDayFund"')
      .should('be.visible')
      .type(10);
    cy.get('input[name="assets.cashAndInvestments.savingsForFun"')
      .should('be.visible')
      .type(10);
    cy.get('input[name="assets.cashAndInvestments.savingsForTravel"')
      .should('be.visible')
      .type(10);
    cy.get(
      'input[name="assets.cashAndInvestments.savingsForPersonalDevelopment"'
    )
      .should('be.visible')
      .type(10);
    cy.get('input[name="assets.cashAndInvestments.investment1"')
      .should('be.visible')
      .type(10);
    cy.get('input[name="assets.cashAndInvestments.investment2"')
      .should('be.visible')
      .type(10);
    cy.get('input[name="assets.cashAndInvestments.investment3"')
      .should('be.visible')
      .type(10);
    cy.get('input[name="assets.cashAndInvestments.investment4"')
      .should('be.visible')
      .type(10);
    cy.get('input[name="assets.cashAndInvestments.investment5"')
      .should('be.visible')
      .type(10);
    cy.get('input[name="assets.longTermAssets.primaryHome"')
      .should('be.visible')
      .type(10);
    cy.get('input[name="assets.longTermAssets.secondHome"')
      .should('be.visible')
      .type(10);
    cy.get('input[name="assets.longTermAssets.other"')
      .should('be.visible')
      .type(10);
    cy.get('input[name="liabilities.shortTermLiabilities.creditCard1"')
      .should('be.visible')
      .type(50);
    cy.get('input[name="liabilities.shortTermLiabilities.creditCard2"')
      .should('be.visible')
      .type(50);
    cy.get('input[name="liabilities.longTermDebt.mortage1"')
      .should('be.visible')
      .type(50);
    cy.get('input[name="liabilities.longTermDebt.mortage2"')
      .should('be.visible')
      .type(50);
    cy.get('input[name="liabilities.longTermDebt.lineOfCredit"')
      .should('be.visible')
      .type(50);
    cy.get('input[name="liabilities.longTermDebt.investmentLoan"')
      .should('be.visible')
      .type(50);
    cy.contains('button', 'calculate net worth').click();
    cy.get('p[test-id="totalAssets"')
      .should('be.visible')
      .should('have.text', '140');
    cy.get('p[test-id="totalLiabilities"')
      .should('be.visible')
      .should('have.text', '300');
    cy.get('p[test-id="total"')
      .should('be.visible')
      .should('have.text', '-160');
  });
});
