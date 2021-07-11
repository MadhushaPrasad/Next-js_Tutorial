/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui';
import Link from 'next/link';

const Note = ({ notes }) => {
  return (
    <div
      sx={{
        variant: 'containers.page',
      }}
    >
      <h1>My Notes</h1>
      <div
        sx={{
          variant: 'containers.page',
          display: 'flex',
          alignItem: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        {notes.map((note) => (
          <div
            sx={{
              width: '33%',
              p: 2,
            }}
          >
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a
                sx={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <div sx={{ variant: 'containers.card' }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Note;

//create getServerSideProps function
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/note`);
  const { data } = await res.json();

  console.log(data);

  return {
    props: { notes: data },
  };
}
