import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ProfessionalSection from '@/components/ProfessionalSection';
import ChallengeSection from '@/components/ChallengeSection';
import { Toaster } from "@/components/ui/sonner"

function App() {
    useEffect(() => {
        // Add smooth scroll behavior to html tag
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

export default App;
