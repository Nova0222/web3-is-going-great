import PropTypes from "prop-types";
import clsx from "clsx";
import { EntryPropType } from "../../js/entry";
import { useRouter } from "next/router";
import { copy } from "../../js/utilities";

export default function LeaderboardPaginator({
  hasPrev,
  hasNext,
  entries,
  standalone,
}) {
  const router = useRouter();

  const navigate = ({ cursor, direction }) => {
    router.push({ query: { ...router.query, cursor, direction } });
  };

  const getCursor = (direction) => {
    const index = direction === "next" ? entries.length - 1 : 0;
    return entries[index].id;
  };

  return (
    <div className={clsx("leaderboard-paginator", { standalone: standalone })}>
      {hasPrev && (
        <>
          <button
            onClick={() => {
              const newQuery = copy(router.query);
              delete newQuery.cursor;
              delete newQuery.direction;
              router.push({ query: newQuery });
            }}
          >
            <i className="fas fa-angles-left" title="Go to first page" />
          </button>
          <button
            onClick={() =>
              navigate({
                cursor: getCursor("prev"),
                direction: "prev",
              })
            }
          >
            <i className="fas fa-angle-left" title="Go to previous page" />
          </button>
        </>
      )}
      {hasNext && (
        <button
          onClick={() =>
            navigate({
              cursor: getCursor("next"),
              direction: "next",
            })
          }
        >
          <i className="fas fa-angle-right" title="Go to next page" />
        </button>
      )}
    </div>
  );
}
LeaderboardPaginator.propTypes = {
  entries: PropTypes.arrayOf(EntryPropType).isRequired,
  hasNext: PropTypes.bool.isRequired,
  hasPrev: PropTypes.bool,
  standalone: PropTypes.bool,
};
