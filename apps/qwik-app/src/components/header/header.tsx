import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { GithubLogo } from '../icons/github';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo" >
        <a
          style={{ background: "linear-gradient(to right, #000000, #F53D3D)",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "0% 0%",
                  WebkitBackgroundClip: 'text',
                  backgroundClip: "text",
                  color: "transparent",
                  fontWeight: "bold",
                  marginTop: "0.5rem"
                }}
          href="/">
          Justin Mills Website
        </a>
      </div>
      <ul>
        <li>
          <a href="/weather">
            Weather
          </a>
        </li>
        <li>
          <a href="/resume">
            Resume
          </a>
        </li>
        <li>
          <a href="https://github.com/jdev86" target="_blank" style={{ verticalAlign: "middle", marginLeft: "-12px" }}>
            <GithubLogo />
          </a>
        </li>
      </ul>
    </header>
  );
});
