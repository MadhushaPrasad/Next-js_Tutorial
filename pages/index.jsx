/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui';
import Link from 'next/link';

const App = () => {
  return (
    <div
      sx={{
        height: `calc(100vh - 60px)`,
      }}
    >
      <div
        sx={{
          variant: 'containers.page',
          display: 'flex',
          alignItem: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <h1 sx={{ fontWight: 'bold', fontSize: 8, my: 0 }}>
          This is the really dope note taking App
        </h1>
      </div>
    </div>
  );
};
export default App;
