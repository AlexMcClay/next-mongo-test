import React from "react";
import Card from "@/components/Surfaces/Card";
import { Photo } from "@prisma/client";

const PhotoCard = ({ name, user, caption, url }: Photo) => {
  return (
    <Card>
      <img src={url} alt={name} />
      <h1>{name}</h1>
      <h4>{caption}</h4>
      <p>
        By: <b>{user.name}</b>
      </p>
    </Card>
  );
};

export default PhotoCard;
