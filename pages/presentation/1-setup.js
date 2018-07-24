import Layout from '../../layouts/Default';
import Highlight from 'react-highlight';

const Setup = () => (
  <Layout title="Setup">
    Install
    <Highlight className="bash">
      {`
mkdir hello-next
cd hello-next
npm init -y
npm install --save react react-dom next
mkdir pages
      `}
    </Highlight>
    Configure package.json
    <Highlight className="json">
      {`
{
"scripts": {
  "dev": "next"
  }
}
      `}
    </Highlight>
    Run
    <Highlight className="bash">
      {`
npm run dev
      `}
    </Highlight>
  </Layout>
);

export default Setup;
