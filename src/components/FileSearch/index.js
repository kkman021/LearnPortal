import React, { useState } from 'react';

const FileSearch = ({ data }) => {
  const [query, setQuery] = useState('');
  // normalize: strip non-alphanumeric & lowercase
  const normalizedQuery = query.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // only search when normalizedQuery ≥ 3 chars, then take up to 5 results
  const results =
    normalizedQuery.length >= 3
      ? data
          .filter(item =>
            item.path
              .replace(/[^a-z0-9]/gi, '')
              .toLowerCase()
              .includes(normalizedQuery)
          )
          .slice(0, 5)
      : [];

  return (
    <div className="col">
      <input
        type="text"
        placeholder="Enter model name to get SUSI install binary (at least 3 characters)"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border rounded px-3 py-2 w-full mb-4"
      />

      <ul>
        {query && normalizedQuery.length < 3 ? (
          <li className="text-gray-500">Please enter at least 3 characters</li>
        ) : results.length > 0 ? (
          results.map((item, idx) => {
            const filename = item.path.split('/').pop();
            return (
              <li key={idx} className="mb-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {filename}
                </a>
              </li>
            );
          })
        ) : normalizedQuery.length >= 3 ? (
          <li className="text-gray-500">No matching results found find on <a href="https://github.com/ADVANTECH-Corp/SUSI/" target='_blank'>GitHub</a></li>
        ) : null}
      </ul>
    </div>
  );
};

export default FileSearch;
