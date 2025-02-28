import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Utensils, Truck, Users, Calendar, Gift, Coffee, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Utensils className="h-10 w-10 text-amber-600" />,
      title: "Private Dining",
      description: "Experience exclusive dining in our elegant private rooms, perfect for intimate gatherings and special celebrations.",
      features: [
        "Customized menus tailored to your preferences",
        "Dedicated service staff for your event",
        "Elegant, private atmosphere",
        "Accommodates 8-20 guests"
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <Truck className="h-10 w-10 text-amber-600" />,
      title: "Self Services",
      description: "Bring the Saveur experience to your location with our premium catering services for events of any size.",
      features: [
        "DIY Catering Station: Set up your own catering station with everything you need for a personalized dining experience, from gourmet ingredients to pre-prepared options.",
        "Flexible Menu Selection: Choose from a variety of menu options that suit your event’s vibe and dietary preferences, giving you complete control over your offerings",
        "Self-Serve Equipment: We provide all the necessary tools, including buffet tables, chafing dishes, serving utensils, and more, so you can easily set up and serve.",
      ],
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <Users className="h-10 w-10 text-amber-600" />,
      title: "Event Hosting",
      description: "Host your special events in our versatile spaces, from corporate meetings to milestone celebrations.",
      features: [
        "Flexible spaces for 20-150 guests",
        "Audio-visual equipment available",
        "Customized event planning assistance",
        "Various seating arrangements"
      ],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
   
    {
      icon: <Coffee className="h-10 w-10 text-amber-600" />,
      title: "Corporate Packages",
      description: "Impress clients or reward your team with our tailored corporate dining and event packages.",
      features: [
        "Breakfast, lunch, and dinner options",
        "Meeting spaces with dining",
        "Team-building cooking experiences",
        "Corporate account management"
      ],
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-stone-100 py-16 mb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-stone-800 mb-4">Our Services</h1>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-stone-600 mb-8">
            Beyond luxurious accommodations, Acharya & Son's offers a range of exclusive services designed to elevate your stay,
            whether at our resort or your preferred destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-stone-800">{service.title}</h3>
                </div>
                <p className="text-stone-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span className="text-sm text-stone-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Inquire about this service <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-stone-50 py-16 mb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-stone-800 mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-stone-600">
              Hear from those who have experienced our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The catering service was impeccable. Our corporate event was elevated by the exceptional food and professional staff.",
                author: "Robert Chen",
                company: "Innovate Tech"
              },
              {
                quote: "Our anniversary dinner in the private dining room was magical. The personalized menu and attentive service made it unforgettable.",
                author: "Emily & James Wilson",
                company: "Private Event"
              },
              {
                quote: "The cooking class was both educational and fun. Chef Antoine's techniques have transformed how I approach cooking at home.",
                author: "Sarah Thompson",
                company: "Cooking Class Participant"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <p className="text-stone-600 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-stone-800">{testimonial.author}</p>
                  <p className="text-sm text-stone-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-stone-600">
            Find answers to common questions about our services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "How far in advance should I book catering services?",
              answer: "We recommend booking catering services at least 3-4 weeks in advance for smaller events and 2-3 months for larger events, especially during peak seasons."
            },
            {
              question: "Can you accommodate dietary restrictions?",
              answer: "Absolutely. We can accommodate various dietary needs including vegetarian, vegan, gluten-free, and allergies. Please inform us of any restrictions when booking."
            },
            {
              question: "What is the capacity of your private dining rooms?",
              answer: "Our private dining rooms can accommodate groups ranging from 8 to 20 guests, depending on the room and seating arrangement."
            },
            {
              question: "Do you offer cooking classes for beginners?",
              answer: "Yes, we offer classes for all skill levels, from beginners to advanced home cooks. Our introductory classes focus on fundamental techniques and approachable recipes."
            },
            {
              question: "How do I redeem a gift card?",
              answer: "Gift cards can be redeemed for dining, cooking classes, or any of our services. Simply present the physical card or digital code when making a reservation or payment."
            }
          ].map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-lg font-semibold text-stone-800 mb-2">{faq.question}</h3>
              <p className="text-stone-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Elevate Your Experience?</h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can tailor our services to your specific needs.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-amber-600 hover:bg-amber-100 py-3 px-8 rounded-md transition-colors font-medium inline-block"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;