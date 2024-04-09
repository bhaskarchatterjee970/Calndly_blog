import React from 'react';

function Select({ name, padding }) {
  return (
    <button className={`rounded-full ${padding ? 'py-4 px-4' : 'py-2 px-4'} bg-white hover:bg-blue-600 hover:text-white border-2`}>
      {name}
    </button>
  );
}

export default Select;
