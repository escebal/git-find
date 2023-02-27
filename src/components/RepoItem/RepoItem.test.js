import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import RepoItem from "./RepoItem";

const mockData = {
  name: "mockName1",
  description: "mockDescription1",
  stargazers_count: 1000,
  html_url: "",
  id: 1,
};

describe("<RepoItem />", () => {
  test("Should render the data ", () => {
    render(<RepoItem data={mockData} />);

    screen.getByText("mockName1");
    screen.getByText("mockDescription1");
    screen.getByText("Estrellas: 1000");
  });
});
