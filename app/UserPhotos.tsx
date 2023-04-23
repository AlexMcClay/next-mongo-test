"use client";

import { Photo } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

type Props = {};

const UserPhotos = (props: Props) => {
  const { data, isLoading, isError } = useQuery<Photo[]>(
    "userPhotos",
    async () => {
      const response = await fetch("/api/photos?user=me");
      const data = await response.json();
      return data;
    }
  );

  return <div>UserPhotos</div>;
};

export default UserPhotos;
