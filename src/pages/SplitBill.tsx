
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BillSplitter from '@/components/demo/BillSplitter';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Gift } from 'lucide-react';

const SplitBill = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Split Your Bill in Seconds
              </h1>
              <p className="text-xl text-gray-600">
                Try our interactive bill splitter demo. In the full app, you can scan receipts and send payment links instantly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <BillSplitter />
              </div>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Camera className="h-5 w-5 text-tipsnap-purple mr-2" />
                    <h3 className="text-xl font-semibold">Receipt Scanner</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    In the full TipSnap app, you can instantly scan receipts with our AI-powered OCR technology. No more manual entry.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                    alt="Receipt Scanner" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Gift className="h-5 w-5 text-tipsnap-purple mr-2" />
                    <h3 className="text-xl font-semibold">Giveaway Entry</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Every time you use TipSnap to split a bill, you're automatically entered into our massive cash giveaways worth up to $10M.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/signup">Create Free Account</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SplitBill;
