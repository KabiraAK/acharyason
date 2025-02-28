import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Award, Users } from 'lucide-react';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Restaurant interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl md:ml-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
               Acharya & Son's Journey Awaits
            </h1>
            <p className="text-xl text-stone-200 mb-8">
              Experience the art of fine dining with our carefully crafted menu and elegant atmosphere also feel oragnic cusine.
            </p>
           
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-stone-50 p-8 rounded-lg text-center"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-amber-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Exceptional Cuisine</h3>
              <p className="text-stone-600">
                Our award-winning chefs create memorable dishes using only the finest locally-sourced ingredients.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-stone-50 p-8 rounded-lg text-center"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-amber-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Perfect Atmosphere</h3>
              <p className="text-stone-600">
                Enjoy your meal in our carefully designed space that balances elegance with comfort.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-stone-50 p-8 rounded-lg text-center"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-amber-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Impeccable Service</h3>
              <p className="text-stone-600">
                Our attentive staff ensures every detail of your dining experience exceeds expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Our Signature Dishes</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-stone-600">
              Discover our chef's most celebrated creations, crafted with passion and the finest ingredients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Herb-Crusted Salmon",
                description: "Wild-caught salmon with a crispy herb crust, served with seasonal vegetables.",
                image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                name: "Truffle Risotto",
                description: "Creamy Arborio rice with wild mushrooms and fresh black truffle.",
                image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                name: "Aged Ribeye Steak",
                description: "28-day dry-aged ribeye with roasted garlic butter and rosemary potatoes.",
                image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            ].map((dish, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">{dish.name}</h3>
                  <p className="text-stone-600 mb-4">{dish.description}</p>
                  <Link 
                    to="/menu" 
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                  >
                    View on menu <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">What Our Guests Say</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The best dining experience I've had in years. The attention to detail is remarkable.",
                author: "Emily Johnson",
                role: "Food Critic"
              },
              {
                quote: "Every dish tells a story. The flavors are complex yet harmonious, truly exceptional.",
                author: "Michael Chen",
                role: "Regular Guest"
              },
              {
                quote: "From the moment we walked in, we felt welcome. The service is as outstanding as the food.",
                author: "Sarah Williams",
                role: "First-time Visitor"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-stone-50 p-8 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-stone-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-stone-800">{testimonial.author}</p>
                  <p className="text-sm text-stone-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Saveur?</h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable culinary journey. Reserve your table today.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-amber-600 hover:bg-amber-100 py-3 px-8 rounded-md transition-colors font-medium inline-block"
            >
              Make a Reservation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;