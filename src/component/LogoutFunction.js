import { Navigate } from 'react-router-dom';
import handleLogout from './Logout';

function Logout() {
    handleLogout();
    return <Navigate to="/login" />;
}

export default Logout