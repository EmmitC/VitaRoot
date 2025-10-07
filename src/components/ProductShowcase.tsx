import { Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    id: 1,
    name: "Green Vitality Detox",
    category: "Detox",
    price: "$24.99",
    originalPrice: "$29.99",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1748337589357-fecb77a9be20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZGV0b3glMjBncmVlbiUyMGp1aWNlJTIwYm90dGxlfGVufDF8fHx8MTc1OTc3NTEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Liver Cleanse", "Energy Boost", "Anti-Inflammatory"],
    isPopular: true
  },
  {
    id: 2,
    name: "Immunity Power Blend",
    category: "Wellness",
    price: "$19.99",
    originalPrice: "$24.99",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1623870605211-13ff5216a701?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGVhbHRoJTIwZHJpbmtzJTIwYm90dGxlc3xlbnwxfHx8fDE3NTk3NzUxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Immune Support", "Antioxidants", "Natural Vitamins"],
    isNew: true
  },
  {
    id: 3,
    name: "Energy Superfood Smoothie",
    category: "Energy",
    price: "$22.99",
    originalPrice: "$27.99",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1605606437828-598340dfaeb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwc21vb3RoaWUlMjBsaWZlc3R5bGUlMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NTk3NzUxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Sustained Energy", "Protein Rich", "Mental Clarity"]
  },
  {
    id: 4,
    name: "Organic Cleanse Kit",
    category: "Bundle",
    price: "$89.99",
    originalPrice: "$120.00",
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1650960129664-d7adcf7e3dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwZnJ1aXRzfGVufDF8fHx8MTc1OTc3NTEzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Complete Detox", "7-Day Program", "Nutritionist Guide"],
    isBestseller: true
  }
];

export function ProductShowcase() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Premium Collection
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Crafted for Your
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"> Wellness</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each product is carefully formulated with premium organic ingredients to support your health journey.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-emerald-100 dark:border-emerald-900/30 bg-gradient-to-b from-white via-emerald-50/30 to-white dark:from-gray-800 dark:via-emerald-950/20 dark:to-gray-900 backdrop-blur-sm">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isPopular && (
                      <Badge className="bg-orange-500 hover:bg-orange-600">
                        Popular
                      </Badge>
                    )}
                    {product.isNew && (
                      <Badge className="bg-blue-500 hover:bg-blue-600">
                        New
                      </Badge>
                    )}
                    {product.isBestseller && (
                      <Badge className="bg-green-500 hover:bg-green-600">
                        Bestseller
                      </Badge>
                    )}
                  </div>

                  {/* Discount */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="destructive">
                      Save ${(parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))).toFixed(2)}
                    </Badge>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.benefits.map((benefit, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-600">
                        {product.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                    Add to Cart
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}