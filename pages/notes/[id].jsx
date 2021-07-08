import { useRouter } from 'next/router';

//useRouter is for functional components
//withRouter is for functional components

const Page = () => {
  const router = useRouter();

  const { id } = router.query;

  return <div>Note Page {id}</div>;
};

export default Page;
