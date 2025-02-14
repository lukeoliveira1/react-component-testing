import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./counter";

// beforeEach(() => {});

test("should render the component", () => {
  render(<Counter initialCount={0} />);

  // react-testing-library
  const incrementButton = screen.getByText("Increment");
  //   quando realmente não conseguir pegar o elemento usa pelo id
  //   const incrementButton = screen.getByTestId("Increment");

  // jest
  //   expect(incrementButton).toBeInTheDocument();
  expect(incrementButton.textContent).toBe("Increment");
});

test("clicking the increment button should add +1", () => {
  render(<Counter initialCount={0} />);

  const incrementButton = screen.getByText("Increment");

  fireEvent.click(incrementButton);

  const countValue = screen.getByRole("paragraph");

  expect(countValue.textContent).toBe("1");
});
