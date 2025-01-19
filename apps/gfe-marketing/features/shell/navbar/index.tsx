import { Button } from '@repo/design-system/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and company name */}
          <Link href="/" className="flex items-center">
            <Image
              width={112}
              height={32}
              src="/shell/abstractly.png"
              alt="Abstractly"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/features"
                className="text-gray-600 hover:text-gray-900"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About us
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center space-x-4 md:flex">
            <Link href="/learn-more">
              <Button variant="ghost">Learn more</Button>
            </Link>
            <Link href="/pricing">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                See pricing
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button size="sm" className="px-2">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
