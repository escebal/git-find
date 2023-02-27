import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import FavoriteItem from "./FavoriteItem";

describe("<FavoriteItem />", () => {
  test("Should render the provided name ", () => {
    render(<FavoriteItem name="mockName" />);
    screen.getByText("mockName");
  });
});
