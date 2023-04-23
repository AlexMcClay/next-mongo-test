import Image from "next/image";
import styles from "./page.module.css";
import UserPhotos from "./UserPhotos";
import OtherPhotos from "./OtherPhotos";
import Create from "./Create";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.middle}>
        <Create />
        <UserPhotos />
        <OtherPhotos />
      </div>
    </main>
  );
}
