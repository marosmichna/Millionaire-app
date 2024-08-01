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
import ConfirmModal from "../../components/Modal/ConfirmModal";
import { H1 } from "../../components/ui/H1";

const GamePage = () => {

    const [userChoice, setUserChoice] = useState("");
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const [randomSecondQuestion, setRandomSecondQuestion] = useState(Math.floor(Math.random() * 3));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isGameActive, setIsGameActive] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const dispatch = useDispatch<AppDispatch>();
    
    useEffect(() => {
      dispatch(loadMillionaireQuestion(data));
    }, [dispatch]);

    const millionaireQuestions = useSelector((state: RootState) => state.millionaireQuestions.millionaireQuestions);
    const numberOfQuestion = useSelector((state: RootState) => state.numberOfQuestion.numberOfQuestion)

    if (!millionaireQuestions || !millionaireQuestions[numberOfQuestion] || !millionaireQuestions[numberOfQuestion][randomSecondQuestion]) {
      return; 
    }

    const correctAnswer = millionaireQuestions[numberOfQuestion][randomSecondQuestion].correctAnswer;

    const handleSubmitQuestion = () => {
      setIsModalOpen(true);
    }

    const handleConfirm = () => {
        setIsModalOpen(false);
        if (userChoice === correctAnswer) {
            dispatch(incrementNumberOfQuestion());
            setRandomSecondQuestion(Math.floor(Math.random() * 3));
            setUserChoice("");
            setClickedIndex(null);
        } else {
          setIsGameActive(false);       
        }
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    if (!isGameActive) {
      return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-blue-200 p-4 text-center rounded-md">
              <H1>Hra skončila. Prehral si. 🥺</H1>
              <button 
                className="bg-blue-400 px-2 py-4 rounded-lg mt-2 hover:bg-blue-100"
                onClick={() => window.location.reload()}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Znovu načítať hru {isHovered ? "😃" : "😉"}
              </button>
            </div>
        </div>
    );
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
            <button 
              className="mt-6 bg-gradient-to-r from-blue-800 to-[#070c34] py-2 w-[200px] rounded-lg hover:from-green-400 hover:to-green-500]"
              onClick={handleSubmitQuestion}
            >
              Potvrdiť odpoveď
            </button>
          </div>
          <div className="text-white sm:ml-auto">
            <Scoore />
          </div>
        </div>
        <ConfirmModal 
          isOpen={isModalOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </div>
    )
}

export default GamePage;
