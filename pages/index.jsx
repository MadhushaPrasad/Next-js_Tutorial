import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <Link href="notes">
        <a>Notice</a>
      </Link>
      <br /> <br />
      <Link href="/notes/[id]" as={`/notes/1`}>
        <a>Notice ID 01</a>
      </Link>
    </div>
  );
};

export default Page;
