import {createBrowserRouter} from 'react-router-dom';

import App from './routes/App';
import CodeShowCase from './components/CodeShowCase';
import Portfolio from './routes/Portfolio';
import HomePage from './routes/HomePage';

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