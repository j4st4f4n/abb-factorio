import { render, screen, userEvent } from "./test/utils/test-utils";
import { App } from "./App";
import { posts } from "./test/mocks/handlers";

it("Should return posts when clicking fetch button", async () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: "MSW Testing Library Example",
      level: 1,
    })
  ).toBeDefined();

  await userEvent.click(screen.getByRole("button", { name: "Fetch Posts" }));

  for (const post of posts) {
    expect(
      await screen.findByRole("heading", { name: post.title, level: 2 })
    ).toBeDefined();
    expect(screen.getByText(post.body)).toBeDefined();
  }
});
