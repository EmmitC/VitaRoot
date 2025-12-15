import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-emerald-950/50 dark:to-gray-900" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-300 to-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-teal-300 to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-40 w-88 h-88 bg-gradient-to-br from-green-300 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-sm font-medium text-green-700 dark:text-green-300">
                ✨ Premium Wellness Collection
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 bg-clip-text text-transparent">
                  Rooted in 
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 bg-clip-text text-transparent">
                  Wellness
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                The power of nature with VitaRoot's premium collection of organic wellness drinks. Each bottle is carefully crafted to nourish your body.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 hover:from-emerald-700 hover:via-green-600 hover:to-teal-700 shadow-xl">
                Shop Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 w-5 h-5" />
                Watch Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div> */}
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-sm text-muted-foreground">Organic</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">24H</div>
                <div className="text-sm text-muted-foreground">Fresh Delivery</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="./citrus_charge.jpg"
                alt="Premium wellness drinks"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-8 -left-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <div className="font-semibold">100% Organic</div>
                  <div className="text-sm text-muted-foreground">Certified Pure</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <div className="font-semibold">Energy Boost</div>
                  <div className="text-sm text-muted-foreground">Natural Power</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}