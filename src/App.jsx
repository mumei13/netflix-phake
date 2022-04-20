import React from 'react';
import './App.css';
// import Header from './components/Header/Header';
import 'antd/dist/antd.min.css';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <ProtectedRoute />
    </div>
  );
}

export default App;
