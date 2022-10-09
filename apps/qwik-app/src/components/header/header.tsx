import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { GithubLogo } from '../icons/github';
import styles from './header.css?inline';

interface HeaderProps {
  hours: number
}

export default component$((props: HeaderProps) => {
  const { hours } = props;

  const headerBorder = hours < 12 ? "linear-gradient(to right, #032642, #05518e, #0d73c6)" : "linear-gradient(to right, #11a2bf, #255175, #11a2bf)"

  useStylesScoped$(styles);

  return (
    <header style={{background: `${headerBorder}`}}>
      <div class="logo" >
        <a
          style={{
                  background: "linear-gradient(to right, #ed692d, #255175, #ed692d)",
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
          <a href="/crypto">
            Crypto
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
