import React from "react";
import { Repository } from "./Repository";

export const RepositoryList = React.memo(({ getRepositories }) => {
  const [items, setItems] = React.useState([]);
  const [query, setquery] = React.useState("facebook");

  React.useEffect(() => {
    getRepositories(query)
      .then((res) => res.json())
      .then((data) => setItems((data && data.items) || []));
  }, [getRepositories, query]);

  return (
    <div className="list">
      <button
        className="float-btn-rocket"
        onClick={() => setquery("rocketseat")}
      >
        🚀
      </button>
      <br />
      {items &&
        items.map((result) => <Repository key={result.id} {...result} />)}
    </div>
  );
});
