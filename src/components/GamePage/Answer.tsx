import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

type AnswerProps = {
    firstAnswerNumber: number,
    secondAnswerNumber: number,
    setUserChoice: (choice: string) => void;
}

const Answers = ({ firstAnswerNumber, secondAnswerNumber, setUserChoice }: AnswerProps) => {

    

    const answers = useSelector((state: RootState) => state.millionaireQuestions.millionaireQuestions[firstAnswerNumber][secondAnswerNumber].answers);

    const handleUserChoice = (answer: string) => {
        setUserChoice(answer);
    }

    return (
        <div>
            {
                answers.map((answer, index) => (
                    <div key={index}>
                        <button onClick={() => handleUserChoice(answer)}>{answer}</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Answers;
