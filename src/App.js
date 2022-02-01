import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

// Layout
import Layout from './layout/Layout';

// pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ShopDetails from './pages/ShopDetails';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/shop/:id" element={<ShopDetails />} />
        <Route element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
