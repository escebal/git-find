import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Repositories from "./Repositories";

const mockData = [
  {
    name: "mockName1",
    description: "mockDescription1",
    stargazers_count: 1,
    html_url: "",
    id: 1,
  },
  {
    name: "mockName2",
    description: "mockDescription2",
    stargazers_count: 2,
    html_url: "",
    id: 2,
  },
  {
    name: "mockName3",
    description: "mockDescription3",
    stargazers_count: 3,
    html_url: "",
    id: 3,
  },
  {
    name: "mockName4",
    description: "mockDescription4",
    stargazers_count: 4,
    html_url: "",
    id: 4,
  },
];

describe("<Repositories />", () => {
  const setup = () => {
    const mockHandlerSetCounter = jest.fn();

    render(
      <Repositories
        counter={0}
        items={mockData}
        setCounter={mockHandlerSetCounter}
      />
    );

    const backButton = screen.getByText("Anterior");
    const nextButton = screen.getByText("Siguiente");

    return {
      backButton,
      nextButton,
      mockHandlerSetCounter,
    };
  };

  test("'Anterior' button should be disabled in the first page", () => {
    const { backButton, mockHandlerSetCounter } = setup();
    fireEvent.click(backButton);
    expect(mockHandlerSetCounter).toHaveBeenCalledTimes(0);
  });

  test("Should get event when 'Siguiente' is pressed ", () => {
    const { nextButton, mockHandlerSetCounter } = setup();
    fireEvent.click(nextButton);
    expect(mockHandlerSetCounter).toHaveBeenCalledTimes(1);
  });

  test("Should render the 4 items ", () => {
    setup();
    screen.getByText("mockName1");
    screen.getByText("mockName2");
    screen.getByText("mockName3");
    screen.getByText("mockName4");
  });
});
