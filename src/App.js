
import BookingContainer from "./components/bookingComponent/BookingContainer";
import FAQMain from "./components/faqComponents/FAQMain";
import MainBody from "./components/mainBody/MainBody";
import './App.css'
import FooterContainer from "./components/foooter/FooterContainer";
import HeadContainer from "./components/head/HeadContainer";
import NavContainer from "./components/nav/NavContainer";


function App() {
  return (
    <div className="bg-white p-1 lg:p-5 ">
 
   <NavContainer />
   <HeadContainer />
   <MainBody />
   <FAQMain />
   <BookingContainer />
   <FooterContainer />
    </div>
  );
}

export default App;
