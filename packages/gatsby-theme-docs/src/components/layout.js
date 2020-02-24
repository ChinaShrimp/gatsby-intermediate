import React from 'react';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header>Gatsby Theme Docs</header>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
