import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ProfessionalSection from '@/components/ProfessionalSection';
import ChallengeSection from '@/components/ChallengeSection';
import { Toaster } from "@/components/ui/sonner";
import CarreirasPage from '@/pages/CarreirasPage';
import ContatoPage from '@/pages/ContatoPage';

function HomePage() {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 antialiased overflow-x-hidden">
            <Header />
            <main>
                <HeroSection />
                <FeaturesSection />
                <ChallengeSection />
                <HowItWorksSection />
                <ProfessionalSection />
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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
