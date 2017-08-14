import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({children}) =>
  <div>
    {/* meta tags */}
    <Header />
    <div className="container">
      {children}
    </div>
    <Footer />
    {/* global styles */}
    <style jsx global>{`
      * {
        margin: 0;
      }
      body {
        font-family: Menlo, Monaco, Lucida Console, serif;
        font-size: 18px;
        color: #444;
        background: #eeeeee;
      }
      a {
        color: #22bad9;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      footer {
        font-size: 14px;
        width: 100%;
        bottom: 0;
        position: absolute;
      }
      .pull-left {
        margin: 10px;
        float: left;
      }
      .pull-right {
        margin: 10px;
        float: right;
      }
      .container {
        flex: none;
        text-align: center;
      }
      .main {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
      }
    `}</style>
  </div>

export default Layout
