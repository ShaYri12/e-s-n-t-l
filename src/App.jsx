import "./App.css";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Products from "./components/Products";
import Services from "./components/Services";
import CustomSlider from "./components/Slider";
import TextArea from "./components/TextArea";

function App() {
  return (
    <div className="bg-[#fafafa]">
      <Header />
      <main className="border-x-[1px] border-x-[#efefef] border-dashed">
        <Categories />
        <Products />
        <TextArea />
        <Services />
        <Partners />
        <CustomSlider />
      </main>
      <Footer />
    </div>
  );
}

export default App;
