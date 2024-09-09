Cypress.Commands.add('apiLogin', (email, password, rememberMe) => {
  return cy.request({
    method: 'POST',
    url: Cypress.env('baseUrl') + 'login',
    body: { email, password, rememberMe},
    failOnStatusCode: false
  });
});

Cypress.Commands.add('uploadPaymentDetails', (bankDetailsRequest, token) => {
  cy.request({
    method: 'POST',
    url: Cypress.env('baseUrl') + 'payment-details/upload',
    body: bankDetailsRequest,
    headers: {
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    }
  });
});

Cypress.Commands.add('getToken', (email, password, rememberMe) => {
  return cy.request({
    method: 'POST',
    url: Cypress.env('baseUrl') + 'login',
    body: { email, password, rememberMe},
    failOnStatusCode: false
  }).then((response)=> {
    expect(response.status).to.eq(200);
    return response.body.accessToken;
  })
});

Cypress.Commands.add('getAllPaymentsDetails', (token) => {
  return cy.request({
    method: 'GET',
    url: Cypress.env('baseUrl') + 'payment-details/',
    headers: {
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    },
    failOnStatusCode: false
  })
});

Cypress.Commands.add('deletePaymentsDetails', (id, token) => {
  return cy.request({
    method: 'DELETE',
    url: Cypress.env('baseUrl') + 'payment-details/' + id,
    headers: {
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`
    },
    failOnStatusCode: false
  })
});
