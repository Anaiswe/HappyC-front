// import { useState } from "react";
const Pagination = ({ skip, setSkip }) => {
  return (
    <div className="button-page">
      <button onClick={() => setSkip(skip - 1)}>← Page précédente</button>
      <button onClick={() => setSkip(skip + 1)}>Page suivante →</button>
    </div>
  );
};

export default Pagination;
