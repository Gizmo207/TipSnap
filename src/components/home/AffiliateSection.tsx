
import React from 'react';
import { ArrowRight, DollarSign, Gift, Users, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AffiliateSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-tipsnap-purple/5 to-tipsnap-purple/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-tipsnap-purple/20 text-tipsnap-darkPurple mb-6">
              <DollarSign className="h-4 w-4 mr-1" />
              <span>RECURRING REVENUE</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Earn Money Every Month With Our Affiliate Program
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Get paid monthly for every friend who joins TipSnap Pro or Business. Our affiliate program pays you for the entire time they remain subscribed.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <DollarSign className="h-8 w-8 text-tipsnap-purple mb-3" />
                <h3 className="text-xl font-semibold mb-2">Recurring Revenue</h3>
                <p className="text-gray-600">Earn $1-2 per month for every referral, for as long as they subscribe.</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <Users className="h-8 w-8 text-tipsnap-purple mb-3" />
                <h3 className="text-xl font-semibold mb-2">Unlimited Referrals</h3>
                <p className="text-gray-600">No cap on how many friends you can refer or how much you can earn.</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <Gift className="h-8 w-8 text-tipsnap-purple mb-3" />
                <h3 className="text-xl font-semibold mb-2">Special Bonuses</h3>
                <p className="text-gray-600">Earn additional rewards when you hit referral milestones.</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <BarChart3 className="h-8 w-8 text-tipsnap-purple mb-3" />
                <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
                <p className="text-gray-600">Monitor your earnings and referrals in your personal dashboard.</p>
              </div>
            </div>
            
            <Button size="lg" asChild>
              <Link to="/affiliate">
                Join Affiliate Program <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="lg:pl-12">
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden p-8 border border-gray-100">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-tipsnap-purple to-tipsnap-darkPurple"></div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Affiliate Earnings Calculator</h3>
                <p className="text-gray-600">See how much you could earn with TipSnap</p>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="font-medium">How many friends do you think will join?</label>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50">
                      <div className="font-bold">5</div>
                      <div className="text-sm text-gray-500">Friends</div>
                    </div>
                    <div className="border rounded-lg p-3 text-center bg-tipsnap-purple/10 border-tipsnap-purple cursor-pointer">
                      <div className="font-bold">10</div>
                      <div className="text-sm text-gray-500">Friends</div>
                    </div>
                    <div className="border rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50">
                      <div className="font-bold">25+</div>
                      <div className="text-sm text-gray-500">Friends</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="font-medium">Which plan will they likely choose?</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-lg p-3 text-center cursor-pointer bg-tipsnap-purple/10 border-tipsnap-purple">
                      <div className="font-bold">Pro</div>
                      <div className="text-sm text-gray-500">$1/month per referral</div>
                    </div>
                    <div className="border rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50">
                      <div className="font-bold">Business</div>
                      <div className="text-sm text-gray-500">$2/month per referral</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-medium mb-2">Your Estimated Monthly Earnings</h4>
                  <div className="text-4xl font-bold text-tipsnap-darkPurple mb-2">$10/month</div>
                  <div className="text-xl font-medium text-gray-600">$120/year</div>
                </div>
                
                <div className="text-center text-gray-600 text-sm">
                  This is just an estimate. Your actual earnings depend on how many friends subscribe and for how long they stay subscribed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;
