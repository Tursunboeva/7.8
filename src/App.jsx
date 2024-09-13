import React from 'react';
import { Provider } from 'react-redux';  // Provider ni react-redux dan import qilamiz
import { store } from './store'; // Redux store
import SignIn from './SignIn';
import UpdateProduct from './UpdateProduct';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Sign In and Update Product</h1>
      <SignIn />
      <UpdateProduct productId={1} /> {/* ID ni dinamik tarzda berishingiz mumkin */}
    </div>
  </Provider>
);

export default App;
