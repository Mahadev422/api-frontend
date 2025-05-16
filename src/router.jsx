import {createBrowserRouter} from 'react-router-dom';

import App from './routes/App';
import HomePage from './components/HomePage';
import CodeShowCase from './components/CodeShowCase';
import Portfolio from './routes/Portfolio';

export const router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {index: true, element: <HomePage />},
    {path: 'movies', element: <CodeShowCase />},
    {path: 'portfolio', element: <Portfolio />}
  ]},
],
{
  basename: '/api-frontend/'
}
);