import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import Scoore from "../../components/GamePage/Scoore";
import { useDispatch } from "react-redux";
import data from "../../data/millionaireQuestion.json"
import { loadMillionaireQuestion } from "../../state/millionaireQuestion/millionaireQuestionSlice";

const GamePage = () => {
    const dispatch = useDispatch<AppDispatch>();
    

    dispatch(loadMillionaireQuestion(data))

    const question = useSelector((state: RootState) => state.millionaireQuestions.millionaireQuestions[0][2].question);
  return (
    <div className="w-full h-screen flex mx-auto">
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 mx-10 sm:mx-0">
        <div className="text-white bg-blue-800 sm:ml-auto">{question ? question : "lalala"}</div>
        <div className="text-white bg-blue-200 sm:ml-auto">
            <Scoore />
        </div>
      </div>
    </div>
  )
}

export default GamePage;
