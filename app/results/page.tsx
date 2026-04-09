import type { Metadata } from 'next';
import ResultsHeader from '@/components/sections/results/ResultsHeader';
import ToppersGrid   from '@/components/sections/results/ToppersGrid';
import YearlyResults from '@/components/sections/results/YearlyResults';
import { Footer, Header } from '@/components/sections';

export const metadata: Metadata = {
  title:       'Results 2026 | Bright Minds — JEE, NEET, CUET & Board Selections',
  description: 'See Bright Minds 2026 results: 250+ selections in JEE, NEET, CUET, and board exams. Verified toppers with scores, colleges, and batch details.',
  openGraph: { title: 'Bright Minds Results 2026', description: '250+ selections across JEE, NEET, CUET, and boards.', url: 'https://brightminds.edu/results' },
  alternates: { canonical: 'https://brightminds.edu/results' },
};

export default function ResultsPage() {
  return (
    <>
    <Header/>
    <main id="main-content" tabIndex={-1}>
      <ResultsHeader />
      <ToppersGrid />
      <YearlyResults />
    </main>
    <Footer/>
    </>
  );
}
