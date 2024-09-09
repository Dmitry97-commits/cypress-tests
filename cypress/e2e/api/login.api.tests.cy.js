import { faker } from "@faker-js/faker";

function getUserData() {
  return cy.fixture('user');
}

describe('Login API Tests', () => {
  let user;

  before(() => {
    getUserData().then((data) => {
      user = data;
    });
  });

  const testCases = [
    {
      email: () => user?.email,
      password: () => user?.password,
      expectedStatus: 200,
      description: 'Positive Login /200',
    },
    {
      email: () => faker.internet.email(),
      password: () => user?.password,
      expectedStatus: 401,
      description: 'Negative Login /401 (Invalid Email)',
    },
    {
      email: () => null,
      password: () => user?.password,
      expectedStatus: 400,
      description: 'Negative Login /400 (Null Email)',
    },
  ];

  testCases.forEach(({ email, password, expectedStatus, description }) => {
    it(description, () => {
      cy.apiLogin(email(), password(), true).then((response) => {
        expect(response.status).to.eq(expectedStatus);
      });
    });
  });
});
