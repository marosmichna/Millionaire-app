import WelcomePage from "./pages/WelcomePage/WelcomePage"
import Millionaire from "./assets/millionaire.jpg";

function App() {

  return (
    <div
      className=" w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Millionaire})` }}
    >
      <WelcomePage />
    </div>
  )
}

export default App
