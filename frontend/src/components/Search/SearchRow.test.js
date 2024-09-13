// SearchRow.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchRow from './SearchRow';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

test('calls onSearchChange with input value when Search button is clicked', () => {
  const mockOnSearchChange = jest.fn();
  const { getByPlaceholderText, getByRole } = render(
    <ThemeProvider theme={theme}>
      <SearchRow onSearchChange={mockOnSearchChange} />
    </ThemeProvider>
  );

  // Reset the mock to clear the initial call
  mockOnSearchChange.mockClear();

  const input = getByPlaceholderText('Search');
  const button = getByRole('button', { name: /search/i });

  fireEvent.change(input, { target: { value: 'test query' } });
  fireEvent.click(button);

  expect(mockOnSearchChange).toHaveBeenCalledWith('test query');
});

test('calls onSearchChange with input value when Enter key is pressed', () => {
  const mockOnSearchChange = jest.fn();
  const { getByPlaceholderText } = render(
    <ThemeProvider theme={theme}>
      <SearchRow onSearchChange={mockOnSearchChange} />
    </ThemeProvider>
  );

  const input = getByPlaceholderText('Search');

  fireEvent.change(input, { target: { value: 'another test' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  expect(mockOnSearchChange).toHaveBeenCalledWith('another test');
});

test('disables Search button when input is empty or whitespace', () => {
  const mockOnSearchChange = jest.fn();
  const { getByRole } = render(
    <ThemeProvider theme={theme}>
      <SearchRow onSearchChange={mockOnSearchChange} />
    </ThemeProvider>
  );

  const button = getByRole('button', { name: /search/i });

  expect(button).toBeDisabled();

  // Test with whitespace input
  const input = getByRole('textbox');
  fireEvent.change(input, { target: { value: '   ' } });

  expect(button).toBeDisabled();
});

test('updates input value as user types', () => {
  const mockOnSearchChange = jest.fn();
  const { getByPlaceholderText } = render(
    <ThemeProvider theme={theme}>
      <SearchRow onSearchChange={mockOnSearchChange} />
    </ThemeProvider>
  );

  const input = getByPlaceholderText('Search');

  fireEvent.change(input, { target: { value: 'hello' } });
  expect(input.value).toBe('hello');

  fireEvent.change(input, { target: { value: 'hello world' } });
  expect(input.value).toBe('hello world');
});

test('does not call onSearchChange on input change', () => {
  const mockOnSearchChange = jest.fn();
  const { getByPlaceholderText } = render(
    <ThemeProvider theme={theme}>
      <SearchRow onSearchChange={mockOnSearchChange} />
    </ThemeProvider>
  );

  const input = getByPlaceholderText('Search');

  fireEvent.change(input, { target: { value: 'do not call' } });

  expect(mockOnSearchChange).not.toHaveBeenCalled();
});