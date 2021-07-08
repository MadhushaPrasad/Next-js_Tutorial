/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NoteID = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div
      sx={{
        variant: 'containers.page',
      }}
    >
      <h1>My Note : {id}</h1>
    </div>
  );
};
export default NoteID;
