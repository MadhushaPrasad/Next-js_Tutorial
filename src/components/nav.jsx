/** @jsx jsx */

import { jsx } from 'theme-ui';
import Link from 'next/link';

const Nav = () => {
  <header sx={{ height: '60px', width: '100vw', bg: 'primary' }}>
    <nav
      sx={{
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link href="/">
        <a sx={{ fontWight: 'bold', fontSize: 4, cursor: 'pointer' }}>
          Note App
        </a>
      </Link>
      <Link href="/notes">
        <a sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }}>Notes</a>
      </Link>
    </nav>
  </header>;
};

export default Nav;