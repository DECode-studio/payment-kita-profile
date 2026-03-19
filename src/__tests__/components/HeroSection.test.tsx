import { render, screen } from '@testing-library/react';
import HeroSection from '@/components/sections/HeroSection';
import { TranslatorProvider } from '@/lib/translations/TranslatorContext';

function renderWithProviders(component: React.ReactElement) {
  return render(
    <TranslatorProvider initialLocale="id">
      {component}
    </TranslatorProvider>
  );
}

describe('HeroSection', () => {
  it('renders the main heading', () => {
    renderWithProviders(<HeroSection />);
    const heading = screen.getByRole('heading', { name: /Arus Kas Global, Berlabuh di Lokal/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the subheadline', () => {
    renderWithProviders(<HeroSection />);
    expect(screen.getByText(/Terima pembayaran internasional menggunakan infrastruktur Web3/i)).toBeInTheDocument();
  });

  it('renders call to action buttons', () => {
    renderWithProviders(<HeroSection />);
    expect(screen.getByRole('button', { name: /Mulai Sekarang/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Pelajari Lebih Lanjut/i })).toBeInTheDocument();
  });

  it('renders trust indicators', () => {
    renderWithProviders(<HeroSection />);
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
    expect(screen.getByText('Polygon')).toBeInTheDocument();
    expect(screen.getByText('Solana')).toBeInTheDocument();
    expect(screen.getByText('Arbitrum')).toBeInTheDocument();
  });
});
