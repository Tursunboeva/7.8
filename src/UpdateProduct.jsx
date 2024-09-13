import React, { useState } from 'react';
import { useUpdateProductMutation } from './api';

const UpdateProduct = ({ productId }) => {
  const [productData, setProductData] = useState({ title: '', price: 0 });
  const [updateProduct, { isLoading, isSuccess, error }] = useUpdateProductMutation();

  const handleUpdate = async () => {
    try {
      await updateProduct({ id: productId, ...productData }).unwrap();
      console.log('Product updated successfully');
    } catch (err) {
      console.error('Failed to update product:', err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Product Title"
        value={productData.title}
        onChange={(e) => setProductData({ ...productData, title: e.target.value })}
      />
      <input
        type="number"
        placeholder="Product Price"
        value={productData.price}
        onChange={(e) => setProductData({ ...productData, price: Number(e.target.value) })}
      />
      <button onClick={handleUpdate} disabled={isLoading}>
        {isLoading ? 'Updating...' : 'Update Product'}
      </button>
      {isSuccess && <p>Product updated successfully!</p>}
      {error && <p>Error updating product: {error.message}</p>}
    </div>
  );
};

export default UpdateProduct;
