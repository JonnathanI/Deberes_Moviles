import React from 'react';
import useFactoryStore from '../Estado/factoryStore';

const FactoryComponent: React.FC = () => {
  const { products, produceProduct, distributeProduct } = useFactoryStore();

  const handleProduceProduct = () => {
    const productName = prompt('Enter product name:');
    if (productName) {
      produceProduct(productName);
    }
  };

  const handleDistributeProduct = (productId: number) => {
    const quantityStr = prompt('Enter quantity to distribute:');
    const quantity = parseInt(quantityStr || '0', 10);
    if (quantity > 0) {
      distributeProduct(productId, quantity);
    }
  };

  return (
    <div>
      <h2>Factory Products</h2>
      <button onClick={handleProduceProduct}>Produce Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Quantity: {product.quantity}{' '}
            <button onClick={() => handleDistributeProduct(product.id)}>
              Distribute
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FactoryComponent;
