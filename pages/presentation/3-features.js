import Layout from '../../layouts/Default';

export default () => (
  <Layout title="Features">
    <ul>
      <li>Server-rendered by default</li>
      <li>Automatic code splitting for faster page loads</li>
      <li>Simple client-side routing (page based)</li>
      <li>
        Webpack-based dev environment which supports Hot Module Replacement
        (HMR)
      </li>
      <li>Able to implement with Express or any other Node.js HTTP server</li>
      <li>Customizable with your own Babel and Webpack configurations </li>
    </ul>
  </Layout>
);
