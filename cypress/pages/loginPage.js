import BasePage from "./basePage";

class LoginPage extends BasePage {
  emailInput = "input[name='email']";
  passwordInput = "input[name='password']";
  loginButton = "button[type='submit']";
  errorText = "div.MuiStack-root.css-u4p24i";
  dashboardPage = "span:contains('Welcome to WiseAdmit')";

  openPage() {
    cy.visit("/");
  }

  enterEmail(email) {
    this.type(this.emailInput, email);
    this.click(this.loginButton);
  }

  enterPassword(password) {
    this.type(this.passwordInput, password);
    this.click(this.loginButton);
  }

  assertPasswordVisible() {
    this.isVisible(this.passwordInput);
  }

  assertDashboardVisible() {
    this.isVisible(this.dashboardPage);
  }

  assertErrorContains(text) {
    this.shouldContain(this.errorText, text);
  }

  assertPasswordNotVisible() {
    this.shouldNotExist(this.passwordInput);
  }
}

export default LoginPage;

