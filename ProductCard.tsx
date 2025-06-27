import React from 'react';

type ProductCardProps = {
  name: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, price }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '16px',
      maxWidth: '250px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ margin: '0 0 8px 0' }}>{name}</h2>
      <p style={{ color: '#555', fontSize: '18px' }}>${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
