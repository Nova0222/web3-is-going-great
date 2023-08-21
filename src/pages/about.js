import React from "react";
import useGA from "../hooks/useGA";
import Link from "next/link";

import CustomHead from "../components/CustomHead";
import SimpleHeader from "../components/SimpleHeader";
import BackBar from "../components/BackBar";
import ExternalLink from "../components/ExternalLink";
import Footer from "../components/Footer";

export default function WhatIsWeb3() {
  useGA();
  return (
    <>
      <CustomHead
        title="About – Web3 is Going Just Great"
        description="About the Web3 is Going Just Great project"
        urlPath="about"
      />
      <SimpleHeader>About</SimpleHeader>
      <BackBar />
      <div className="content-wrapper">
        <article className="generic-page longform-text">
          <h3>What is this?</h3>
          <p>
            Web3 is Going Just Great is a project to track some examples of how
            things in the blockchains/crypto/web3 technology space aren't
            actually going as well as its proponents might like you to believe.
            The timeline tracks events in cryptocurrency and blockchain-based
            technologies, dating back to the beginning of 2021.
          </p>
          <p>
            This is a personal project of mine, and reflects my own opinions. If
            you are looking for an unbiased descriptor of web3 and related
            technologies, there are short ones in the{" "}
            <Link href="/glossary">Glossary</Link>, but that is not the goal of
            this site. I would recommend Wikipedia for that (and if the pages
            there are lacking, I would strongly encourage you to{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Help:Introduction">
              contribute to them
            </ExternalLink>
            !) If you would like to see a version of this website that takes a
            different approach or covers a different topic, this is all
            open-source, so please feel free to{" "}
            <ExternalLink href="https://github.com/molly/web3-is-going-great">
              fork the code and make your own
            </ExternalLink>
            !
          </p>
          <h3>Who am I?</h3>
          <p>
            I'm Molly White, a software engineer, writer, and critical
            researcher of cryptocurrency and the tech industry more broadly. I
            am a fellow at the Harvard{" "}
            <a href="https://lil.law.harvard.edu/">Library Innovation Lab</a>.
            You can learn more about me on{" "}
            <ExternalLink href="https://www.mollywhite.net/">
              my website
            </ExternalLink>{" "}
            or find me on{" "}
            <ExternalLink href="https://twitter.com/molly0xFFF">
              Twitter
            </ExternalLink>
            .
          </p>
          <p>
            If you are interested, I also have a{" "}
            <ExternalLink href="https://blog.mollywhite.net/blockchain/">
              collection
            </ExternalLink>{" "}
            of longer-form, less sarcastic thoughts on blockchains and web3, and
            I also write a{" "}
            <ExternalLink href="https://newsletter.mollywhite.net/">
              newsletter
            </ExternalLink>
            .
          </p>
          <h3>Privacy and money</h3>
          <p>
            I have a{" "}
            <ExternalLink href="https://www.mollywhite.net/crypto-disclosures">
              disclosure statement
            </ExternalLink>
            . The TL;DR is that I hold no substantial amount of cryptocurrencies
            and no NFTs, and am also not trying to make money off of crypto
            markets doing poorly by shorting the market, etc. I do have a{" "}
            <ExternalLink href="https://newsletter.mollywhite.net/">
              Substack
            </ExternalLink>{" "}
            for people who wish to support my work, and I also accept{" "}
            <Link href="/contribute">donations</Link> for the website. I am a
            paid Fellow at the Harvard Library Innovation Lab.
          </p>
          <p>
            The site does use Google Analytics, mostly for my own curiosity. All
            IP data is anonymized, no advertising features are enabled, and data
            retention is set to the minimum value (14 months). If you would
            rather not be tracked by Google Analytics, there are great
            extensions like{" "}
            <a href="https://en.wikipedia.org/wiki/Privacy_Badger">
              Privacy Badger
            </a>
            , or you can disable JavaScript for this site.
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
}
