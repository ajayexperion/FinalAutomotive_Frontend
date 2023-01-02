import PropTypes from 'prop-types';
import { useContext } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import AuthContext from '../../store/auth-context';

function Wrapper({ children }) {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      {authCtx.isLoggedIn ? { children } : <AuthPage />}
    </div>

  );
}

Wrapper.propTypes = {
  children: PropTypes.element,
};

Wrapper.defaultProps = {
  children: <>Default</>,
};
export default Wrapper;
