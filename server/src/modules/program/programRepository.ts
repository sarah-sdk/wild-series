import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

class ProgramRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT
        id,
        title,
        synopsis,
        poster,
        country,
        year,
        category_id
      FROM
        program
      `,
    );

    return rows as Program[];
  }
}

export default new ProgramRepository();
