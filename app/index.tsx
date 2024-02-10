import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Baby Store</h1>
      </header>
      <main>
        <p>Discover a world of adorable baby products for your little ones.</p>
        <img
          src="https://example.com/baby-products.jpg"
          alt="Baby Products"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </main>
      <footer>
        <p>Explore our collection and make your baby's world even more delightful!</p>
      </footer>
    </div>
  );
};