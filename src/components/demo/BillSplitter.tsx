
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Calculator, Users, DollarSign, Share2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const BillSplitter = () => {
  const { toast } = useToast();
  const [billAmount, setBillAmount] = useState<number>(50);
  const [tipPercentage, setTipPercentage] = useState<number>(18);
  const [numPeople, setNumPeople] = useState<number>(2);
  const [taxPercentage, setTaxPercentage] = useState<number>(8.5);
  const [calculatedValues, setCalculatedValues] = useState<{
    subtotal: number;
    tipAmount: number;
    taxAmount: number;
    total: number;
    perPerson: number;
  }>({
    subtotal: 50,
    tipAmount: 9,
    taxAmount: 4.25,
    total: 63.25,
    perPerson: 31.63,
  });

  const calculateBill = () => {
    const subtotal = billAmount;
    const tipAmount = subtotal * (tipPercentage / 100);
    const taxAmount = subtotal * (taxPercentage / 100);
    const total = subtotal + tipAmount + taxAmount;
    const perPerson = total / numPeople;

    setCalculatedValues({
      subtotal,
      tipAmount,
      taxAmount,
      total,
      perPerson,
    });

    toast({
      title: "Bill calculated!",
      description: `Total: $${total.toFixed(2)} • Per person: $${perPerson.toFixed(2)}`,
    });
  };

  const handleShareLinks = () => {
    toast({
      title: "Payment links generated!",
      description: "Payment links have been created and are ready to share.",
    });
  };

  const tipOptions = [
    { value: 15, label: "15% - Standard" },
    { value: 18, label: "18% - Good Service" },
    { value: 20, label: "20% - Great Service" },
    { value: 25, label: "25% - Exceptional" },
  ];

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center mb-2">
          <Calculator className="h-5 w-5 mr-2 text-tipsnap-purple" />
          <CardTitle>Bill Splitter</CardTitle>
        </div>
        <CardDescription>
          Split your bill easily with TipSnap
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="bill-amount">Bill Amount</Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              id="bill-amount"
              placeholder="50.00"
              className="pl-10"
              type="number"
              value={billAmount}
              onChange={(e) => setBillAmount(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="tip-percentage">Tip ({tipPercentage}%)</Label>
            <span className="text-sm text-gray-500">
              ${(billAmount * (tipPercentage / 100)).toFixed(2)}
            </span>
          </div>
          <Select
            value={tipPercentage.toString()}
            onValueChange={(value) => setTipPercentage(Number(value))}
          >
            <SelectTrigger id="tip-percentage">
              <SelectValue placeholder="Select tip percentage" />
            </SelectTrigger>
            <SelectContent>
              {tipOptions.map((option) => (
                <SelectItem key={option.value} value={option.value.toString()}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Slider
            defaultValue={[18]}
            max={30}
            min={0}
            step={1}
            value={[tipPercentage]}
            onValueChange={(values) => setTipPercentage(values[0])}
            className="mt-2"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="tax-percentage">Tax ({taxPercentage}%)</Label>
            <span className="text-sm text-gray-500">
              ${(billAmount * (taxPercentage / 100)).toFixed(2)}
            </span>
          </div>
          <Input
            id="tax-percentage"
            type="number"
            value={taxPercentage}
            onChange={(e) => setTaxPercentage(Number(e.target.value))}
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="num-people">Split Among</Label>
            <span className="text-sm text-gray-500">{numPeople} people</span>
          </div>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              id="num-people"
              type="number"
              className="pl-10"
              min={1}
              max={50}
              value={numPeople}
              onChange={(e) => setNumPeople(Math.max(1, Number(e.target.value)))}
            />
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal:</span>
            <span>${calculatedValues.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tip ({tipPercentage}%):</span>
            <span>${calculatedValues.tipAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax ({taxPercentage}%):</span>
            <span>${calculatedValues.taxAmount.toFixed(2)}</span>
          </div>
          <div className="border-t pt-2 flex justify-between font-bold">
            <span>Total:</span>
            <span>${calculatedValues.total.toFixed(2)}</span>
          </div>
          <div className="bg-tipsnap-purple/10 p-2 rounded flex justify-between font-bold text-tipsnap-darkPurple">
            <span>Each person pays:</span>
            <span>${calculatedValues.perPerson.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-3">
        <Button onClick={calculateBill} className="w-full">
          Calculate Split
        </Button>
        <Button variant="outline" onClick={handleShareLinks} className="w-full">
          <Share2 className="mr-2 h-4 w-4" /> Share Payment Links
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BillSplitter;
