import {CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality} from '@/sections/index.js'
import Nav from '../components/Nav';

const App = () => (
  <main className="relative" >
    <Nav />
      <Hero />
    <section className="padding">
      <PopularProducts></PopularProducts>
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-y pb-8">
      <Footer></Footer>
    </section>
  </main>
);

export default App;