import { useState } from "react";
import PropTypes from "prop-types";
import { WindowWidthPropType } from "../../hooks/useWindowWidth";

import FILTERS, {
  FILTER_CATEGORIES,
  EMPTY_FILTERS_STATE,
} from "../../constants/filters";
import { sentenceCase } from "../../js/utilities";

import Select from "react-select";
import Search from "./Search";
import Checkbox from "../Checkbox";

export default function Filters({
  filters,
  starred,
  setStarred,
  setFilters,
  setSelectedEntryFromSearch,
  windowWidth,
}) {
  // Expand by default if there are initial filters defined
  const [isFilterGroupExpanded, setIsFilterGroupExpanded] = useState(
    FILTER_CATEGORIES.some((filter) => filters[filter].length > 0)
  );

  const renderLabel = () => {
    if (windowWidth === "xl") {
      return "Filter:";
    }
    return "Filter and search";
  };

  const renderFilterGroup = (filter) => {
    return (
      <Select
        key={filter}
        instanceId={filter}
        className="filter-select"
        options={Object.entries(FILTERS[filter]).map(([key, value]) => ({
          value: key,
          label: value,
        }))}
        isClearable={true}
        isMulti={true}
        placeholder={sentenceCase(filter)}
        styles={{
          menu: (provided) => ({ ...provided, width: "200px" }),
        }}
        onChange={(values) => {
          setFilters({
            ...EMPTY_FILTERS_STATE,
            [filter]: values.map((v) => v.value),
          });
        }}
        value={filters[filter].map((v) => ({
          value: v,
          label: FILTERS[filter][v],
        }))}
      />
    );
  };

  const renderSortButton = () => (
    <button
      className="sort-button"
      onClick={() =>
        setFilters({
          ...filters,
          sort: filters.sort === "Ascending" ? "Descending" : "Ascending",
        })
      }
    >
      <i
        className={`fas fa-caret-${
          filters.sort === "Ascending" ? "up" : "down"
        }`}
        aria-hidden={true}
      ></i>{" "}
      {filters.sort}
    </button>
  );

  return (
    <div className="timeline-filter-wrapper">
      <section className="timeline-filter">
        <button
          className="expand-filters-button"
          aria-controls="filters-expandable"
          aria-expanded={windowWidth === "xl" ? null : isFilterGroupExpanded}
          disabled={windowWidth === "xl"}
          onClick={() => setIsFilterGroupExpanded(!isFilterGroupExpanded)}
        >
          <h2>{renderLabel()}</h2>
          <i className="fas fa-caret-down"></i>
        </button>
        <div
          id="filters-expandable"
          className={`filters-expandable ${
            isFilterGroupExpanded && "expanded"
          }`}
        >
          <div className="filters-group">
            {Object.keys(FILTERS).map(renderFilterGroup)}
            <Checkbox
              checked={starred}
              toggleCheckbox={() => setStarred(!starred)}
              id="starred-filter"
              className="inline-checkbox"
            >
              Starred
            </Checkbox>
          </div>
          <div className="search-group">
            <Search
              filters={filters}
              setSelectedEntryFromSearch={setSelectedEntryFromSearch}
            />
            {renderSortButton()}
          </div>
        </div>
      </section>
    </div>
  );
}

Filters.propTypes = {
  filters: PropTypes.shape({
    theme: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(FILTERS.theme)))
      .isRequired,
    tech: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(FILTERS.tech)))
      .isRequired,
    blockchain: PropTypes.arrayOf(
      PropTypes.oneOf(Object.keys(FILTERS.blockchain))
    ).isRequired,
    sort: PropTypes.string.isRequired,
  }).isRequired,
  starred: PropTypes.bool.isRequired,
  setStarred: PropTypes.func.isRequired,
  setFilters: PropTypes.func.isRequired,
  setSelectedEntryFromSearch: PropTypes.func.isRequired,
  windowWidth: WindowWidthPropType,
};
