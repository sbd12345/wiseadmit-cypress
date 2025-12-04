import LoginPage from "../pages/loginPage";


const login = new LoginPage();

describe("WiseAdmit Sign-In Automation", () => {
  let data;

  before(() => {
    cy.fixture("testdata").then((t) => {
      data = t;
    });
  });

  it("Positive Login - Valid Credentials", () => {
    login.openPage();
    login.enterEmail(data.valid_email);
    login.assertPasswordVisible();
    login.enterPassword(data.valid_password);
    login.assertDashboardVisible();
  });

  it("Negative Login - Invalid Email", () => {
    login.openPage();
    login.enterEmail(data.invalid_email);
    login.assertErrorContains("Failed to get student");
    login.assertPasswordNotVisible();
  });

  it("Negative Login - Invalid Password", () => {
    login.openPage();
    login.enterEmail(data.valid_email);
    login.assertPasswordVisible();
    login.enterPassword(data.invalid_password);
    login.assertErrorContains("Invalid Credentials");
  });
});


