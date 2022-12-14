import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Main from './Layout/Main';
import Details from './Pages/Details';
import Category from './Pages/Category';
import SingUp from './Pages/SingUp';
import SingIn from './Pages/SingIn';
import ErrorPage from './Pages/ErorrPage';


export const routes = createBrowserRouter([
    {
        path :'/',
        element : <Main/>,

        children : [
            {
                path: '/', element : <Home/>,
                loader : ()=> fetch(`https://dragon-news-server-chi-ten.vercel.app/news`),
            },
            {
                path: 'home', 
                element : <Home/>
            },
            {
                path: 'sing-in', 
                element : <SingIn/>
            },
            {
                path: 'sing-up', 
                element : <SingUp/>
            },
            {
                path: 'category/:id', element : <Category />,
                loader :({params}) => fetch(`https://dragon-news-server-chi-ten.vercel.app/news-category/${params.id}`),
            },
            {
                path: 'news/:id', element : <Details/>,
                loader :({params}) => fetch(`https://dragon-news-server-chi-ten.vercel.app/news/${params.id}`)

            }
        ],
        errorElement : <ErrorPage/>,
    }    
])
