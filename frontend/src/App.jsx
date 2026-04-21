import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ChallengeSection from '@/components/ChallengeSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

import CarreirasPage from '@/pages/CarreirasPage';
import ContatoPage from '@/pages/ContatoPage';
import PrecosPage from '@/pages/PrecosPage';
import CheckoutPage from '@/pages/CheckoutPage';

function HomePage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden">
      <Header />

      <main>
        <HeroSection />
        <ChallengeSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CTASection />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/carreiras" element={<CarreirasPage />} />
                <Route path="/contato" element={<ContatoPage />} />
                <Route path="/precos" element={<PrecosPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
