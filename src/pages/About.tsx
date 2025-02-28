import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Leaf, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="h-96 w-full">
          <img 
            src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Restaurant team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Our Story */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-stone-800 mb-6">The Acharya & Son's Journey</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Founded in 2023 by Acharya'S, Acharya & Son's  began as a small resturants in kathmandu and plan to executive in hometown with a big vision: 
                to create a dining experience that honors traditional techniques and oranic dishes.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-stone max-w-none"
            >
              <p>
                What started as a passion project quickly gained recognition for its commitment to quality 
                and creativity. Over the years, we've grown from our humble beginnings into one of the city's 
                most beloved culinary destinations, while staying true to our founding principles.
              </p>
              
              <p>
                Our philosophy is simple: respect for ingredients, attention to detail, and a genuine love 
                for bringing people together through food. We believe that dining is not just about nourishment, 
                but about creating moments and memories that last a lifetime.
              </p>
              
              <p>
                Every dish at Saveur tells a story – of our heritage, our journey, and our continuous exploration 
                of flavors. We source our ingredients from local farmers and producers who share our commitment 
                to sustainability and ethical practices.
              </p>
              
              <p>
                Today, under the leadership of Chef Laurent and our talented team, we continue to push boundaries 
                while honoring the traditions that have made Saveur what it is today. We invite you to be part of 
                our ongoing story.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20 bg-stone-50 py-16 rounded-lg">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Our Values</h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-stone-600">
                The principles that guide everything we do at Saveur.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Award className="h-8 w-8 text-amber-600" />,
                  title: "Excellence",
                  description: "We strive for perfection in every dish, every service, every detail."
                },
                {
                  icon: <Heart className="h-8 w-8 text-amber-600" />,
                  title: "Passion",
                  description: "Our love for food and hospitality drives us to create exceptional experiences."
                },
                {
                  icon: <Leaf className="h-8 w-8 text-amber-600" />,
                  title: "Sustainability",
                  description: "We're committed to ethical sourcing and minimizing our environmental impact."
                },
                {
                  icon: <Clock className="h-8 w-8 text-amber-600" />,
                  title: "Tradition",
                  description: "We honor culinary heritage while embracing innovation and creativity."
                }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">{value.title}</h3>
                  <p className="text-stone-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-stone-600">
              The talented individuals who bring the Saveur experience to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Antoine Laurent",
                role: "Founder & Executive Chef",
                bio: "With over 20 years of experience in fine dining, Chef Antoine brings his passion for French cuisine and innovative techniques to every dish.",
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=684&q=80"
              },
              {
                name: "Maria Rodriguez",
                role: "Head Chef",
                bio: "Chef Maria's creative approach to traditional recipes has earned her recognition throughout the culinary world.",
                image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=684&q=80"
              },
              {
                name: "James Wilson",
                role: "Pastry Chef",
                bio: "James combines classical training with artistic flair to create desserts that are as beautiful as they are delicious.",
                image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=684&q=80"
              },
              {
                name: "Emma Chen",
                role: "Sommelier",
                bio: "With an exceptional palate and extensive knowledge, Emma curates our award-winning wine selection.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=684&q=80"
              },
              {
                name: "Thomas Bernard",
                role: "Restaurant Manager",
                bio: "Thomas ensures that every aspect of your dining experience meets our high standards of excellence.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=684&q=80"
              },
              {
                name: "Sarah Johnson",
                role: "Events Coordinator",
                bio: "Sarah's attention to detail and creative vision make every special event at Saveur truly memorable.",
                image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=684&q=80"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-800 mb-1">{member.name}</h3>
                  <p className="text-amber-600 mb-3">{member.role}</p>
                  <p className="text-stone-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-stone-600">
              Key moments in the Saveur story.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2010",
                title: "The Beginning",
                description: "Saveur opens its doors as a small bistro with just 10 tables."
              },
              {
                year: "2012",
                title: "First Recognition",
                description: "Awarded 'Best New Restaurant' by the city's culinary association."
              },
              {
                year: "2015",
                title: "Expansion",
                description: "Moved to our current location, tripling our capacity and adding a private dining room."
              },
              {
                year: "2018",
                title: "Michelin Star",
                description: "Received our first Michelin star, a testament to our team's dedication and creativity."
              },
              {
                year: "2020",
                title: "Sustainability Initiative",
                description: "Launched our farm-to-table program, partnering with local producers."
              },
              {
                year: "2023",
                title: "Culinary Academy",
                description: "Established the Saveur Culinary Academy to train the next generation of chefs."
              },
              {
                year: "2025",
                title: "Today",
                description: "Continuing our journey of culinary excellence and innovation."
              }
            ].map((milestone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-24 flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                  <div className="h-full w-1 bg-amber-200 my-2"></div>
                </div>
                <div className={`bg-white p-6 rounded-lg shadow-md flex-grow ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">{milestone.title}</h3>
                  <p className="text-stone-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;