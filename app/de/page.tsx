import type { Metadata } from 'next';
import { PortfolioPage } from '@/components/portfolio-page';

export const metadata: Metadata = {
  title: 'Kashish Mendiratta — ML- / AI-Ingenieurin',
  description: 'Angewandte ML-Ingenieurin für evaluierte, deploybare AI-Systeme, wissenschaftliche Daten und reale Anwendungen.',
};

export default function GermanHome() {
  return <PortfolioPage locale="de" />;
}
