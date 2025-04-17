
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Receipt, Coins, Gift } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-tipsnap-purple to-tipsnap-darkPurple flex items-center justify-center">
              <Receipt className="h-4 w-4 text-white" />
            </div>
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-tipsnap-purple to-tipsnap-darkPurple text-transparent bg-clip-text">TipSnap</span>
          </div>
        </Link>

        {!isMobile ? (
          <div className="flex items-center space-x-1">
            <NavItems className="flex" />
            <div className="flex space-x-2 ml-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 top-14 z-50 bg-background border-t">
          <div className="container px-4 py-6 flex flex-col space-y-6">
            <NavItems className="flex flex-col space-y-4" onClick={() => setIsOpen(false)} />
            <div className="flex flex-col space-y-3 mt-4">
              <Button variant="outline" asChild>
                <Link to="/login" onClick={() => setIsOpen(false)}>Log in</Link>
              </Button>
              <Button asChild>
                <Link to="/signup" onClick={() => setIsOpen(false)}>Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavItemsProps {
  className?: string;
  onClick?: () => void;
}

const NavItems = ({ className, onClick }: NavItemsProps) => {
  const navItems = [
    { name: 'Split a Bill', href: '/split-bill', icon: Receipt },
    { name: 'Pricing', href: '/pricing', icon: Coins },
    { name: 'Giveaways', href: '/giveaways', icon: Gift },
  ];

  return (
    <div className={cn('items-center', className)}>
      {navItems.map((item) => (
        <Button
          key={item.name}
          variant="ghost"
          size="sm"
          asChild
          className="flex items-center gap-2"
          onClick={onClick}
        >
          <Link to={item.href}>
            <item.icon className="h-4 w-4" />
            <span>{item.name}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default Navbar;
