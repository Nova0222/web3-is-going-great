import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useGA from "../hooks/useGA";

import { getSortedGlossaryEntries } from "../db/glossary";

import CustomHead from "../components/CustomHead";
import BackBar from "../components/BackBar";
import Footer from "../components/Footer";
import SimpleHeader from "../components/SimpleHeader";

export async function getServerSideProps() {
  return {
    props: {
      glossary: await getSortedGlossaryEntries(),
    },
  };
}

export default function Glossary({ glossary }) {
  useGA();

  const [highlightedEntry, setHighlightedEntry] = useState();
  useEffect(() => {
    if (window.location.hash) {
      setHighlightedEntry(window.location.hash.slice(1));
    }
  }, [setHighlightedEntry]);

  return (
    <>
      <CustomHead
        title="Glossary – Web3 is Going Just Great"
        description="Glossary of common terms pertaining to web3"
        urlPath="glossary"
      />
      <SimpleHeader>Glossary</SimpleHeader>
      <BackBar />
      <div className="content-wrapper">
        <article className="generic-page longform-text">
          <dl>
            {glossary.entries.map((entry) => (
              <div
                key={entry.id}
                className={
                  "glossary-entry" +
                  (entry.id === highlightedEntry ? " highlighted" : "")
                }
              >
                <dt id={entry.id}>{entry.term}</dt>
                <dd>
                  <span
                    dangerouslySetInnerHTML={{ __html: entry.definition }}
                  />
                </dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
      <Footer />
    </>
  );
}

Glossary.propTypes = {
  glossary: PropTypes.shape({
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        term: PropTypes.string.isRequired,
        definition: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};
