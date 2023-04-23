import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query;

  const session = await getServerSession(req, res, authOptions);

  if (req.method === "GET") {
    if (query.user === "me") {
      // Get photos for the current user
      if (!session) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }

      const photos = await prisma.photo.findMany({
        where: {
          user: {
            is: {
              id: session.user.id,
            },
          },
        },
      });
      res.status(200).json(photos);
      return;
    } else {
      const photos = await prisma.photo.findMany({
        where: {
          user: {
            isNot: {
              id: session ? session.user.id : undefined,
            },
          },
        },
      });
      res.status(200).json(photos);
      return;
    }
  } else if (req.method === "POST") {
    if (!session) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const photo = await prisma.photo.create({
      data: {
        user: {
          id: session.user.id,
          name: session.user.name,
        },
        ...req.body,
      },
    });
    res.status(200).json(photo);
    return;
  }

  res.status(405).json({});
  return;
}
