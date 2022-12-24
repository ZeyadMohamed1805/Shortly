import './App.css';
import { Nav } from './Components/Nav/Nav';
import { Home } from './Components/Home/Home';
import { Link } from './Components/Link/Link';
import { Stats } from './Components/Stats/Stats';
import { Boost } from './Components/Boost/Boost';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Link />
      <Stats />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
