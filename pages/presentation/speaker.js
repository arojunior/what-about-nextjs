import axios from 'axios';

const Speaker = ({ name, avatar_url, html_url }) => (
  <>
    <h1>Speaker</h1>
    <img src={avatar_url} style={{ borderRadius: `50%`, width: `30%` }} />
    <br />
    {name}
    <br />
    <a href={html_url} target="_blank">
      {html_url}
    </a>
    <br />
    Fullstack Developer at Segware
  </>
);

Speaker.getInitialProps = async () => {
  const { data } = await axios.get('https://api.github.com/users/arojunior');
  return data;
};

export default Speaker;
