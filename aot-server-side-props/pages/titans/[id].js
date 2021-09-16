/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/dist/client/router";

export default function titan({ titan }) {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  const name = titan.name;
  const image = titan.image;

  return (
    <>
      <h1>Hello titans this is {id} titan </h1>
      <h1>Name : {name}</h1>
      <h1>CurrentHolder : {titan.currentHolder}</h1>
      <img src={image} />
      <h1>holderBefore : {titan.holderBefore}</h1>
      <h2>{titan.info}</h2>
    </>
  );
}
export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { titan: data },
  };
}
