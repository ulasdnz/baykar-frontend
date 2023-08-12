import Header from "./components/header";
import FirstSection from "./sections/first";
import SecondSection from "./sections/second/second";
import ThirdSection from "./sections/third/index"
import FourthSection from "./sections/fourth";
import FifthSection from "./sections/fifth";
import SixthSection from "./sections/sixth";
import Footer from "./sections/footer";

function App() {
  return (
    <div className="max-sm:overflow-hidden	max-sm:m-0 max-sm:h-[100%]">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  );
}

export default App;
