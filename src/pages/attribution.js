import PropTypes from "prop-types";
import useGA from "../hooks/useGA";

import { getAttribution } from "../db/attribution";

import CustomHead from "../components/CustomHead";
import BackBar from "../components/BackBar";
import ExternalLink from "../components/ExternalLink";
import Footer from "../components/Footer";
import SimpleHeader from "../components/SimpleHeader";

export async function getServerSideProps() {
  return {
    props: {
      attribution: await getAttribution(),
    },
  };
}

export default function Attribution({ attribution }) {
  useGA();

  return (
    <>
      <CustomHead
        title="Attribution – Web3 is Going Just Great"
        description="Attribution for text, icons, and images used in the Web3 is Going Just Great project"
        urlPath="attribution"
      />
      <SimpleHeader className="attribution-header">Attribution</SimpleHeader>
      <BackBar />
      <div className="content-wrapper">
        <article className="generic-page longform-text">
          <p>
            Text is licensed under the{" "}
            <ExternalLink
              rel="license"
              href="http://creativecommons.org/licenses/by/3.0/deed.en_US"
            >
              Creative Commons Attribution 3.0 Unported License
            </ExternalLink>
            . Feel free to reuse posts on this site under those terms.
          </p>
          <p>
            There doesn't seem to be a great way to convey this with a license,
            but under <i>no</i> circumstance do I wish for my work to be used in
            NFTs, or in any other crypto projects. Do whatever else with it you
            want. If someone claims to have gotten consent from me to make NFTs
            that incorporate text/screenshots/links/etc. to this project,
            they're lying.
          </p>
          <p>
            Source code is{" "}
            <ExternalLink href="https://github.com/molly/web3-is-going-great/blob/main/LICENSE">
              MIT-licensed
            </ExternalLink>{" "}
            and available{" "}
            <ExternalLink href="https://github.com/molly/web3-is-going-great">
              on Github
            </ExternalLink>
            .
          </p>
          <p>Most text was written by Molly White.</p>
          <h3>Additional text and entries contributed by</h3>
          <ul>
            {attribution.entries.entries.map((entry, ind) => {
              if (entry.href) {
                return (
                  <li key={`${entry.text}-${ind}`}>
                    <ExternalLink href={entry.href}>
                      <span dangerouslySetInnerHTML={{ __html: entry.text }} />
                    </ExternalLink>
                  </li>
                );
              }
              return (
                <li key={`${entry.text}-${ind}`}>
                  <span>{entry.text}</span>
                </li>
              );
            })}
          </ul>
          <p>
            Thanks also to anyone who{" "}
            <ExternalLink href="https://github.com/molly/web3-is-going-great">
              contributed PRs on GitHub
            </ExternalLink>
            .
          </p>
          <h3>Monkey illustration created from</h3>
          <ul>
            <li>
              <ExternalLink href="https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/5262">
                <span>#5262</span>
              </ExternalLink>
              <span> from OpenSea</span>
            </li>
            <li>
              <ExternalLink href="https://icons8.com/illustrations/illustration/burgundy-123">
                Earth illustration
              </ExternalLink>
              <span> by </span>
              <ExternalLink href="https://icons8.com/illustrations/author/603d1fd6123f9916a4db9ee6">
                <span>Irina Molchanova</span>
              </ExternalLink>
              <span> from </span>
              <ExternalLink href="https://icons8.com/illustrations">
                <span>icons8</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://icons8.com/illustrations/illustration/burgundy-fire-1">
                Flame illustration
              </ExternalLink>
              <span> by </span>
              <ExternalLink href="https://icons8.com/illustrations/author/603d1fd6123f9916a4db9ee6">
                <span>Irina Molchanova</span>
              </ExternalLink>
              <span> from </span>
              <ExternalLink href="https://icons8.com/illustrations">
                <span>icons8</span>
              </ExternalLink>
            </li>
          </ul>
          <h3>Icons</h3>
          <ul>
            <li>
              <ExternalLink href="https://icons8.com/icon/93275/delete-message">
                <span>Delete Message</span>
              </ExternalLink>
              <span> icon by </span>
              <ExternalLink href="https://icons8.com">
                <span>Icons8</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://icons8.com/icon/zq5OEurKP6Ip/robber">
                <span>Robber</span>
              </ExternalLink>
              <span> icon by </span>
              <ExternalLink href="https://icons8.com">
                <span>Icons8</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://icons8.com/icon/9grWu5NGDWPh/rug">
                <span>Rug</span>
              </ExternalLink>
              <span> icon by </span>
              <ExternalLink href="https://icons8.com">
                <span>Icons8</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://icons8.com/icon/36931/sun-glasses">
                <span>Sunglasses</span>
              </ExternalLink>
              <span> icon by </span>
              <ExternalLink href="https://icons8.com">
                <span>Icons8</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://icons8.com/icon/95327/wtf">
                <span>WTF</span>
              </ExternalLink>
              <span> icon by </span>
              <ExternalLink href="https://icons8.com">
                <span>Icons8</span>
              </ExternalLink>
            </li>
          </ul>
          <h3>Images</h3>
          <ul>
            {attribution.images.entries.map(({ text, href }) => (
              <li key={text}>
                <ExternalLink href={href}>
                  <span dangerouslySetInnerHTML={{ __html: text }} />
                </ExternalLink>
              </li>
            ))}
          </ul>
        </article>
      </div>
      <Footer />
    </>
  );
}

Attribution.propTypes = {
  attribution: PropTypes.shape({
    images: PropTypes.shape({
      entries: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        })
      ).isRequired,
    }),
    entries: PropTypes.shape({
      entries: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          href: PropTypes.string,
          sortKey: PropTypes.string,
        })
      ).isRequired,
    }),
  }).isRequired,
};
