
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-tipsnap-purple to-tipsnap-darkPurple flex items-center justify-center">
                <span className="text-white font-bold">TS</span>
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-tipsnap-purple to-tipsnap-darkPurple text-transparent bg-clip-text">TipSnap</span>
            </div>
            <p className="text-gray-600 text-sm">
              The #1 receipt-splitting app that rewards generosity
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-tipsnap-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-tipsnap-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-tipsnap-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-tipsnap-purple transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/split-bill" className="text-gray-600 hover:text-tipsnap-purple text-sm">Split Bills</Link></li>
              <li><Link to="/scanner" className="text-gray-600 hover:text-tipsnap-purple text-sm">Receipt Scanner</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-tipsnap-purple text-sm">Dashboard</Link></li>
              <li><Link to="/affiliate" className="text-gray-600 hover:text-tipsnap-purple text-sm">Affiliate Program</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-tipsnap-purple text-sm">About</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-tipsnap-purple text-sm">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-tipsnap-purple text-sm">Blog</Link></li>
              <li><Link to="/media" className="text-gray-600 hover:text-tipsnap-purple text-sm">Press</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 hover:text-tipsnap-purple text-sm">Terms</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-tipsnap-purple text-sm">Privacy</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-tipsnap-purple text-sm">Cookies</Link></li>
              <li><Link to="/licenses" className="text-gray-600 hover:text-tipsnap-purple text-sm">Licenses</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} TipSnap Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
