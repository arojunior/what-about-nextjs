import Head from 'next/head'

export default () =>
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    { /* global styles */ }
    <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box;
      }
      body {
        font-family: Menlo, Monaco, Lucida Console, serif;
        font-size: 18px;
        color: #444;
        background: #EEEEEE;
      }
      a {
        color: #22BAD9;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }
      a:hover {
        color: #fff;
        background: #22BAD9;
        text-decoration: none;
      }
      .container {
        flex: none;
        text-align: center;
        padding: 25px 50px;
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
