
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      description: "For occasional bill splitters",
      features: [
        "Basic receipt scanning",
        "Split bills up to $100",
        "Ad-supported experience",
        "30-day history",
        "Giveaway eligibility",
      ],
      limitations: [
        "Limited to 5 splits per month",
        "No affiliate earnings",
        "Basic payment link options",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
      popular: false,
      href: "/signup",
    },
    {
      name: "Pro",
      price: "$5.99",
      period: "per month",
      description: "For frequent bill splitters",
      features: [
        "Advanced AI receipt scanning",
        "Unlimited bill amounts",
        "Ad-free experience",
        "Unlimited history",
        "Giveaway eligibility",
        "$1/month for each Pro referral",
        "All payment link options",
        "Priority processing",
      ],
      limitations: [],
      buttonText: "Upgrade to Pro",
      buttonVariant: "default",
      popular: true,
      href: "/signup?plan=pro",
    },
    {
      name: "Business",
      price: "$14.99",
      period: "per month",
      description: "For professionals & businesses",
      features: [
        "Everything in Pro",
        "Tax reporting & exports",
        "Custom branding",
        "API access",
        "$2/month for each Business referral",
        "Team accounts with roles",
        "Dedicated support",
        "Early access to new features",
      ],
      limitations: [],
      buttonText: "Try Business",
      buttonVariant: "outline",
      popular: false,
      href: "/signup?plan=business",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that works for you, from free to premium. All plans include giveaway eligibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card key={index} className={`relative ${tier.popular ? 'border-tipsnap-purple shadow-lg' : 'border-gray-200'}`}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-tipsnap-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.period && <span className="text-gray-500 ml-2">{tier.period}</span>}
                </div>
                <CardDescription className="mt-2">{tier.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  
                  {tier.limitations.map((limitation, i) => (
                    <li key={i} className="flex items-start text-gray-500">
                      <X className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${tier.popular ? 'bg-tipsnap-purple hover:bg-tipsnap-darkPurple' : ''}`} 
                  variant={tier.buttonVariant as "default" | "outline"}
                  asChild
                >
                  <Link to={tier.href}>{tier.buttonText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
