import { useSelector } from "react-redux";
import { RootState } from "../../state/store";


const Scoore = () => {

  const userName = useSelector((state: RootState) => state.userName.userName);

  const numberOfQuestion = useSelector((state: RootState) => state.numberOfQuestion.numberOfQuestion);

  const winnerMoneys = [0, 1000, 2000, 3000, 4000];

  return (
    <div>
        <div className="flex sm:h-screen sm:flex-col sm:justify-between px-8 w-[150px] text-center">
            <div>{userName}</div>
            <div>
                {
                  winnerMoneys.slice().reverse().map((winnerMoney, index) => (
                    <h1 
                      key={index}
                      className={(winnerMoneys.length - 1 - index) === numberOfQuestion ? "font-bold" : "font-normal"}
                    >
                      {winnerMoney}
                    </h1>
                  ))
                }
                <h2>Scoore</h2>
                <p>{numberOfQuestion}</p>
            </div>
        </div>
    </div>
  )
}

export default Scoore;