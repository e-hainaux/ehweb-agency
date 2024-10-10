import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
