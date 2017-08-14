import Head from './Head'

const Layout = ({ children }) =>
  <div>
    { /* global styles and meta tags */ }
    <Head />
    <div className="container">
      {children}
    </div>
  </div>

  export default Layout
