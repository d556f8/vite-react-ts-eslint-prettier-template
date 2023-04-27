import logo from '@Assets/logo.svg';
import React, { useState } from 'react';

const Hello = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '50px',
      }}
    >
      <img src={logo} alt='Logo' style={{ height: '150px' }} />
      <ul
        style={{
          padding: 0,
          listStyle: 'none',
          fontSize: '1.6rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <li>🚀 Vite</li>
        <li>🔥 React</li>
        <li>📖 TypeScript</li>
        <li>🔨 Eslint</li>
        <li>💅 Prettier</li>
      </ul>
      <span style={{ fontSize: '5rem' }}>{count}</span>
      <button className='counter' onClick={() => setCount(count + 1)}>
        Count!
      </button>
      <p>Don't forgot to install Eslint and Prettier in your VSCode</p>
      <div>
        <a
          style={{ color: '#F24C4C' }}
          target='_blank'
          href='https://github.com/d556f8/vite-react-ts-eslint-prettier-template'
          rel='noreferrer'
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Hello;
