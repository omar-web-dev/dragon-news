import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCards from '../Shared/NewsCards';

const CategoryNews = () => {
    const newses = useLoaderData()
    console.log(newses);
    return (
        <div>
             Category this news {newses.length}
            {newses.map(news => <NewsCards key={news._id} news={news}> </NewsCards>)}
        </div>
    );
};

export default CategoryNews;