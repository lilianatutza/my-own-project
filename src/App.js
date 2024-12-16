import "./App.css";
import Form from "./Form";
import Intro from "./Intro";


export default function App() {
  return (
    <div className="App">
      <div class="row"> 
        <div class="col-sm-4"><Form /></div>
        <div class="col-sm-4"><Form /></div>
      <div class="col-sm-4"><Intro />
        </div>
        </div>

      <footer>
        This project was codded by{" "}
        <a href="https://github.com/dashboard" target="_blank" rel="noreferrer">
          Liliana Tuta
        </a>
        , is open sourced on{" "}
        <a
          href="https://github.com/lilianatutza/my-own-project"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>{" "}
        and is hosted on
        <a
          href="https://animated-clafoutis-a989e7.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netifly.
        </a>
      </footer>
    </div>
  );
}
