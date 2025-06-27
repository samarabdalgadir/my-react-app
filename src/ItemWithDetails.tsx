import React, { useState } from 'react';

const ItemWithDetails: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <h2>Smartphone</h2>
      <button onClick={() => setShowDetails(prev => !prev)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {showDetails && (
        <div style={{ marginTop: '10px' }}>
          <p>Brand: TechPhone</p>
          <p>Storage: 128GB</p>
          <p>Color: Midnight Black</p>
        </div>
      )}
    </div>
  );
};

export default ItemWithDetails;
