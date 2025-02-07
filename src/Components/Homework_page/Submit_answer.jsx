import { memo } from "react";
import { useMyContext } from "../../MyContext";
import { useParams } from "react-router-dom";

export const Submit_answer = memo(({ b }) => {
  const { answerInput, sendAnswer, questionNumber, inputBlock } = useMyContext();
  const { homeworkId, lessonId, subject_ } = useParams();

  const currentQuestion = b?.[questionNumber] || {};
  const { id = '', right_answer = [] } = currentQuestion; // answer содержит свойство answer, которое является массивом
  
  // Проверяем, если answer.answer[0] существует, иначе возвращаем пустую строку для сравнения
  let is_answer_correct = false;
  for(const answer_item of right_answer){
    String(inputBlock).toLowerCase() === String(answer_item).toLowerCase() ? is_answer_correct = true : null;
  }

  return (
    <button
      disabled={!answerInput}
      className={`bg-[#6146db] transition-colors mt-10 mb-10 px-6 hover:bg-[#7c63ed] ${!answerInput ? 'disabled:text-[#3b3b3c] disabled:bg-[#1e1e1f]' : ''}`}
      onClick={answerInput ? () => {
        sendAnswer(
          lessonId,
          homeworkId,
          new String(id),
          new String(inputBlock),
          is_answer_correct,
          subject_
        );
      } : null}
    >
      Ответить
    </button>
  );
});