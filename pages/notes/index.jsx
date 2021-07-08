import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const id = 2;
  return (
    <div>
      Note Index Page
      <br />
      <button onClick={(e) => router.push('/notes/[id]', `/notes/${id}`)}>
        Go To Note Page 02
      </button>
    </div>
  );
};

export default Page;
