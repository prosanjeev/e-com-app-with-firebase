import Filter from "../../components/filter/Filter"
import HeroSection from "../../components/heroSection/HeroSection"
// import ProductCard from "../../components/productCard/ProductCard"
import ProductGrid from './ProductGrid'
import Testimonial from '../../components/testimonial/Testimonial'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <Filter/>
    <ProductGrid/>
    <Testimonial/>
    </>
  )
}

export default Home