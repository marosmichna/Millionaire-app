import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import Scoore from "../../components/GamePage/Scoore";
import { useDispatch } from "react-redux";
import data from "../../data/millionaireQuestion.json"
import { loadMillionaireQuestion } from "../../state/millionaireQuestion/millionaireQuestionSlice";
import Question from "../../components/GamePage/Question";
import Answer from "../../components/GamePage/Answer";
import { useEffect, useState } from "react";
import { incrementNumberOfQuestion } from "../../state/numberOfQuestion/numberOfQuestionSlice";

const GamePage = () => {

    const [userChoice, setUserChoice] = useState("");
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    // const [firstNumber, setFirstNumber] = useState(0);
    const [randomSecondQuestion, setRandomSecondQuestion] = useState(Math.floor(Math.random() * 3));

    // let firstNumber = 0;
    // let correctUserAnswer = false;

    const dispatch = useDispatch<AppDispatch>();
    

    // dispatch(loadMillionaireQuestion(data));

    useEffect(() => {
      dispatch(loadMillionaireQuestion(data));
    }, [dispatch]);

    const millionaireQuestions = useSelector((state: RootState) => state.millionaireQuestions.millionaireQuestions);
    const numberOfQuestion = useSelector((state: RootState) => state.numberOfQuestion.numberOfQuestion)

    if (!millionaireQuestions || !millionaireQuestions[numberOfQuestion] || !millionaireQuestions[numberOfQuestion][randomSecondQuestion]) {
      return; 
    }

    const correctAnswer = millionaireQuestions[numberOfQuestion][randomSecondQuestion].correctAnswer;

    const value = millionaireQuestions[numberOfQuestion][randomSecondQuestion].value;

    const handleSubmitQuestion = () => {
      console.log("CLick")

        if (userChoice === correctAnswer) {
          alert("lala")
          dispatch(incrementNumberOfQuestion());
          setRandomSecondQuestion(Math.floor(Math.random() * 3))
          setUserChoice("");
          setClickedIndex(null);
        }
      
    }

    return (
      <div className="w-full h-screen flex mx-auto">
        <div className="grid grid-cols-1 w-full sm:grid-cols-2  mx-10 sm:mx-0">
          <div className="text-white   h-[250px] w-[500px] my-auto sm:ml-auto">
            <Question
              firstQuestionNumber={numberOfQuestion} 
              secondQuestionNumber={randomSecondQuestion}
            />
            <Answer
              firstAnswerNumber={numberOfQuestion}
              secondAnswerNumber={randomSecondQuestion}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
              setUserChoice={setUserChoice}
            />
            <button onClick={handleSubmitQuestion}>Ok</button>
          </div>
          <div className="text-white bg-blue-200  sm:ml-auto">
            <Scoore />
          </div>
        </div>
      </div>
    )
}

export default GamePage;
