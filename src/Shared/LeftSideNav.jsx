import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categorize, setCategorize] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/news-category')
        .then(res => res.json())
        .then(data => setCategorize(data))
    },[])
    return (
        <div>
            <h1>Category {categorize.length}</h1>
            {categorize.map(category => <li key={category.id}><Link to={`category:${category.id}`} > {category.name} </Link></li>)}
            
        </div>
    );
};

export default LeftSideNav;