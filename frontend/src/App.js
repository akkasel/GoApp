import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Orders from './components/orders.components';

function App() {
  return (
    <div>
      <p className='customHeaderText'>Orders :</p>
      <Orders />
    </div>
  );
}

export default App;
