import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
// npm i modern-normalize

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
      background-color: #1f293d;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* h1,h2,h3,h4,h5,h6,p {
    margin: 0; 
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  } */

  /* img {
    display: block;
    max-width: 100%;
    height: auto;
  } */

  /*----------- Title----------*/
@keyframes animate {
  0% {
    color: grey;
    box-shadow: none;
  }
  18% {
    color: grey;
    box-shadow: none;
  }
  20% {
    color: grey;
    box-shadow: none;
  }
  50.1% {
    color: grey;
    box-shadow: none;
  }
  60% {
    color: grey;
    box-shadow: none;
  }
  65.1% {
    color: grey;
    box-shadow: none;
  }
  80% {
    color: grey;
    box-shadow: none;
  }
  90.1% {
    color: grey;
    box-shadow: none;
  }

  92% {
    color: grey;
    box-shadow: none;
  }
  18.1% {
    color: #fff;
    text-shadow: 0 0 10px #ff6b08, 0 0 20px #ff6b08, 0 0 40px #ff6b08,
      0 0 80px #ff6b08, 0 0 160px #ff6b08;
  }
  20.1% {
    color: #fff;
    text-shadow: 0 0 10px #ff6b08, 0 0 20px #ff6b08, 0 0 40px #ff6b08,
      0 0 80px #ff6b08, 0 0 160px #ff6b08;
  }
  30% {
    color: #fff;
    text-shadow: 0 0 10px #ff6b08, 0 0 20px #ff6b08, 0 0 40px #ff6b08,
      0 0 80px #ff6b08, 0 0 160px #ff6b08;
  }
  50% {
    color: #fff;
    text-shadow: 0 0 10px #ff6b08, 0 0 20px #ff6b08, 0 0 40px #ff6b08,
      0 0 80px #ff6b08, 0 0 160px #ff6b08;
  }
  60.1% {
    color: #fff;
    text-shadow: 0 0 10px #ff6b08, 0 0 20px #ff6b08, 0 0 40px #ff6b08,
      0 0 80px #ff6b08, 0 0 160px #ff6b08;
  }
  65% {
    color: #fff;
    text-shadow: 0 0 10px #ff6b08, 0 0 20px #ff6b08, 0 0 40px #ff6b08,
      0 0 80px #ff6b08, 0 0 160px #ff6b08;
  }
  80.1% {
    color: #fff;
    text-shadow: 0 0 10px #ff6b08, 0 0 20px #ff6b08, 0 0 40px #ff6b08,
      0 0 80px #ff6b08, 0 0 160px #ff6b08;
  }
  90% {
    color: #fff;
    text-shadow: 0 0 10px #ff6b08, 0 0 20px #ff6b08, 0 0 40px #ff6b08,
      0 0 80px #ff6b08, 0 0 160px #ff6b08;
  }
  92.1% {
    color: #fff;
    text-shadow: 0 0 10px #ff6b08, 0 0 20px #ff6b08, 0 0 40px #ff6b08,
      0 0 80px #ff6b08, 0 0 160px #ff6b08;
  }
  100% {
    color: #fff;
    text-shadow: 0 0 10px #ff6b08, 0 0 20px #ff6b08, 0 0 40px #ff6b08,
      0 0 80px #ff6b08, 0 0 160px #ff6b08;
  }
}

/* -------Links-------*/
@keyframes animation1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

@keyframes animation2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

@keyframes animation3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

@keyframes animation4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

`;
