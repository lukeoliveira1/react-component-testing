import { render, fireEvent, screen } from "@testing-library/react";
import Login from "@/app/login/page";

beforeEach(() => {
  render(<Login />);
});

test("login button should be disabled", () => {
  const usernameInput: HTMLInputElement =
    screen.getByPlaceholderText("username");
  const passwordInput: HTMLInputElement =
    screen.getByPlaceholderText("password");

  const loginButton = screen.getByText("Login");

  expect(usernameInput.value).toBe("");
  expect(passwordInput.value).toBe("");
  expect(loginButton).toBeDisabled();
});

test("should update username value", () => {
  const usernameInput: HTMLInputElement =
    screen.getByPlaceholderText("username");

  fireEvent.change(usernameInput, { target: { value: "Teste" } });

  expect(usernameInput.value).toBe("Teste");
});

test("login button should not be disabled when inserting username and password", () => {
  const usernameInput: HTMLInputElement =
    screen.getByPlaceholderText("username");
  const passwordInput: HTMLInputElement =
    screen.getByPlaceholderText("password");

  fireEvent.change(usernameInput, { target: { value: "Teste" } });
  fireEvent.change(passwordInput, { target: { value: "123abc" } });

  const loginButton = screen.getByText("Login");

  expect(usernameInput.value).not.toBeNull();
  expect(passwordInput.value).not.toBeNull();
  expect(loginButton).not.toBeDisabled();
});
