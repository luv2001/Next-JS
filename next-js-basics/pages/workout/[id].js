/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/dist/client/router";
export default function Workout({ workout }) {
  const router = useRouter();
  const { id } = router.query;
  const mussules = workout.mussules;
  const image = workout.image;
  const favExercise = workout.favExercise;
  console.log(image);

  return (
    <>
      <h1>Today is my {id} day</h1>
      <h1>I am doing these Mussules : {mussules}</h1>
      <h1>Fav Exercise : {favExercise}</h1>
      <img alt="puahDayImage" src={image} style={{ width: "500px" }} />
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
    props: { workout: data },
  };
}

// export async function getStaticProps({ params }) {
//   const res = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { workout: data },
//   };
// }

// export async function getStaticPaths({ params }) {
//   const res = await fetch(`http://localhost:3000/workout.json`);
//   const data = await res.json();

//   console.log(` Oi Oi Oi : ${data}`);

//   const paths = data.map((post) => ({
//     params: { id: post.id },
//   }));

//   return { paths, fallback: false };
// }
