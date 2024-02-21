describe('Main Page', () => {
  it('should load the main page successfully', () => {
    cy.visit('https://www.demoblaze.com');
    cy.get('.grrrr').should('have.length.greaterThan', 0);
  });

  it('should navigate to a product page', () => {
    cy.visit('https://www.demoblaze.com');
    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').should('be.visible');
  });

  it('should add a product to the cart', () => {
    cy.visit('https://www.demoblaze.com');
    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
  });

  it('should display the cart', () => {
    cy.visit('https://www.demoblaze.com');
    cy.contains('Cart').click();
    cy.contains('Total').should('be.visible');
  });

  it('should remove a product from the cart', () => {
    cy.visit('https://www.demoblaze.com');
    cy.contains('Cart').click();
    cy.get('.btn-danger').first().click();
    cy.contains('Total').should('not.exist');
  });

  it('should complete the checkout process', () => {
    cy.visit('https://www.demoblaze.com');
    cy.contains('Cart').click();
    cy.contains('Check Out').click();
    cy.get('#name').type('John Doe');
    cy.get('#country').type('United States');
    cy.get('#city').type('New York');
    cy.get('#card').type('1234567890123456');
    cy.get('#month').type('12');
    cy.get('#year').type('2024');
    cy.contains('Purchase').click();
    cy.contains('Thank you for your purchase!');
  });




});