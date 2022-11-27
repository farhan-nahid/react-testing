import { render, screen } from '@testing-library/react';
import { Application } from './Application';

describe('Application', () => {
  test('Render Correctly', () => {
    render(<Application />);
    const heading1 = screen.getByRole('heading', {
      // name: "Job application form",
      level: 1,
    });
    expect(heading1).toBeInTheDocument();

    const heading2 = screen.getByRole('heading', {
      name: 'Section 1',
    });
    expect(heading2).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'First Name',
    });
    expect(nameElement).toBeInTheDocument();

    const placeholderName = screen.getByPlaceholderText('Full name');
    expect(placeholderName).toBeInTheDocument();

    const emailElement = screen.getByRole('textbox', {
      name: 'Email',
    });
    expect(emailElement).toBeInTheDocument();

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    const checkElement = screen.getByRole('checkbox');
    expect(checkElement).toBeInTheDocument();

    const btnElement = screen.getByRole('button');
    expect(btnElement).toBeInTheDocument();
  });
});
