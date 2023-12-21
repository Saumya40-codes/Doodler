import React from 'react';

interface closeBtnProps {
    clear: () => void;
}

const CloseBtn = ({ clear }: closeBtnProps) => {
  return (
    <div>
      <div className="block flex-col items-center">
        <button className="border border-black rounded-md px-2 py-1" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default CloseBtn;
