import { render, RenderResult } from "@testing-library/react";
import '../styles/globals.css'

const Providers = ({ children }) => {
  return children;
};

const customRender = (ui: React.ReactElement, options = {}): RenderResult =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// override render method
export { customRender as render };
