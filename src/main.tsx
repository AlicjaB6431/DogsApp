import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.tsx';

import GlobalStyle from './globalStyles.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>,
);
