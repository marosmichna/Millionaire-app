import WelcomePage from "./pages/WelcomePage/WelcomePage"
import Millionaire from "./assets/millionaire.jpg";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import GamePage from "./pages/GamePage/GamePage";

function App() {

  const userName = useSelector((state: RootState) => state.userName.userName);

  return (
    <div
      className=" w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Millionaire})` }}
    >
      {
        userName ? <GamePage /> : <WelcomePage />
      }
      
    </div>
  )
}

export default App;
