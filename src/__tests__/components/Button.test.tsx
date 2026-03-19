import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/ui/Button';
import { TranslatorProvider } from '@/lib/translations/TranslatorContext';

function renderWithProviders(component: React.ReactElement) {
  return render(
    <TranslatorProvider initialLocale="id">
      {component}
    </TranslatorProvider>
  );
}

describe('Button', () => {
  it('renders button with text', () => {
    renderWithProviders(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    renderWithProviders(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies primary variant styles by default', () => {
    const { container } = renderWithProviders(<Button>Primary</Button>);
    expect(container.firstChild).toHaveClass('bg-blue-600');
  });

  it('applies secondary variant styles', () => {
    const { container } = renderWithProviders(<Button variant="secondary">Secondary</Button>);
    expect(container.firstChild).toHaveClass('bg-slate-700');
  });

  it('applies outline variant styles', () => {
    const { container } = renderWithProviders(<Button variant="outline">Outline</Button>);
    expect(container.firstChild).toHaveClass('border-2 border-blue-600');
  });

  it('applies size styles correctly', () => {
    const { container: sm } = renderWithProviders(<Button size="sm">Small</Button>);
    const { container: md } = renderWithProviders(<Button size="md">Medium</Button>);
    const { container: lg } = renderWithProviders(<Button size="lg">Large</Button>);
    
    expect(sm.firstChild).toHaveClass('px-3 py-1.5 text-sm');
    expect(md.firstChild).toHaveClass('px-4 py-2 text-base');
    expect(lg.firstChild).toHaveClass('px-6 py-3 text-lg');
  });

  it('passes through additional props', () => {
    renderWithProviders(<Button data-testid="custom-button">Test</Button>);
    expect(screen.getByTestId('custom-button')).toBeInTheDocument();
  });
});
