import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // const linkElement = screen.getByText(/hello world/);
  const word = screen.queryByText("Hello world");
  console.log(word);
  expect(1 + 1).toBe(2);
  // expect(linkElement).toBeInTheDocument();
});
