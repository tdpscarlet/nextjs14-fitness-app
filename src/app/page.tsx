import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";
import HomeMenu from "@/components/HomeMenu";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeMenu />
      <Banner />
      <HomeContent />
      <Footer />
    </div>
  );
}
