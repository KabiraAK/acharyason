import React from 'react';

// Sample Menu component
const Menu = () => {
  const menuItems = [
    { name: 'Pasta Primavera', description: 'Delicious pasta with fresh vegetables and olive oil.', price: '$12.99' },
    { name: 'Margherita Pizza', description: 'Classic pizza with mozzarella, tomatoes, and basil.', price: '$14.99' },
    { name: 'Caesar Salad', description: 'Crisp lettuce, creamy Caesar dressing, and croutons.', price: '$8.99' },
    { name: 'Grilled Salmon', description: 'Perfectly grilled salmon with a side of vegetables.', price: '$18.99' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">Our Menu</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-medium text-gray-900">{item.name}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
            <p className="mt-4 text-lg font-semibold text-gray-800">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
