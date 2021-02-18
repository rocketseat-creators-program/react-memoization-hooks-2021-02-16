const Repository = (result) => (
  <div key={result.id} className="repl-list-item rounded p-4">
    <div>
      <a
        href={result.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="repl-link"
      >
        {result.full_name}
      </a>
      {" - "}
      <strong>{result.stargazers_count}</strong>
    </div>
    <p>{result.description}</p>
  </div>
);

export { Repository };