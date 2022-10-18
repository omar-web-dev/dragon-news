import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import News from './Pages/News';
import Main from './Layout/Main';

export const routes = createBrowserRouter([
    {
        path :'/',
        element : <Main/>,
        children : [
            {path: '/', element : <Home/>},
            {path: 'home', element : <Home/>},
            {path: 'category/:id', element : <Category/>},
            {path: 'news/:id', element : <News/>},
        ],
        // errorElement : 'error page',
    }    
])
