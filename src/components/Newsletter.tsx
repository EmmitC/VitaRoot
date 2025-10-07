import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-white/10 backdrop-blur-xl shadow-2xl">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Join the Wellness
                  <span className="block text-green-100">Revolution</span>
                </h2>
                <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
                  Get exclusive access to new products, wellness tips, and special offers. 
                  Plus, receive 15% off your first order when you subscribe.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎁</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Exclusive Offers</h3>
                  <p className="text-green-100 text-sm">First access to sales and new product launches</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Wellness Tips</h3>
                  <p className="text-green-100 text-sm">Expert advice and healthy lifestyle content</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">15% Off</h3>
                  <p className="text-green-100 text-sm">Instant discount on your first purchase</p>
                </div>
              </div>

              {/* Subscription Form */}
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-green-100 focus:bg-white/30"
                      required
                    />
                    <Button 
                      type="submit"
                      className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8"
                    >
                      Subscribe
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-green-100 mt-4 text-center">
                    By subscribing, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              ) : (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Welcome to VitaRoot!</h3>
                  <p className="text-green-100">
                    Check your email for your 15% discount code and wellness guide.
                  </p>
                </div>
              )}

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-xs text-green-100">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9★</div>
                  <div className="text-xs text-green-100">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">0%</div>
                  <div className="text-xs text-green-100">Spam</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}