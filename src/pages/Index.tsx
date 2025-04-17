
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import GiveawaySection from '@/components/home/GiveawaySection';
import PricingSection from '@/components/home/PricingSection';
import AffiliateSection from '@/components/home/AffiliateSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <GiveawaySection />
        <PricingSection />
        <AffiliateSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
