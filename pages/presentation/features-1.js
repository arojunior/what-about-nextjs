import Layout from '../../layouts/Default';

export default () => (
  <Layout title="Features">
    1 - (SSR) Server side rendering by default
    <p>
      {' '}
      <small>Which means: no globals (window, document, localStorage...) </small>
    </p>
  </Layout>
);
