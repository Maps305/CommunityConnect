import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import PopularProperties from './components/popularProperties/PopularProperties';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import PropertyDetail from './components/propertyDetail/PropertyDetail';
import Properties from './components/properties/Properties';
import FeaturedProperties from './components/featuredProperties/FeaturedProperties';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Hero />
            <PopularProperties />
            <FeaturedProperties />
            <Newsletter />
            <Footer />
          </>
        } />

        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />

        <Route path='/properties' element={
          <>
            <Navbar />
            <Properties />
            <Footer />
          </>
        } />

        <Route path='/propertyDetail' element={
          <>
            <Navbar />
            <PropertyDetail />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
