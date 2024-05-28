import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

type QuestionProps = {
    firstQuestionNumber: number,
    secondQuestionNumber: number,
}

const Question = ({ firstQuestionNumber, secondQuestionNumber }: QuestionProps) => {

    const question = useSelector((state: RootState) => state.millionaireQuestions.millionaireQuestions[firstQuestionNumber][secondQuestionNumber].question);

    return (
        <div>
            {question}
        </div>
    )
}

export default Question;
