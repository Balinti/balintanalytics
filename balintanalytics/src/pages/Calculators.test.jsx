import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculators from './Calculators';

describe('Calculators page', () => {
  test('calculates ROAS correctly', () => {
    render(<Calculators />);
    
    // Fill in the ROAS calculator inputs
    const revenueInput = screen.getByLabelText('Revenue Generated ($)');
    const spendInput = screen.getByLabelText('Ad Spend ($)');
    fireEvent.change(revenueInput, { target: { value: '10000' } });
    fireEvent.change(spendInput, { target: { value: '2000' } });

    // Click the calculate button
    const calculateButton = screen.getByRole('button', { name: 'Calculate ROAS' });
    fireEvent.click(calculateButton);

    // Check the result
    const result = screen.getByText(/Your ROAS: 5.00x/i);
    expect(result).toBeInTheDocument();
  });

  test('calculates Sample Size correctly', async () => {
    render(<Calculators />);
    const user = userEvent.setup();

    // Switch to the Sample Size calculator
    const sampleSizeButton = screen.getByRole('button', { name: 'Sample Size Calculator' });
    await user.click(sampleSizeButton);

    // Fill in the Sample Size calculator inputs
    const populationInput = screen.getByLabelText('Population Size');
    const confidenceSelect = screen.getByLabelText('Confidence Level (%)');
    const marginInput = screen.getByLabelText('Margin of Error (%)');

    await user.clear(populationInput);
    await user.type(populationInput, '100000');
    await user.selectOptions(confidenceSelect, '95');
    await user.clear(marginInput);
    await user.type(marginInput, '5');


    // Click the calculate button
    const calculateButton = screen.getByRole('button', { name: 'Calculate Sample Size' });
    await user.click(calculateButton);

    // Check the result
    const result = screen.getByText(/Recommended Sample Size: 385/i);
    expect(result).toBeInTheDocument();
  });
});
