import { useOutletContext, useParams } from 'react-router-dom';
import { mainSneakers, otherSneakers } from '../data/sneakers';
import { useState } from 'react';

export default function CardPage() {
  const { addItem } = useOutletContext();
  const { title } = useParams();
  const allSneakers = [...mainSneakers, ...otherSneakers];
  const { price, image, description } = allSneakers.find(
    (sneaker) => sneaker.title === title
  );
  const [amount, setAmount] = useState(1);

  return (
    <main>
      <div className="card-page">
        <img src={image} alt="" className="image" />
        <div className="content">
          <div className="about">
            <h2 className="title">{title}</h2>
            <p className="price">{price}</p>
          </div>
          <div className="description">{description}</div>
        </div>
      </div>
    </main>
  );
}
