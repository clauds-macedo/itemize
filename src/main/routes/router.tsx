import { Products } from '@/presentation/pages/Products';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </Router>
  );
};
