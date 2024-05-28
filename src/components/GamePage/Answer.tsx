import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

type AnswerProps = {
    firstAnswerNumber: number,
    secondAnswerNumber: number,
}

const Answer = ({ firstAnswerNumber, secondAnswerNumber }: AnswerProps) => {

    const answer = useSelector((state: RootState) => state.millionaireQuestions.millionaireQuestions[firstAnswerNumber][secondAnswerNumber].answers);

    return (
        <div>
        {answer}
        </div>
    );
};

export default Answer;
