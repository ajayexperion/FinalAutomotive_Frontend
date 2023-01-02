import PropTypes from 'prop-types';
import MainNavigation from './MainNavigation';

function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: <>Default</>,
};

export default Layout;
