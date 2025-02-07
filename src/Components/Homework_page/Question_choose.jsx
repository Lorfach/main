import { memo, useCallback, useRef } from "react";
import { useMyContext } from "../../MyContext";
import Choose_element from "./Choose_element";

const QuestionChoose = memo(({ questions }) => {
  const { setQuestionNumber, questionNumber, setAnswerInput } = useMyContext();
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const wasDragging = useRef(false);

  const handleDecrement = () => {
    setQuestionNumber((index) => {
      const newIndex = Math.max(index - 1, 0);
      scrollToQuestion(newIndex);
      return newIndex;
    });
  };
  
  const handleIncrement = () => {
    setQuestionNumber((index) => {
      const newIndex = Math.min(index + 1, questions.length - 1);
      scrollToQuestion(newIndex);
      return newIndex;
    });
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    wasDragging.current = false;
    startX.current = e.pageX;
    scrollStart.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const deltaX = e.pageX - startX.current;
    scrollRef.current.scrollLeft = scrollStart.current - deltaX;
    if (Math.abs(deltaX) > 5) wasDragging.current = true;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  const handleQuestionClick = useCallback(
    (index) => {
      if (!wasDragging.current && index !== questionNumber) {
        setQuestionNumber(index);
        setAnswerInput(false);
        scrollToQuestion(index);
      }
    },
    [questionNumber, setQuestionNumber, setAnswerInput]
  );

  const scrollToQuestion = (index) => {
    const questionWidth = 64; // Ширина одного элемента, включая отступы (примерное значение)
    const containerWidth = scrollRef.current.offsetWidth;
    const scrollPosition = Math.max(
      0,
      index * questionWidth - containerWidth / 2 + questionWidth / 2
    );
    scrollRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-auto flex w-11/12 md:w-10/12 relative bg-[#1e1e1f] mt-5 py-5 px-20 gap-6 shadow rounded-xl">
      {/* Left Arrow */}
      <div
        onClick={handleDecrement}
        className="flex absolute left-5 items-center justify-center w-10 h-10 rounded-full border-2 border-[#3b3b3c] text-[#8e74ff] cursor-pointer"
      >
        <svg
          className="rotate-180"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.91 19.92L15.43 13.4c.77-.77.77-2.03 0-2.8L8.91 4.08"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      </div>

      {/* Scrollable Questions */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scr text-[#c5c5c5] select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >
        <div className="inline-flex gap-6">
          {questions.map((e, index) => {
            // console.log(e.correct);
            
            return <Choose_element
              key={index}
              onClick={handleQuestionClick}
              index={index}
              correct={e.correct}
              order_id={e.order_id}
              isActive={index === questionNumber}
            />
          })}
        </div>
      </div>

      {/* Right Arrow */}
      <div
        onClick={handleIncrement}
        className="flex absolute right-5 items-center justify-center w-10 h-10 rounded-full border-2 border-[#3b3b3c] text-[#8e74ff] cursor-pointer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M8.91 19.92L15.43 13.4c.77-.77.77-2.03 0-2.8L8.91 4.08"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      </div>
    </div>
  );
});

export default QuestionChoose;
