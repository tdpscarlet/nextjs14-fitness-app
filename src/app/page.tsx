import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <HomeContent />
      <Footer />
    </div>
  );
}
