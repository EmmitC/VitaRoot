import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Yoga Instructor",
    avatar: "",
    rating: 5,
    content: "VitaRoot has completely transformed my energy levels. The Green Vitality Detox is now part of my daily routine, and I feel more vibrant than ever!",
    highlight: "Transformed my energy levels"
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Fitness Coach",
    avatar: "",
    rating: 5,
    content: "As a fitness professional, I'm very selective about what I put in my body. These products deliver on quality and results. My clients love them too!",
    highlight: "Quality and results"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Wellness Blogger",
    avatar: "",
    rating: 5,
    content: "The Immunity Power Blend helped me through cold season without getting sick once. The taste is amazing and the ingredients are top-notch.",
    highlight: "Stayed healthy all season"
  },
  {
    id: 4,
    name: "David Park",
    role: "Busy Executive",
    avatar: "",
    rating: 5,
    content: "With my hectic schedule, VitaRoot gives me the sustained energy I need without the crash. The convenience and quality are unmatched.",
    highlight: "Sustained energy without crash"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Nutritionist",
    avatar: "",
    rating: 5,
    content: "I recommend VitaRoot to all my clients. The ingredient quality and nutritional profiles are exactly what I look for in premium wellness products.",
    highlight: "Recommend to all clients"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Marathon Runner",
    avatar: "",
    rating: 5,
    content: "Recovery time has improved significantly since incorporating these into my training regimen. Natural ingredients that actually work!",
    highlight: "Improved recovery time"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our Community
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Says</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of wellness enthusiasts who have transformed their lives with VitaRoot.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-green-600" />
              </div>
              
              <CardContent className="p-6 relative z-10">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Highlight */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 mb-6">
                  <p className="text-sm font-medium text-green-700 dark:text-green-300">
                    💡 "{testimonial.highlight}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-green-100 text-green-700">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">50,000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">1M+</div>
              <div className="text-sm text-muted-foreground">Products Sold</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}