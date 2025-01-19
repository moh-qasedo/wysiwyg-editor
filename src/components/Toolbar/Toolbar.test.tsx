import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Toolbar from ".";
import "@testing-library/jest-dom";
import { DraftEditorCommand } from "draft-js";

describe("Toolbar with handleToolbarAction", () => {
  const mockEditorOnChange = jest.fn();
  const mockEditorState = {};
  const handleToolbarAction = jest.fn((command: DraftEditorCommand) => {
    const newState = {};
    mockEditorOnChange(newState);
  });

  beforeEach(() => {
    mockEditorOnChange.mockClear();
    handleToolbarAction.mockClear();
  });

  it("should call handleToolbarAction with 'bold' when bold button is clicked", () => {
    render(<Toolbar onPressAction={handleToolbarAction} />);
    const boldButton = screen.getByTestId("bold-btn");
    fireEvent.click(boldButton);
    expect(handleToolbarAction).toHaveBeenCalledTimes(1);
    expect(handleToolbarAction).toHaveBeenCalledWith("bold");
  });

  it("should call handleToolbarAction with 'italic' when italic button is clicked", () => {
    render(<Toolbar onPressAction={handleToolbarAction} />);
    const italicButton = screen.getByTestId("italic-btn");
    fireEvent.click(italicButton);
    expect(handleToolbarAction).toHaveBeenCalledTimes(1);
    expect(handleToolbarAction).toHaveBeenCalledWith("italic");
  });

  it("should call handleToolbarAction with 'underline' when underline button is clicked", () => {
    render(<Toolbar onPressAction={handleToolbarAction} />);
    const underlineButton = screen.getByTestId("underline-btn");
    fireEvent.click(underlineButton);
    expect(handleToolbarAction).toHaveBeenCalledTimes(1);
    expect(handleToolbarAction).toHaveBeenCalledWith("underline");
  });

  it("should call editorOnChange when handleToolbarAction is triggered", () => {
    render(<Toolbar onPressAction={handleToolbarAction} />);
    const boldButton = screen.getByTestId("bold-btn");
    fireEvent.click(boldButton);
    expect(mockEditorOnChange).toHaveBeenCalledTimes(1);
    expect(mockEditorOnChange).toHaveBeenCalledWith(mockEditorState);
  });
});
