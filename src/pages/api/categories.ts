// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import wordpressAPIFactory from "../../api/wordpress";

import axios from "axios";
type Data = {
  name: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { getCategories } = wordpressAPIFactory();

  const tags = await getCategories();

  res.status(200).json(tags.data);
}
