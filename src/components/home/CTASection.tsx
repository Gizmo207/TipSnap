
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Gift, ScanLine } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-tipsnap-purple to-tipsnap-darkPurple text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Gift className="h-4 w-4 mr-2" />
            <span>Join 10+ million TipSnap users today</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Split Bills, Win Big, Earn Monthly
          </h2>
          
          <p className="text-xl mb-8 text-white/80">
            TipSnap is more than just a bill-splitting app. It's a community that rewards generosity and makes splitting the check more fun than ever before.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              variant="default" 
              className="bg-white text-tipsnap-darkPurple hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 shadow-lg" 
              asChild
            >
              <Link to="/signup" className="px-8">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-tipsnap-purple/30 text-white border-white hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-105" 
              asChild
            >
              <Link to="/split-bill" className="px-6 flex items-center">
                <ScanLine className="mr-2 h-5 w-5 animate-pulse-gentle" />
                Scan Receipt
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 transition-all duration-300 hover:scale-105" 
              asChild
            >
              <Link to="/split-bill" className="px-6">
                Try a Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
