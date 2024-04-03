import DemoComponent from "./DemoComponent";
import BookingContainer from "./components/bookingComponent/BookingContainer";
import FAQMain from "./components/faqComponents/FAQMain";
import MainBody from "./components/mainBody/MainBody";
import './App.css'
import FooterContainer from "./components/foooter/FooterContainer";
// import PlanTrial from "./components/mainBody/plan/PlanTrial";


function App() {
  return (
    <div>
   {/* <DemoComponent /> */}
   <MainBody />
   <FAQMain />
   <BookingContainer />
   <FooterContainer />
   {/* <PlanTrial /> */}
    </div>
  );
}

export default App;
