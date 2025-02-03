import { useEffect, useState } from "react";

type Program = {
  title: string;
  poster: string;
  synopsis: string;
  country: string;
  year: number;
};

export default function Programs() {
  const [programs, setPrograms] = useState<Program[] | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((response) => response.json())
      .then((data) => {
        console.info(data);
        setPrograms(data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!programs) return <p>Loading...</p>;

  return (
    <>
      <h1>Programs</h1>
      {programs.length > 0 ? (
        programs.map((program) => {
          return (
            <article key={program.title}>
              <img src={program.poster} alt={program.title} />
              <h2>{program.title}</h2>
              <p>{program.synopsis}</p>
            </article>
          );
        })
      ) : (
        <p>Aucun programme</p>
      )}
    </>
  );
}
