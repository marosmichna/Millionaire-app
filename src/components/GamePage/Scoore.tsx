import { useSelector } from "react-redux";
import { RootState } from "../../state/store";


const Scoore = () => {

  const userName = useSelector((state: RootState) => state.userName.userName);

  const winnerMoneys = [3000, 2000, 1000]

  return (
    <div>
        <div className="flex sm:h-screen sm:flex-col sm:justify-between px-8 w-[150px] text-center">
            <div>{userName}</div>
            <div>
                {
                  winnerMoneys.map((winnerMoney, index) => (
                    <h1 key={index}>{winnerMoney}</h1>
                  ))
                }
                <h2>Scoore</h2>
            </div>
        </div>
    </div>
  )
}

export default Scoore;