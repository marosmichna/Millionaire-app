import { useSelector } from "react-redux";
import { RootState } from "../../state/store";


const Scoore = () => {

  const userName = useSelector((state: RootState) => state.userName.userName);

  const numberOfQuestion = useSelector((state: RootState) => state.numberOfQuestion.numberOfQuestion);

  const winnerMoneys = [0, 1000, 2000, 3000, 4000, 5000];

  return (
    <div>
        <div className=" bg-gradient-to-r from-blue-800 to-[#070c34] flex sm:h-screen sm:flex-col sm:justify-between px-8 w-[150px] text-center">
            <div>{userName}</div>
            <div>
                {
                  winnerMoneys.slice().reverse().map((winnerMoney, index) => (
                    <h1 
                      key={index}
                      className={(winnerMoneys.length - 1 - index) === numberOfQuestion ? "font-bold bg-gradient-to-r from-orange-800 to-[#80ff02]" : "font-normal"}
                    >
                      {winnerMoney}
                    </h1>
                  ))
                }
                <h2>Suma</h2>
            </div>
        </div>
    </div>
  )
}

export default Scoore;