import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../components/Navbar";
import { renderWithProviders } from "../utils/test-utils";
import { createMockRouter } from "../utils/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("Navbar", () => {
  const user = userEvent.setup();

  test("Should change language", async () => {
    const router = createMockRouter({
      pathname: "en",
      asPath: "/netflix",
      locale: "en",
    });

    const { container } = renderWithProviders(
      <RouterContext.Provider value={router}>
        <Navbar />
      </RouterContext.Provider>
    );

    await user.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: /es/i })
    );

    expect(router.push).toHaveBeenCalledWith("en", "en", { locale: "es" });
  });

  test("the left menu should appear", async () => {
    const router = createMockRouter({
      pathname: "en",
      asPath: "/netflix",
      locale: "en",
    });

    const { container } = renderWithProviders(
      <RouterContext.Provider value={router}>
        <Navbar />
      </RouterContext.Provider>
    );

    await user.click(screen.getByTestId("outline-menu"));

    expect(screen.getByTestId("left-menu-container")).toHaveClass(
      "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
    );

    expect(screen.getByTestId("left-menu")).toHaveClass(
      "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 xsmax:overflow-scroll xxsmax:px-5"
    );
  });

  test("the left menu should disappear", async () => {
    const router = createMockRouter({
      pathname: "en",
      asPath: "/netflix",
      locale: "en",
    });

    const { container } = renderWithProviders(
      <RouterContext.Provider value={router}>
        <Navbar />
      </RouterContext.Provider>
    );

    await user.click(screen.getByTestId("outline-menu"));
    await user.click(screen.getByTestId("left-menu-close"));

    expect(screen.getByTestId("left-menu-container")).not.toHaveClass();

    expect(screen.getByTestId("left-menu")).toHaveClass(
      "fixed left-[-200%] top-0 p-10 ease-in duration-500"
    );
  });

  test("should hide the menu on the left, after clicking a shortcut", async () => {
    const router = createMockRouter({
      pathname: "en",
      asPath: "/netflix",
      locale: "en",
    });

    const { container } = renderWithProviders(
      <RouterContext.Provider value={router}>
        <Navbar />
      </RouterContext.Provider>
    );

    await user.click(screen.getByTestId("outline-menu"));
    await user.click(screen.getByTestId("home-left-menu"));

    expect(screen.getByTestId("left-menu-container")).not.toHaveClass();

    expect(screen.getByTestId("left-menu")).toHaveClass(
      "fixed left-[-200%] top-0 p-10 ease-in duration-500"
    );

    await user.click(screen.getByTestId("outline-menu"));
    await user.click(screen.getByTestId("about-left-menu"));

    expect(screen.getByTestId("left-menu-container")).not.toHaveClass();

    expect(screen.getByTestId("left-menu")).toHaveClass(
      "fixed left-[-200%] top-0 p-10 ease-in duration-500"
    );

    await user.click(screen.getByTestId("outline-menu"));
    await user.click(screen.getByTestId("skills-left-menu"));

    expect(screen.getByTestId("left-menu-container")).not.toHaveClass();

    expect(screen.getByTestId("left-menu")).toHaveClass(
      "fixed left-[-200%] top-0 p-10 ease-in duration-500"
    );

    await user.click(screen.getByTestId("outline-menu"));
    await user.click(screen.getByTestId("projects-left-menu"));

    expect(screen.getByTestId("left-menu-container")).not.toHaveClass();

    expect(screen.getByTestId("left-menu")).toHaveClass(
      "fixed left-[-200%] top-0 p-10 ease-in duration-500"
    );

    await user.click(screen.getByTestId("outline-menu"));
    await user.click(screen.getByTestId("contact-left-menu"));

    expect(screen.getByTestId("left-menu-container")).not.toHaveClass();

    expect(screen.getByTestId("left-menu")).toHaveClass(
      "fixed left-[-200%] top-0 p-10 ease-in duration-500"
    );

    await user.click(screen.getByTestId("outline-menu"));
    await user.click(screen.getByTestId("contact-icon-left-menu"));

    expect(screen.getByTestId("left-menu-container")).not.toHaveClass();

    expect(screen.getByTestId("left-menu")).toHaveClass(
      "fixed left-[-200%] top-0 p-10 ease-in duration-500"
    );
  });

  test("should change the color of the letters and the background of the navbar", () => {
    const router = createMockRouter({
      pathname: "en",
      asPath: "/netflix",
      locale: "en",
    });

    const { container } = renderWithProviders(
      <RouterContext.Provider value={router}>
        <Navbar />
      </RouterContext.Provider>
    );

    expect(screen.getByTestId("link-navbar")).toHaveStyle({ color: "#ecf0f3" });
    expect(screen.getByTestId("navbar")).toHaveStyle({
      backgroundColor: "transparent",
    });
  });

  test("the shadow of the navbar should appear", () => {
    const router = createMockRouter({
      pathname: "en",
      asPath: "/netflix",
      locale: "en",
    });

    const { container } = renderWithProviders(
      <RouterContext.Provider value={router}>
        <Navbar />
      </RouterContext.Provider>
    );

    fireEvent.scroll(window, { target: { scrollY: 1 } });

    expect(screen.getByTestId("navbar")).toHaveClass("shadow-xl");

    fireEvent.scroll(window, { target: { scrollY: 0 } });

    expect(screen.getByTestId("navbar")).not.toHaveClass("shadow-xl");
  });

  test("should change the value of the selectors and their texts to es", async () => {
    const router = createMockRouter({
      pathname: "en",
      asPath: "/netflix",
      locale: "es",
    });

    const { container } = renderWithProviders(
      <RouterContext.Provider value={router}>
        <Navbar />
      </RouterContext.Provider>
    );

    expect(screen.getByTestId("first-selector")).toHaveValue("es");
    expect(screen.getByTestId("second-selector")).toHaveValue("en");
    expect(screen.getByTestId("first-selector")).toHaveTextContent(/es/i);
    expect(screen.getByTestId("second-selector")).toHaveTextContent(/en/i);

    // expect(screen.getByTestId("first-selector")).toHaveValue("es");
    // expect(screen.getByTestId("second-selector")).toHaveValue("en");
    // screen.debug(screen.getByRole("option", { name: /es/i }));
  });
});
