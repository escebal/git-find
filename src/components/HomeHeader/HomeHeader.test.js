import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import HomeHeader from "./HomeHeader";

describe("<HomeHeader />", () => {
  const setup = () => {
    const mockHandlerSearchRepositories = jest.fn();
    const mockHandlerSetSearchValue = jest.fn();

    render(
      <HomeHeader
        searchRepositories={mockHandlerSearchRepositories}
        setSearchValue={mockHandlerSetSearchValue}
      />
    );
    const searchButton = screen.getByTestId("search-button");
    const input = screen.getByPlaceholderText("Ingrese la palabra a buscar");

    return {
      searchButton,
      mockHandlerSearchRepositories,
      mockHandlerSetSearchValue,
      input,
    };
  };

  test("Should get event when press the search button button", () => {
    const { searchButton, mockHandlerSearchRepositories } = setup();
    fireEvent.click(searchButton);
    expect(mockHandlerSearchRepositories).toHaveBeenCalledTimes(1);
  });

  test("Should get event when the user types in the search repositories input", () => {
    const { input, mockHandlerSetSearchValue } = setup();
    fireEvent.change(input, { target: { value: "1" } });
    expect(mockHandlerSetSearchValue).toHaveBeenCalledTimes(1);
  });
});
