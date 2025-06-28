/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";

const containerStyles = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue';
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: #88d5f8 #fff;
  }

  body {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    background-image: url('assets/texture.svg');
  }
`;

const contentStyles = css`
  max-width: 900px;
  width: 40%;

  @media (width <= 700px) {
    width: 70%;
  }

  @media (width <= 650px) {
    width: 70%;
    zoom: 0.7;
  }

  @media (width <= 400px) and (orientation: landscape) {
    width: 70%;
    zoom: 0.4;
  }

  h2 {
    margin-bottom: 1rem;
    background-color: #e9e9e9;
    padding: 0.5rem;
  }

  summary {
    display: flex;
    justify-content: space-between;
    background-color: #e9e9e9;
    padding: 0.5rem;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }

  summary::marker {
    content: '';
  }

  details[open] summary::after {
    content: '🔓';
  }

  summary::after {
    content: '🔒';
  }

  .img {
    zoom: 0.5;
  }

  .img2 {
    zoom: 0.8;
  }

  .container-details {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }

  p {
    background-color: #fff4;
    backdrop-filter: blur(4px);
    padding: 0.5rem;
  }

  img,
  video {
    max-width: 100%;
  }
`;

const App = () => {
  useEffect(() => {
    const details = document.querySelectorAll("details");
    details.forEach(detail => {
      detail.addEventListener("toggle", () => {
        if (detail.open) {
          details.forEach(other => {
            if (other !== detail && other.open) other.open = false;
          });
        }
      });
    });
  }, []);

  return (
    <div css={containerStyles}>
      <main css={contentStyles}>
        <h2>@media (hover: hover)</h2>
        <section className="container-details">
          <details>
            <summary>Support ?</summary>
            <p>
              <img src="assets/support.avif" alt="Support Can I Use" />
            </p>
          </details>
          <details>
            <summary>Why this property is helpful?</summary>
            <p>
              This property determines whether hover interactions are supported,
              allowing us to simulate hover states on mobile devices and dynamically
              adjust animations based on hover capability.
            </p>
          </details>
          <details>
            <summary>Example with hover (desktop)</summary>
            <p>
              <img className="img" src="assets/hover.avif" alt="With Hover" />
              <video src="assets/with-hover.mp4" autoPlay muted loop></video>
            </p>
          </details>
          <details>
            <summary>Example without hover (phone)</summary>
            <p>
              <img
                className="img"
                src="assets/without-hover.avif"
                alt="Without Hover"
              />
              <video src="assets/without-hover.mp4" autoPlay muted loop></video>
            </p>
          </details>
        </section>
      </main>
    </div>
  );
};

export default App;
