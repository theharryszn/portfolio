import React from "react";

const Dot404 = () => {
  return (
    <main>
      <header className='header'>
        <div className='header-title'>
          <span className='ui-code-snippet'>{"<error>"}</span>
          404
          <span className='ui-code-snippet'>{"</error>"}</span>
        </div>
        <div className='header-body'>
          <span className='ui-code-snippet'>{"<p>"}</span>
          <span className='mb-4 block font-bold'>
            THIS PAGE IS STILL UNDER DEVELOPMENT
          </span>
          <span className='ui-code-snippet'>{"</p>"}</span>
        </div>
      </header>
    </main>
  );
};

export default Dot404;
