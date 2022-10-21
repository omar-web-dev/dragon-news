import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCards from '../Shared/NewsCards';

const Home = () => {
  const allNews = useLoaderData()
  // console.log(allNews);
  return (
    <div>
      {allNews.map(news => <NewsCards key={news._id} news={news}> </NewsCards>)}
    </div>
  );
};

export default Home;