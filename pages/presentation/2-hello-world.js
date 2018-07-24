import Layout from '../../layouts/Default';
import Highlight from 'react-highlight';

const HelloWorld = () => (
  <Layout title="Hello World?">
    <Highlight className="javascript">
      {`
/* pages/index.js */
export default () => <div>Hello World</div>
        `}
    </Highlight>
  </Layout>
);

export default HelloWorld;
