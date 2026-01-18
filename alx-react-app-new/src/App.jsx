import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

function App() {
  return (
    <>
    <Header />
    <UserProfile name="John" age={25} bio="Frontend developer" />
    <MainContent />
    <Counter />
    <Footer />
    </>
  );
}

export default App;
