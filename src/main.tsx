import { render } from 'react-dom';
import App from './App.tsx';
import './index.css';
import { OpenStateProvider } from './component/hooks/open.tsx';

import { BrowserRouter as Router } from 'react-router-dom';

const mountNode = document.getElementById('root');

render(
  <Router>
    <OpenStateProvider>
      <App />
    </OpenStateProvider>
  </Router>, 
  mountNode
);
