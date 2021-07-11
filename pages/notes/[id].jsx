/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui';
import { useRouter } from 'next/router';

const NoteID = ({ note }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <div
      sx={{
        variant: 'containers.page',
      }}
    >
      <h1>My Note : {note.title}</h1>
    </div>
  );
};
export default NoteID;

//create getServerSideProps function
export async function getServerSideProps({ params, req, res }) {
  const resonse = await fetch(`http://localhost:3000/api/note/${params.id}`);

  if (!resonse.ok) {
    res.writeHead(302, { location: '/notes' });
    res.end();
    return { props: {} };
  }

  const { data } = await resonse.json();

  if (data) {
    return {
      props: { notes: data },
    };
  }
}
