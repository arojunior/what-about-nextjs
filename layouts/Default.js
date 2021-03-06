import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';

const KeyboardListener = dynamic(import('../components/KeyboardListener'), {
  ssr: false
});

const Layout = ({ children }) => (
  <div>
    <Header />
    <main>
      <section className="content">
        <div className="children">{children}</div>
        <KeyboardListener />
      </section>
      <Footer />
    </main>

    {/* global styles */}
    <style jsx global>{`
      html,
      body {
        font-family: Menlo, Monaco, Lucida Console, serif;
        font-size: 22px;
        color: #444;
        background: #eeeeee;
        height: 100%;
      }

      a {
        color: #22bad9;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      li {
        margin: 10px 0;
      }

      img {
        max-width: 100%;
      }

      small {
        font-style: italic;
      }

      .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .children {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        text-align: justify;
        text-justify: inter-word;
      }

      .about,
      .author {
        position: absolute;
        bottom: 0.5em;
        font-size: 13px;
      }

      .about {
        left: 0.5em;
      }

      .author {
        right: 0.5em;
      }
    `}</style>
  </div>
);

export default Layout;
