import React from 'react';

export const Results = ({ results }) => {
  return (
    <div>
      {requests.map(result => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  )
};
