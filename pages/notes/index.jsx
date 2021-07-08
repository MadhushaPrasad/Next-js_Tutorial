/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui';
import Link from 'next/link';

const Note = () => {
  const notes = new Array()
    .fill(1)
    .map((e, i) => ({ id: i, title: `This is my note ${i}` }));

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
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}></a>
              <strong>{note.title}</strong>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Note;
