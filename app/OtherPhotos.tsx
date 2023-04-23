"use client";

import { Photo } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import PhotoCard from "./PhotoCard";

type Props = {};

const OtherPhotos = (props: Props) => {
  const { data, isLoading, isError, refetch } = useQuery<Photo[]>(
    "OtherPhotos",
    async () => {
      const response = await fetch("/api/photos");
      const data = await response.json();
      return data;
    }
  );

  //   console.log(data);

  useEffect(() => {
    const timeout = setInterval(() => {
      refetch();
      console.log("refetch");
    }, 3000);

    return () => clearInterval(timeout);
  }, [refetch, data]);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  if (data === undefined) return <div>Loading...</div>;

  return (
    <div>
      <h1>Other Photos</h1>
      {data.map((photo) => {
        return <PhotoCard key={photo.id} {...photo} />;
      })}
    </div>
  );
};

export default OtherPhotos;
