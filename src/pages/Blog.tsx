import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, Clock, ChevronRight, ChevronLeft, Search } from 'lucide-react';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Seasonal Ingredients: Summer Edition",
      excerpt: "Discover the vibrant flavors of summer with our guide to seasonal ingredients that will elevate your home cooking.",
      image: "https://images.unsplash.com/photo-1467453678174-768ec283a940?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      author: "Chef Maria Rodriguez",
      date: "June 15, 2025",
      category: "Ingredients",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Art of Food Plating",
      excerpt: "Learn the principles of beautiful food presentation from our executive chef and transform your dishes into visual masterpieces.",
      image: "https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      author: "Chef Thomas Laurent",
      date: "May 28, 2025",
      category: "Techniques",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Wine Pairing Fundamentals",
      excerpt: "Our sommelier shares essential tips for pairing wines with different cuisines to enhance your dining experience.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      author: "Emma Chen, Sommelier",
      date: "May 10, 2025",
      category: "Beverages",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Behind the Scenes: A Day in Our Kitchen",
      excerpt: "Take a peek into the bustling world of our restaurant kitchen and discover what goes into creating our signature dishes.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      author: "James Wilson",
      date: "April 22, 2025",
      category: "Restaurant Life",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Sustainable Dining: Our Commitment",
      excerpt: "Learn about our initiatives to reduce environmental impact while maintaining the highest standards of culinary excellence.",
      image: "https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      author: "Sarah Johnson, Manager",
      date: "April 5, 2025",
      category: "Sustainability",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Mastering the Perfect Pasta",
      excerpt: "Our Italian chef shares secrets to cooking pasta to perfection and creating authentic, flavorful sauces.",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      author: "Chef Marco Rossi",
      date: "March 18, 2025",
      category: "Recipes",
      readTime: "9 min read"
    }
  ];

  // Categories for sidebar
  const categories = [
    { name: "Ingredients", count: 8 },
    { name: "Techniques", count: 12 },
    { name: "Recipes", count: 15 },
    { name: "Beverages", count: 6 },
    { name: "Restaurant Life", count: 9 },
    { name: "Sustainability", count: 4 }
  ];

  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const postsPerPage = 4;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Our Culinary Journal</h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-stone-600">
            Insights, stories, and expertise from our chefs and food enthusiasts.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3"
          >
            {/* Search Bar */}
            <div className="mb-8 relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 pl-10 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-3.5 text-stone-400" size={18} />
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {currentPosts.length > 0 ? (
                currentPosts.map((post, index) => (
                  <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row"
                  >
                    <div className="md:w-1/3 h-64 md:h-auto">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center text-sm text-stone-500 mb-2">
                        <span className="flex items-center mr-4">
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center mr-4">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-stone-800 mb-2">{post.title}</h2>
                      <p className="text-stone-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="inline-block bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="text-amber-600 hover:text-amber-700 font-medium flex items-center"
                        >
                          Read more <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-stone-600">No articles found matching your search.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredPosts.length > postsPerPage && (
              <div className="mt-10 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-md ${
                      currentPage === 1 
                        ? 'text-stone-400 cursor-not-allowed' 
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`w-10 h-10 rounded-md ${
                        currentPage === index + 1
                          ? 'bg-amber-600 text-white'
                          : 'text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-md ${
                      currentPage === totalPages 
                        ? 'text-stone-400 cursor-not-allowed' 
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <ChevronRight size={20} />
                  </button>
                </nav>
              </div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/3 space-y-8"
          >
            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => setSearchQuery(category.name)}
                      className="flex items-center justify-between w-full py-2 text-left hover:text-amber-600 transition-colors"
                    >
                      <span className="flex items-center">
                        <Tag size={14} className="mr-2" />
                        {category.name}
                      </span>
                      <span className="text-sm text-stone-500">{category.count}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <div key={index} className="flex items-start">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-16 h-16 object-cover rounded-md mr-3"
                    />
                    <div>
                      <h4 className="font-medium text-stone-800 hover:text-amber-600 transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h4>
                      <p className="text-xs text-stone-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-amber-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-stone-600 mb-4">
                Get the latest culinary insights and special offers delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full p-3 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <button 
                  type="submit" 
                  className="w-full bg-amber-600 text-white py-3 rounded-md hover:bg-amber-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;