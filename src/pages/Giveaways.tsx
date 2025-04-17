
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Gift, Calendar, Users, Trophy, DollarSign, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Giveaways = () => {
  const upcomingGiveaways = [
    {
      name: "Monthly Million",
      date: "May 31, 2025",
      amount: "$1,000,000",
      description: "5 winners will each receive $200,000",
      eligibility: "All active TipSnap users",
      entries: "2,453,789",
      icon: Gift,
    },
    {
      name: "Bi-Annual Jackpot",
      date: "June 15, 2025",
      amount: "$5,000,000",
      description: "2 winners will each receive $2,500,000",
      eligibility: "All active TipSnap users with at least 3 splits",
      entries: "1,891,234",
      icon: Trophy,
    }
  ];

  const pastWinners = [
    {
      name: "Jessica T.",
      location: "Chicago, IL",
      amount: "$200,000",
      date: "Apr 30, 2025",
      testimonial: "I used TipSnap to split a dinner bill with friends and ended up winning big! This is life-changing money for me.",
    },
    {
      name: "Marcus L.",
      location: "Houston, TX",
      amount: "$200,000",
      date: "Apr 30, 2025",
      testimonial: "I've been using TipSnap for about 3 months. Never thought I'd win, but here I am! I can now pay off my student loans.",
    },
    {
      name: "Sarah K.",
      location: "Portland, OR",
      amount: "$200,000",
      date: "Apr 30, 2025",
      testimonial: "TipSnap made splitting bills with roommates so easy, and now I won $200k! I'm putting a down payment on a house.",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-12 pb-24 bg-gradient-to-b from-tipsnap-purple/10 to-white">
          <div className="container mx-auto px-4">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 mr-2 text-tipsnap-darkPurple" />
                <span className="text-sm font-medium text-tipsnap-darkPurple">TIPSNAP GIVEAWAYS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Win Life-Changing Money
              </h1>
              <p className="text-xl text-gray-600">
                Every month, TipSnap gives away millions to our users. Just split bills with friends to automatically enter.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-tipsnap-purple/5 to-tipsnap-purple/20 overflow-hidden">
                <CardContent className="p-8">
                  <div className="rounded-full bg-tipsnap-purple/20 h-14 w-14 flex items-center justify-center mb-6">
                    <Calendar className="h-7 w-7 text-tipsnap-darkPurple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Monthly Giveaways</h3>
                  <p className="text-gray-600 mb-6">
                    Every month, we give away $1 million split between 5 lucky winners. Each winner receives $200,000.
                  </p>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3">
                    <span className="font-medium">Total Given Away:</span>
                    <span className="text-lg font-bold text-tipsnap-darkPurple">$5,000,000</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-tipsnap-purple/10 to-tipsnap-purple/30 overflow-hidden">
                <CardContent className="p-8">
                  <div className="rounded-full bg-tipsnap-purple/20 h-14 w-14 flex items-center justify-center mb-6">
                    <Trophy className="h-7 w-7 text-tipsnap-darkPurple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Bi-Annual Jackpots</h3>
                  <p className="text-gray-600 mb-6">
                    Every 6 months, we give away $5 million split between 2 lucky winners. Each winner receives $2.5 million.
                  </p>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3">
                    <span className="font-medium">Total Given Away:</span>
                    <span className="text-lg font-bold text-tipsnap-darkPurple">$10,000,000</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-tipsnap-purple/20 to-tipsnap-purple/40 overflow-hidden">
                <CardContent className="p-8">
                  <div className="rounded-full bg-tipsnap-purple/20 h-14 w-14 flex items-center justify-center mb-6">
                    <Gift className="h-7 w-7 text-tipsnap-darkPurple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Christmas Miracle</h3>
                  <p className="text-gray-600 mb-6">
                    Every December 25th, we give away $10 million to one very lucky TipSnap user. One winner takes all.
                  </p>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3">
                    <span className="font-medium">Total Given Away:</span>
                    <span className="text-lg font-bold text-tipsnap-darkPurple">$10,000,000</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Total Giveaways To Date</h2>
              <div className="text-5xl md:text-6xl font-bold text-tipsnap-darkPurple mb-6">
                $25,000,000
              </div>
              <Button size="lg" asChild>
                <Link to="/signup">
                  Create Free Account <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Upcoming Giveaways</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingGiveaways.map((giveaway, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{giveaway.name}</h3>
                          <div className="flex items-center text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{giveaway.date}</span>
                          </div>
                        </div>
                        <div className="h-12 w-12 rounded-full bg-tipsnap-purple/10 flex items-center justify-center">
                          <giveaway.icon className="h-6 w-6 text-tipsnap-darkPurple" />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-tipsnap-darkPurple mb-1">
                          {giveaway.amount}
                        </div>
                        <div className="text-gray-600">{giveaway.description}</div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-500 mr-2" />
                          <span><span className="font-medium">Eligibility:</span> {giveaway.eligibility}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 text-gray-500 mr-2" />
                          <span><span className="font-medium">Current Entries:</span> {giveaway.entries}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Recent Winners</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pastWinners.map((winner, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-bold mb-1">{winner.name}</h3>
                          <div className="text-gray-500 text-sm">{winner.location}</div>
                        </div>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {winner.amount}
                        </div>
                      </div>
                      
                      <div className="text-gray-600 italic mb-4">
                        "{winner.testimonial}"
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        Won on {winner.date}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Split Bills and Win?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Every bill you split with TipSnap is an entry into our massive giveaways. Sign up for free today.
            </p>
            <Button size="lg" asChild>
              <Link to="/signup">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Giveaways;
