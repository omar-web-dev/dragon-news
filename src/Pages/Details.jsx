import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const Details = () => {
  const newses = useLoaderData()

  return <DetailsCard news={newses} />
};

export default Details;