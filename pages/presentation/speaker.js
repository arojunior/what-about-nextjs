import axios from 'axios';
import Layout from '../../layouts/Default';

const Speaker = ({ name, avatar_url, url, html_url }) => (
  <Layout title="Speaker">
    <img src={avatar_url} style={{ borderRadius: `50%`, width: `30%` }} />
    <br />
    {name}
    <br />
    <a href={url}>{html_url}</a>
    <br />
    Fullstack Developer at Segware
  </Layout>
);

Speaker.getInitialProps = async () => {
  const { data: profile } = await axios.get(
    'https://api.github.com/users/arojunior'
  );
  return profile;
};

export default Speaker;
