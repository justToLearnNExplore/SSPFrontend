import React from "react";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Item.css';

const Item = (props) => {
    return (
        <Link to={`/game/${props.id}`}>
            <div className="item">
                <LazyLoadImage
                    src={props.image}
                    alt={props.name}
                    effect="blur"
                />
                <p>{props.name}</p>
                <div className="item-price">
                    <div className="price">
                        {props.price}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Item;
