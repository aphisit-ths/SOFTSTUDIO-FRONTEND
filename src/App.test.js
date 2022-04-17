import { render, screen } from "@testing-library/react";
import App from "./App";

for (let i = 0; i < 5; i++) {
    test("renders learn react link", () => {
        render( < App / > );
        const linkElement = screen.getByText(/Country/i);
        expect(linkElement).toBeInTheDocument();
    });
}