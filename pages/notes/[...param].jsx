import { useRouter } from 'next/router';

//useRouter is for functional components
//withRouter is for functional components

const Page = () => {
  const router = useRouter();

  // notes/1/2/3

  const { param } = router.query;
  console.log(param);

  return <div>Note Page</div>;
};

export default Page;
