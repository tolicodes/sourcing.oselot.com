import React from 'react';
import Home from './pages/Home';

interface AppProps {
}

function App({ ...props }: AppProps) {
  return (
    <Home/>
  );
}

export default App;
