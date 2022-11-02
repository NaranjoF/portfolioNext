import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "../components/Contact";
import { renderWithProviders } from "../utils/test-utils";
import { createMockRouter } from "../utils/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("Contact", () => {
  const user = userEvent.setup();

  test("Should send the form and reset it", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ test: 200 }),
      })
    ) as jest.Mock;

    const router = createMockRouter({
      pathname: "en",
      locale: "en",
    });

    const { container } = renderWithProviders(
      <RouterContext.Provider value={router}>
        <Contact />
      </RouterContext.Provider>
    );

    await user.type(screen.getByTestId("input-name"), "Jhon");
    await user.type(screen.getByTestId("input-email"), "example@gmail.com");
    await user.type(
      screen.getByTestId("textarea-form"),
      "12345678910111213141516171819250"
    );
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() =>
      expect(screen.getByTestId("input-name")).toHaveValue("")
    );

    await waitFor(() =>
      expect(screen.getByTestId("input-email")).toHaveValue("")
    );

    await waitFor(() =>
      expect(screen.getByTestId("textarea-form")).toHaveValue("")
    );
  });

  test("Should return the error", async () => {
    global.fetch = jest.fn(() =>
      Promise.reject({
        json: "No funciono",
      })
    ) as jest.Mock;

    const router = createMockRouter({
      pathname: "en",
      locale: "en",
    });

    const { container } = renderWithProviders(
      <RouterContext.Provider value={router}>
        <Contact />
      </RouterContext.Provider>
    );

    await user.type(screen.getByTestId("input-name"), "Jhon");
    await user.type(screen.getByTestId("input-email"), "example@gmail.com");
    await user.type(
      screen.getByTestId("textarea-form"),
      "12345678910111213141516171819250"
    );
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() =>
      expect(screen.getByTestId("input-name")).toHaveValue("")
    );

    await waitFor(() =>
      expect(screen.getByTestId("input-email")).toHaveValue("")
    );

    await waitFor(() =>
      expect(screen.getByTestId("textarea-form")).toHaveValue("")
    );
  });
});
