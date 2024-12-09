import { useLoaderData } from "react-router-dom";

type ProgramsArray = {
  id: string;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: string;
}[];

export default function Programs() {
  const series = useLoaderData() as ProgramsArray;

  return (
    <>
      <h1>Programs</h1>
      {series.map((serie) => (
        <figure key={serie.id}>
          <img src={serie.poster} alt="" />
          <figcaption>
            <h2>{serie.title}</h2>
          </figcaption>
        </figure>
      ))}
    </>
  );
}
