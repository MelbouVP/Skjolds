import React from 'react';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
    
    
    return (
        <div className="shop__item-card">
                <div className="item-card__image">
                    <img src={`http://localhost:8000/${product.image_path}`} alt="Women shoes" />
                    <div className="item-card__image--cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"><path d="M16.5,10,17.981,3.1a.786.786,0,0,0-.731-.973H4.975L4.689.637A.763.763,0,0,0,3.954,0H.75A.774.774,0,0,0,0,.8v.531a.774.774,0,0,0,.75.8H2.934l2.2,11.4a1.881,1.881,0,0,0-.879,1.613A1.807,1.807,0,0,0,6,17a1.807,1.807,0,0,0,1.75-1.859,1.912,1.912,0,0,0-.526-1.328h6.551a1.912,1.912,0,0,0-.526,1.328,1.753,1.753,0,1,0,3.5,0,1.872,1.872,0,0,0-.987-1.674l.172-.806a.786.786,0,0,0-.731-.973H6.816l-.2-1.062h9.161A.761.761,0,0,0,16.5,10Z" fill="#fff"/></svg>
                    </div>
                </div>
                <div className="item-card__description">
                    <h4>{product.name}</h4>
                    <a href="shop/item" className="item-card__action-btn">
                        Browse
                    </a>
                    <p>{ product.price }</p>
                </div>
            </div>
    )
}

export default ProductCard;