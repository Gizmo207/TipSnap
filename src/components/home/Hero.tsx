
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Receipt, DollarSign, Users, Smartphone, ScanLine } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-tipsnap-purple/10 text-tipsnap-darkPurple">
              <span className="animate-pulse-gentle">New</span>
              <span className="ml-2">Give back with every split</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-tipsnap-purple to-tipsnap-darkPurple text-transparent bg-clip-text animate-fade-in">
              Split Bills, <br />
              Win Millions
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Instantly scan receipts, split bills, and win massive cash giveaways just for using TipSnap with your friends.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="transition-all duration-300 hover:scale-105 shadow-md" asChild>
                <Link to="/signup" className="px-8">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-tipsnap-purple/20 hover:bg-tipsnap-purple/30 text-tipsnap-darkPurple border border-tipsnap-purple/40 transition-all duration-300 hover:scale-105 shadow-md" 
                asChild
              >
                <Link to="/split-bill" className="px-6 flex items-center">
                  <ScanLine className="mr-2 h-5 w-5 animate-pulse-gentle" />
                  Scan Receipt
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="transition-all duration-300 hover:scale-105" asChild>
                <Link to="/split-bill" className="px-6">
                  Try Demo
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center transition-all duration-300 hover:scale-110">
                <div className="rounded-full bg-tipsnap-purple/10 p-2">
                  <Users className="h-4 w-4 text-tipsnap-darkPurple" />
                </div>
                <span className="ml-2 text-sm font-medium">10M+ Users</span>
              </div>
              <div className="flex items-center transition-all duration-300 hover:scale-110">
                <div className="rounded-full bg-tipsnap-purple/10 p-2">
                  <DollarSign className="h-4 w-4 text-tipsnap-darkPurple" />
                </div>
                <span className="ml-2 text-sm font-medium">$16M Given Away</span>
              </div>
              <div className="flex items-center transition-all duration-300 hover:scale-110">
                <div className="rounded-full bg-tipsnap-purple/10 p-2">
                  <Receipt className="h-4 w-4 text-tipsnap-darkPurple" />
                </div>
                <span className="ml-2 text-sm font-medium">100M+ Bills Split</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-tipsnap-purple/20 to-tipsnap-darkPurple/20 rounded-3xl transform rotate-3 animate-float"></div>
            <div className="relative bg-white shadow-xl rounded-3xl border overflow-hidden p-4 transform -rotate-3 transition-all duration-500 hover:rotate-0 hover:shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-tipsnap-purple to-tipsnap-darkPurple"></div>
              <div className="px-4 py-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-tipsnap-purple to-tipsnap-darkPurple flex items-center justify-center">
                      <Receipt className="h-5 w-5 text-white" />
                    </div>
                    <span className="ml-2 text-lg font-bold">Receipt Scanner</span>
                  </div>
                  <Smartphone className="h-6 w-6 text-gray-400" />
                </div>
                
                {/* Mock Receipt */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                  <div className="text-center mb-4">
                    <h4 className="font-bold text-lg">DOWNTOWN CAFE</h4>
                    <p className="text-xs text-gray-500">123 Main St, Anytown, USA</p>
                    <p className="text-xs text-gray-500">April 16, 2025 - 7:30 PM</p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Pasta Primavera</span>
                      <span>$18.99</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Chicken Sandwich</span>
                      <span>$14.95</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>House Salad</span>
                      <span>$9.50</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Lemonade (2)</span>
                      <span>$8.00</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-300 pt-2 space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>$51.44</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax (8.5%)</span>
                      <span>$4.37</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>$55.81</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-tipsnap-purple/10 p-3 rounded-lg">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-tipsnap-darkPurple" />
                      <span className="ml-2 font-medium">Split 3 ways</span>
                    </div>
                    <span className="font-bold">$18.60 each</span>
                  </div>
                  
                  <Button className="w-full">Share Payment Links</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile mockup for small screens */}
      <div className="mt-12 lg:hidden relative mx-auto max-w-xs animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <div className="bg-white shadow-xl rounded-3xl border overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-tipsnap-purple to-tipsnap-darkPurple"></div>
          <div className="px-4 py-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-tipsnap-purple to-tipsnap-darkPurple flex items-center justify-center">
                  <Receipt className="h-4 w-4 text-white" />
                </div>
                <span className="ml-2 font-bold">Receipt</span>
              </div>
              <Smartphone className="h-5 w-5 text-gray-400" />
            </div>
            
            {/* Simplified Receipt */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4 border border-gray-200 text-sm">
              <div className="space-y-1 mb-3">
                <div className="flex justify-between">
                  <span>Food & Drinks</span>
                  <span>$51.44</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$4.37</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>$55.81</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center bg-tipsnap-purple/10 p-2 rounded-lg mb-4">
              <div className="flex items-center">
                <Users className="h-4 w-4 text-tipsnap-darkPurple" />
                <span className="ml-2 text-sm font-medium">Split 3 ways</span>
              </div>
              <span className="font-bold text-sm">$18.60 each</span>
            </div>
            
            <Button size="sm" className="w-full text-sm">Share Payment Links</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
