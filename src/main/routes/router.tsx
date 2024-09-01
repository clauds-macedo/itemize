import { Cart } from '@/presentation/pages/Cart';
import { Products } from '@/presentation/pages/Products';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};
