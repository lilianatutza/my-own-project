import "./App.css";
import Form from "./Form";

export default function App() {
  return (
    <div className="App">
      <Form />
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
