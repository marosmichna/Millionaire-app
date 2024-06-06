import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

type QuestionProps = {
    firstQuestionNumber: number,
    secondQuestionNumber: number,
}

const Question = ({ firstQuestionNumber, secondQuestionNumber }: QuestionProps) => {

    const question = useSelector((state: RootState) => state.millionaireQuestions.millionaireQuestions[firstQuestionNumber][secondQuestionNumber].question);

    return (
        <div className="bg-gradient-to-r from-blue-800 to-[#070c34] px-5 py-4 text-center rounded-lg font-bold">
            {question}
        </div>
    )
}

export default Question;
