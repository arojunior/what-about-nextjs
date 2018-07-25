export default () => (
  <>
    <h1>Fetching data</h1>
    <small>
      Notice that to load data when the page loads, we use getInitialProps which
      is an async static method. It can asynchronously fetch anything that
      resolves to a JavaScript plain Object, which populates props.
    </small>
    <p>
      <img src="/static/img/fetching-data.png" />
    </p>
  </>
);
