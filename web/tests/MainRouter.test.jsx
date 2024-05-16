import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { expect } from "chai";
import MainRouter from "../src/MainRouter";

describe("MainRouter", () => {
  test("рендерит все маршруты", () => {
    render(
      <Router>
        <MainRouter />
      </Router>,
    );

    const links = screen.getAllByText(/главная/i);
    const homeLink = links.find((link) => link.tagName === "A");
    expect(homeLink).to.be.ok;

    expect(screen.getByText(/список задач/i)).to.be.ok;
    expect(screen.getByText(/о нас/i)).to.be.ok;
    expect(screen.getByText(/контакты/i)).to.be.ok;
    expect(screen.getByText(/техподдержка/i)).to.be.ok;
    expect(screen.getByText(/дин.список/i)).to.be.ok;
    expect(screen.getByText(/войти/i)).to.be.ok;
  });
});
