import { useNavigate } from 'react-router-dom';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/')}
      className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Back to Shop
    </button>
  );
};
