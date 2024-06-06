import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

type AnswerProps = {
    firstAnswerNumber: number,
    secondAnswerNumber: number,
    clickedIndex: number | null,
    setUserChoice: (choice: string) => void,
    setClickedIndex: (index: number) =>void,
}

const Answers = ({ firstAnswerNumber, secondAnswerNumber, clickedIndex, setUserChoice, setClickedIndex }: AnswerProps) => {

    // const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    

    const answers = useSelector((state: RootState) => state.millionaireQuestions.millionaireQuestions[firstAnswerNumber][secondAnswerNumber].answers);

    const handleUserChoice = (answer: string, index: number) => {
        setUserChoice(answer);
        setClickedIndex(index);
    }

    return (
        <div className="grid grid-cols-2 gap-4 mt-4">
            {
                answers.map((answer, index) => (
                    <div 
                        key={index} 
                        className="flex justify-center "
                    >
                        <button 
                            className={`bg-gradient-to-r from-blue-800 to-[#070c34] py-2 w-[200px] rounded-lg hover:from-orange-600 hover:to-[rgb(255,251,41)] ${clickedIndex === index ? 'from-orange-800 to-[#80ff02]' : ''}`}
                            onClick={() => handleUserChoice(answer, index)}
                        >
                            {answer}
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default Answers;
