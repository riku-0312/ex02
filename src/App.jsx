import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">ホームページ</h1>
        </div>
      </div>
    </header>
  );
}

function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
        <img src={props.src} alt="cute birgs!" />
        </figure>
      </div>
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function Gallery(props) {
  const { urls } = props;
  if (urls == null) {
    return <Loading />;
  }
  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-14">
            <Image src={url} />
          </div>

        );
      })}
    </div>
  );
}
function Form() {
    return (
        <div>
      <form>
        <button  type="submit" className="button is-primary" >
            別の画像を表示
        </button>
      </form>
    </div>

    );
}

function Main() {
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    fetchImages("bird").then((urls) => {
      setUrls(urls);
    });
  }, []);
  return (
    <main>
        <section className="section">
        <div className="container">
            <Form />
        </div>
        </section>

        <section className="section">
        <div className="container">  
          <Gallery urls={urls}/>
        </div>
      </section>
    </main>
  );
}

function Article() {
  return (
    <div className="box">
        <div className= "background-color: #f68b39">
        <p>このwebページは、私のホームページです。このホームページを通して多くの人に自分を知ってもらえたらうれしいです。</p>
      <p><a href="https://riku-0312.github.io/introduction03/">自己紹介</a>
      </p>
      <p><a href="https://home.dleague.co.jp/">私の趣味</a>
      </p>
    </div>
    </div>
  );
}

function Footer() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>bird images are retrieved from Birds API</p>
          <p>
            <a href="https://shibe.online">Donate to Birds API</a>
          </p>
        </div>
      </footer>
    );
  }

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Article />
      <Footer />
    </div>
  );
}

export default App;