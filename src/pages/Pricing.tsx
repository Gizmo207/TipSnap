
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Pricing = () => {
  const features = [
    {
      name: "Receipt scanning",
      free: "Basic",
      pro: "Advanced AI",
      business: "Advanced AI",
      tooltip: "Scan receipts directly from your phone camera"
    },
    {
      name: "Bill splitting",
      free: "Up to $100",
      pro: "Unlimited",
      business: "Unlimited",
      tooltip: "Split bills among multiple people with custom amounts"
    },
    {
      name: "Monthly splits",
      free: "5 per month",
      pro: "Unlimited",
      business: "Unlimited",
      tooltip: "Number of times you can split bills each month"
    },
    {
      name: "History",
      free: "30 days",
      pro: "Unlimited",
      business: "Unlimited",
      tooltip: "How long your split history is saved"
    },
    {
      name: "Payment links",
      free: "Basic",
      pro: "All platforms",
      business: "All platforms",
      tooltip: "Generate payment links for Venmo, PayPal, Zelle, and CashApp"
    },
    {
      name: "Ad-free experience",
      free: false,
      pro: true,
      business: true,
      tooltip: "Use the app without any advertisements"
    },
    {
      name: "Giveaway eligibility",
      free: true,
      pro: true,
      business: true,
      tooltip: "Eligible to win our monthly, bi-annual, and annual giveaways"
    },
    {
      name: "Affiliate earnings",
      free: false,
      pro: "$1/month per Pro referral",
      business: "$2/month per Business referral",
      tooltip: "Earn recurring commissions for every friend you refer"
    },
    {
      name: "Tax reporting & exports",
      free: false,
      pro: false,
      business: true,
      tooltip: "Export detailed reports for tax purposes"
    },
    {
      name: "Team accounts",
      free: false,
      pro: false,
      business: true,
      tooltip: "Create and manage team accounts with different roles"
    },
    {
      name: "Custom branding",
      free: false,
      pro: false,
      business: true,
      tooltip: "Add your company logo and branding to payment requests"
    },
    {
      name: "API access",
      free: false,
      pro: false,
      business: true,
      tooltip: "Access our API for custom integrations"
    },
    {
      name: "Priority support",
      free: false,
      pro: true,
      business: "Dedicated support",
      tooltip: "Get faster responses from our support team"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600">
                Choose the plan that works best for you. All plans include access to our massive giveaways.
              </p>
            </div>
            
            <Tabs defaultValue="monthly" className="w-full max-w-5xl mx-auto mb-16">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly Billing <span className="ml-2 text-xs bg-tipsnap-purple/20 text-tipsnap-darkPurple px-2 py-0.5 rounded-full">Save 20%</span></TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="monthly" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard 
                  name="Free"
                  price="$0"
                  description="For occasional bill splitters"
                  features={[
                    "Basic receipt scanning",
                    "Split bills up to $100",
                    "5 splits per month",
                    "30-day history",
                    "Giveaway eligibility"
                  ]}
                  limitations={[
                    "Ad-supported experience",
                    "No affiliate earnings",
                    "Basic payment link options"
                  ]}
                  buttonText="Sign Up Free"
                  buttonVariant="outline"
                  href="/signup"
                  popular={false}
                />
                
                <PricingCard 
                  name="Pro"
                  price="$5.99"
                  period="per month"
                  description="For frequent bill splitters"
                  features={[
                    "Advanced AI receipt scanning",
                    "Unlimited bill amounts",
                    "Unlimited splits",
                    "Unlimited history",
                    "Ad-free experience",
                    "Giveaway eligibility",
                    "$1/month for each Pro referral",
                    "All payment link options",
                    "Priority support"
                  ]}
                  limitations={[]}
                  buttonText="Get Pro"
                  buttonVariant="default"
                  href="/signup?plan=pro"
                  popular={true}
                />
                
                <PricingCard 
                  name="Business"
                  price="$14.99"
                  period="per month"
                  description="For professionals & businesses"
                  features={[
                    "Everything in Pro",
                    "Tax reporting & exports",
                    "Custom branding",
                    "API access",
                    "$2/month for each Business referral",
                    "Team accounts with roles",
                    "Dedicated support",
                    "Early access to new features"
                  ]}
                  limitations={[]}
                  buttonText="Get Business"
                  buttonVariant="outline"
                  href="/signup?plan=business"
                  popular={false}
                />
              </TabsContent>
              
              <TabsContent value="yearly" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard 
                  name="Free"
                  price="$0"
                  description="For occasional bill splitters"
                  features={[
                    "Basic receipt scanning",
                    "Split bills up to $100",
                    "5 splits per month",
                    "30-day history",
                    "Giveaway eligibility"
                  ]}
                  limitations={[
                    "Ad-supported experience",
                    "No affiliate earnings",
                    "Basic payment link options"
                  ]}
                  buttonText="Sign Up Free"
                  buttonVariant="outline"
                  href="/signup"
                  popular={false}
                />
                
                <PricingCard 
                  name="Pro"
                  price="$57.50"
                  period="per year"
                  description="For frequent bill splitters"
                  features={[
                    "Advanced AI receipt scanning",
                    "Unlimited bill amounts",
                    "Unlimited splits",
                    "Unlimited history",
                    "Ad-free experience",
                    "Giveaway eligibility",
                    "$1/month for each Pro referral",
                    "All payment link options",
                    "Priority support"
                  ]}
                  limitations={[]}
                  buttonText="Get Pro"
                  buttonVariant="default"
                  href="/signup?plan=pro-yearly"
                  popular={true}
                  discount="Save $14.38"
                />
                
                <PricingCard 
                  name="Business"
                  price="$143.90"
                  period="per year"
                  description="For professionals & businesses"
                  features={[
                    "Everything in Pro",
                    "Tax reporting & exports",
                    "Custom branding",
                    "API access",
                    "$2/month for each Business referral",
                    "Team accounts with roles",
                    "Dedicated support",
                    "Early access to new features"
                  ]}
                  limitations={[]}
                  buttonText="Get Business"
                  buttonVariant="outline"
                  href="/signup?plan=business-yearly"
                  popular={false}
                  discount="Save $35.98"
                />
              </TabsContent>
            </Tabs>
            
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Compare Features</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 font-medium">Features</th>
                      <th className="text-center py-4 px-4 font-medium">Free</th>
                      <th className="text-center py-4 px-4 font-medium bg-tipsnap-purple/5">Pro</th>
                      <th className="text-center py-4 px-4 font-medium">Business</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">
                          <div className="flex items-center">
                            {feature.name}
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-6 w-6 ml-1">
                                    <HelpCircle className="h-4 w-4 text-gray-400" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">{feature.tooltip}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof feature.free === 'boolean' ? (
                            feature.free ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            feature.free
                          )}
                        </td>
                        <td className="py-3 px-4 text-center bg-tipsnap-purple/5">
                          {typeof feature.pro === 'boolean' ? (
                            feature.pro ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            feature.pro
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof feature.business === 'boolean' ? (
                            feature.business ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            feature.business
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "Can I cancel my subscription at any time?",
                  answer: "Yes, you can cancel your subscription at any time. If you cancel, your subscription will remain active until the end of your current billing period."
                },
                {
                  question: "Is there a free trial for paid plans?",
                  answer: "Yes, we offer a 7-day free trial for both our Pro and Business plans. You can cancel anytime during the trial period and won't be charged."
                },
                {
                  question: "How do the giveaways work?",
                  answer: "Every time you use TipSnap to split a bill, you're automatically entered into our giveaways. No purchase necessary. Winners are randomly selected and notified via email."
                },
                {
                  question: "How does the affiliate program work?",
                  answer: "When you refer friends who subscribe to Pro or Business plans, you'll earn a monthly commission for as long as they remain subscribed. Pro referrals earn $1/month and Business referrals earn $2/month."
                },
                {
                  question: "Can I switch plans later?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, the new rate will apply at the start of your next billing cycle."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  limitations: string[];
  buttonText: string;
  buttonVariant: 'default' | 'outline';
  href: string;
  popular: boolean;
  discount?: string;
}

const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  limitations,
  buttonText,
  buttonVariant,
  href,
  popular,
  discount
}: PricingCardProps) => {
  return (
    <Card className={`relative ${popular ? 'border-tipsnap-purple shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-tipsnap-purple text-white text-xs font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </div>
        </div>
      )}
      
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="text-gray-500 ml-2">{period}</span>}
        </div>
        {discount && (
          <div className="mt-1 text-sm text-green-600 font-medium">{discount}</div>
        )}
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
          
          {limitations.map((limitation, i) => (
            <li key={i} className="flex items-start text-gray-500">
              <X className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
              <span>{limitation}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          className={`w-full ${popular ? 'bg-tipsnap-purple hover:bg-tipsnap-darkPurple' : ''}`} 
          variant={buttonVariant}
          asChild
        >
          <Link to={href}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Pricing;
