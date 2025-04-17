
import React from 'react';
import { Gift, CalendarDays, Trophy, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const GiveawaySection = () => {
  const giveaways = [
    {
      title: "Monthly Millions",
      amount: "$1M",
      winners: "5 winners, $200K each",
      trigger: "At 10M users",
      icon: CalendarDays,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Bi-Annual Jackpot",
      amount: "$5M",
      winners: "2 winners, $2.5M each",
      trigger: "Every 6 months",
      icon: Trophy,
      color: "from-tipsnap-purple to-tipsnap-darkPurple"
    },
    {
      title: "Christmas Miracle",
      amount: "$10M",
      winners: "1 lucky winner",
      trigger: "Every December 25th",
      icon: Gift,
      color: "from-red-400 to-red-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center">
            <Gift className="h-5 w-5 mr-2 text-tipsnap-darkPurple" />
            <span className="text-sm font-medium text-tipsnap-darkPurple">LIFE-CHANGING GIVEAWAYS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Split Bills, Win Millions
          </h2>
          <p className="text-xl text-gray-600">
            Just by using TipSnap, you're automatically entered into our massive giveaways. No purchase necessary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {giveaways.map((giveaway, index) => (
            <Card key={index} className="overflow-hidden bg-white border-none shadow-md hover:shadow-xl transition-shadow">
              <div className={`h-2 w-full bg-gradient-to-r ${giveaway.color}`}></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold">{giveaway.title}</h3>
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <giveaway.icon className="h-5 w-5 text-gray-700" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r text-transparent bg-clip-text mb-1 pb-1 inline-block">
                    {giveaway.amount}
                  </div>
                  <div className="text-gray-600">{giveaway.winners}</div>
                </div>
                
                <div className="bg-gray-50 rounded-lg px-3 py-2 text-sm">
                  <span className="font-medium">Giveaway Trigger:</span> {giveaway.trigger}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link to="/giveaways">
              View All Giveaways <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GiveawaySection;
