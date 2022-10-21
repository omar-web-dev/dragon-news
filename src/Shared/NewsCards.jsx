import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaShareAlt, FaRegBookmark, FaStar, FaEye } from "react-icons/fa";

const NewsCards = ({ news }) => {
    const { title, thumbnail_url, _id, total_view, rating, details, author } = news
    // console.log(total_view);
    const { name, img } = author
    return (
        <div>
            <Card className='mb-5'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image roundedCircle style={{ height: "60px" }} src={img} />
                        <div className='px-4 '>
                            <p className='m-0'>{name}</p>
                            <p className='m-0'>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark />
                        <span className='px-2'><FaShareAlt /></span>
                    </div>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={thumbnail_url} />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250) + '...'} <Link to={`news/${_id}`}>Read More</Link></p>
                                :
                                <p> {details}</p>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div className='d-flex align-items-center'>
                        <span className='p-1 pb-2' style={{color : '#df9407'}}><FaStar/></span>
                        <p className='m-0 p-0'>{rating?.number}</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <span className='p-1 pb-2' style={{color : '#df9407'}}><FaEye/></span>
                        <p className='m-0 p-0'>{total_view}</p>
                    </div>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default NewsCards;