import { Leaf, Zap, Heart, Shield, Brain, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const benefits = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Sourced from certified organic farms with no artificial additives or preservatives.",
    color: "text-green-600"
  },
  {
    icon: Zap,
    title: "Natural Energy",
    description: "Sustained energy boost without caffeine crashes or artificial stimulants.",
    color: "text-yellow-600"
  },
  {
    icon: Heart,
    title: "Heart Health",
    description: "Supports cardiovascular wellness with antioxidants and essential nutrients.",
    color: "text-red-500"
  },
  {
    icon: Shield,
    title: "Immune Support",
    description: "Strengthens your immune system with vitamins, minerals, and superfoods.",
    color: "text-blue-600"
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    description: "Enhances cognitive function and focus with brain-boosting nutrients.",
    color: "text-purple-600"
  },
  {
    icon: Sparkles,
    title: "Radiant Skin",
    description: "Promotes healthy, glowing skin from the inside out with powerful antioxidants.",
    color: "text-pink-600"
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"> VitaRoot</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Experience the transformative power of premium wellness with scientifically-backed ingredients and proven results.
              </p>
            </div>

            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-emerald-100/50 dark:border-emerald-900/30 bg-gradient-to-br from-white/80 via-emerald-50/30 to-white/80 dark:from-gray-800/80 dark:via-emerald-950/20 dark:to-gray-800/80 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 dark:from-emerald-900/50 dark:via-green-900/50 dark:to-teal-900/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <ImageWithFallback
                src="./Pineapple.jpg"
                alt="Wellness lifestyle"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating Stats */}
              <div className="absolute top-8 left-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">30+</div>
                  <div className="text-sm text-muted-foreground">Wellness Benefits</div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}