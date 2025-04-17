
import React from 'react';
import { 
  Camera, 
  Split, 
  Link as LinkIcon, 
  DollarSign, 
  Gift, 
  Users, 
  Share2, 
  TrendingUp 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Camera,
      title: "AI Receipt Scanner",
      description: "Instantly capture and analyze receipts with our AI-powered scanner. No more manual entry."
    },
    {
      icon: Split,
      title: "Instant Split Logic",
      description: "Automatically calculate splits including tax and tip percentages for everyone in your group."
    },
    {
      icon: LinkIcon,
      title: "Payment Links",
      description: "Generate payment links for Venmo, PayPal, Zelle, and CashApp with just one tap."
    },
    {
      icon: DollarSign,
      title: "Affiliate Earnings",
      description: "Earn recurring commissions for every friend you refer who subscribes to Pro or Business."
    },
    {
      icon: Gift,
      title: "Massive Giveaways",
      description: "Win a share of our monthly $1M, bi-annual $5M, and annual $10M Christmas giveaways."
    },
    {
      icon: Users,
      title: "Group Management",
      description: "Save frequent dining companions and customize split preferences for faster sharing."
    },
    {
      icon: Share2,
      title: "Social Sharing",
      description: "Easily share your payment requests through any messaging app or social platform."
    },
    {
      icon: TrendingUp,
      title: "Real-time Dashboard",
      description: "Track your contribution to millions given away and monitor your affiliate earnings."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            All the Features You Need
          </h2>
          <p className="text-xl text-gray-600">
            TipSnap combines powerful receipt scanning with generous giveaways to create the ultimate bill-splitting experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-tipsnap-purple/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-tipsnap-darkPurple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
