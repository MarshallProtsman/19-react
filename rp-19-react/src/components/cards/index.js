import React from "react";

function Card(image) {
    return <> CARD HERE:
    <div className="image-card">
        <img src={image.imageURL} onClick = {image.onClick} id = {image.id} alt=""/>
    </div>
</>
};

export default Card;