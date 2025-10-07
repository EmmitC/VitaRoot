import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const footerLinks = {
  products: [
    { name: 'Detox Drinks', href: '#' },
    { name: 'Energy Smoothies', href: '#' },
    { name: 'Immunity Blends', href: '#' },
    { name: 'Wellness Bundles', href: '#' },
    { name: 'New Arrivals', href: '#' }
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Mission', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press Kit', href: '#' }
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Shipping Info', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Size Guide', href: '#' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Accessibility', href: '#' }
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="font-bold text-white text-xl">V</span>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">VitaRoot</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering your wellness journey with premium organic beverages and holistic health solutions. 
              Transform your life, one sip at a time.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-green-500" />
                <span>hello@vitaroot.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-500" />
                <span>1-800-DETOX-NOW</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-green-500" />
                <span>Kampala Uganda</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className={`text-gray-400 ${social.color} transition-colors`}
                  asChild
                >
                  <a href={social.href} aria-label={social.name}>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-green-400">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-green-400">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-green-400">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-green-400">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-gray-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-center md:text-left">
            <p>&copy; 2025 VitaRoot. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <span>🌱 Certified Organic</span>
            <span>✨ Premium Quality</span>
            {/* <span>🚚 Free Shipping</span> */}
            <span>💚 Carbon Neutral</span>
          </div>
        </div>

        {/* Quality Badges */}
        <div className="mt-8 flex justify-center items-center space-x-8 opacity-60">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🏆</span>
            </div>
            <div className="text-xs text-gray-400">Award Winning</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🌍</span>
            </div>
            <div className="text-xs text-gray-400">Eco Friendly</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🔬</span>
            </div>
            <div className="text-xs text-gray-400">Curated Blends</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">⭐</span>
            </div>
            <div className="text-xs text-gray-400">5 Star Rated</div>
          </div>
        </div>
      </div>
    </footer>
  );
}