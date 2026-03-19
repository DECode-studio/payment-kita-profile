import { render, screen } from '@testing-library/react';
import MarketSizeSection from '@/components/sections/MarketSizeSection';
import { TranslatorProvider } from '@/lib/translations/TranslatorContext';

function renderWithProviders(component: React.ReactElement) {
  return render(
    <TranslatorProvider initialLocale="id">
      {component}
    </TranslatorProvider>
  );
}

describe('MarketSizeSection (TAM, SAM, SOM)', () => {
  it('displays the section heading', () => {
    renderWithProviders(<MarketSizeSection />);
    expect(screen.getByRole('heading', { name: /Potensi Inflow IDR Terukur/i })).toBeInTheDocument();
  });

  it('displays TAM, SAM, and SOM terms correctly', () => {
    renderWithProviders(<MarketSizeSection />);
    expect(screen.getByText(/Total Addressable Market/i)).toBeInTheDocument();
    expect(screen.getByText(/Serviceable Available Market/i)).toBeInTheDocument();
    expect(screen.getByText(/Serviceable Obtainable Market/i)).toBeInTheDocument();
  });

  it('displays market values', () => {
    renderWithProviders(<MarketSizeSection />);
    expect(screen.getByText('$190 Triliun')).toBeInTheDocument();
    expect(screen.getByText('$20 Miliar')).toBeInTheDocument();
    expect(screen.getByText('$500 Juta')).toBeInTheDocument();
  });

  it('displays market descriptions', () => {
    renderWithProviders(<MarketSizeSection />);
    expect(screen.getByText(/Total volume pembayaran lintas batas global/i)).toBeInTheDocument();
    expect(screen.getByText(/Inflow IDR dari remitansi/i)).toBeInTheDocument();
    expect(screen.getByText(/Target transaksi via EVM & SVM/i)).toBeInTheDocument();
  });
});
