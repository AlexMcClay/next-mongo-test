"use client";

import React from "react";

import { useSession, signIn, signOut } from "next-auth/react";

import styles from "./index.module.scss";

type Props = {};

const Header = (props: Props) => {
  const { data: session, status } = useSession();

  return (
    <header className={styles.header}>
      {status === "authenticated" && (
        <span>Signed in as {session.user.email}</span>
      )}
      {status === "unauthenticated" && (
        <button onClick={() => signIn()}>Sign in</button>
      )}
      {status === "authenticated" && (
        <button onClick={() => signOut()}>Sign Out</button>
      )}
    </header>
  );
};

export default Header;
