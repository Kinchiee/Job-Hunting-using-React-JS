import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ path, element: Component }) {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    return isAuthenticated === 'true' ? (
      <Route path={path} element={<Component />} />
    ) : (
      <Navigate to="/login" replace />
    );
  }

export default PrivateRoute