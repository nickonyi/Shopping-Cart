import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function Home() {
  return (
    <main>
      <div className="home">
        <div className="content">
          <h2 className="title">
            <h2 className="title">
              Get your head in the game with the best hooping shoes in the whole
              world
            </h2>
            <h3 className="subtitle">
              "Get your head in the game and your feet in the perfect kicks!
              Explore the best hooping sneakers designed for style, comfort, and
              peak performance on and off the court."
            </h3>
          </h2>
          <Link to="shop">
            <button className="btn">Explore Now</button>
          </Link>
        </div>
        <div className="preview">
          <Card />
        </div>
      </div>
    </main>
  );
}
