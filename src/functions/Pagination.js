// import { useState } from "react";

// need to fix bug error 304 : GET /?name=&type=&limit=20&skip=undefined 304

const Pagination = ({ skip, setSkip }) => {
  return (
    <div className="button-page">
      <button onClick={() => setSkip(skip - 1)}>← Page précédente</button>
      <button onClick={() => setSkip(skip + 1)}>Page suivante →</button>
    </div>
  );
};

export default Pagination;
