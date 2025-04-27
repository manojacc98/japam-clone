import HeroBanner from './components/HeroBanner';
import Categories from './sections/Categories';
// import FeaturedProducts from './sections/FeaturedProducts';
import Bestsellers from './sections/Bestsellers';
import Beads from './sections/Beads';
import RootedTradition from './sections/RootedTradition';
import Trending from './sections/Trending';
import ProductFeatures from './sections/ProductFeatures';
import EnergyStones from './sections/EnergyStones';
import SiddhDelivery from './sections/SiddhDelivery';
import SingleRudrakshaBeads from './sections/SingleRudrakshaBeads';
import ShopByPurpose from './sections/ShopByPurpose';
import Footer from './components/Footer';
import FooterHighlights from './components/FooterHighlights';


// Inside JSX:
<Beads />


export default function Page() {
  return (
    <div>
      <HeroBanner />
      <Categories />
      <Bestsellers />
      <Beads/>
      <RootedTradition />
      <Trending/>
      <ProductFeatures />
      <EnergyStones />
      <SiddhDelivery />
      <SingleRudrakshaBeads />
      <ShopByPurpose />
      <FooterHighlights />
      <Footer />

      {/* <FeaturedProducts /> */}
    </div>
  );
}


