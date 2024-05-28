import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import Scoore from "../../components/GamePage/Scoore";
import { useDispatch } from "react-redux";
import data from "../../data/millionaireQuestion.json"
import { loadMillionaireQuestion } from "../../state/millionaireQuestion/millionaireQuestionSlice";
import Question from "../../components/GamePage/Question";
import Answer from "../../components/GamePage/Answer";

const GamePage = () => {
    const dispatch = useDispatch<AppDispatch>();
    

    dispatch(loadMillionaireQuestion(data))

    const randomSecondQuestion = Math.floor(Math.random() * 3);

    console.log(randomSecondQuestion);

    
    const answer = useSelector((state: RootState) => state.millionaireQuestions.millionaireQuestions[1][randomSecondQuestion].answers);
    const correctAnswer = useSelector((state: RootState) => state.millionaireQuestions.millionaireQuestions[1][randomSecondQuestion].correctAnswer);
    const value = useSelector((state: RootState) => state.millionaireQuestions.millionaireQuestions[1][randomSecondQuestion].value);
    return (
      <div className="w-full h-screen flex mx-auto">
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 mx-10 sm:mx-0">
          <div className="text-white bg-blue-800 sm:ml-auto">
            <Question
              firstQuestionNumber={0} 
              secondQuestionNumber={randomSecondQuestion}
            />
            <Answer
              firstAnswerNumber={0}
              secondAnswerNumber={randomSecondQuestion}
            />
          </div>
          <div className="text-white bg-blue-200 sm:ml-auto">
            <Scoore />
          </div>
        </div>
      </div>
    )
}

export default GamePage;
