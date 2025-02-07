import { MathJax, MathJaxContext } from "better-react-mathjax";
import { memo, useState, useCallback, useEffect } from "react";
import "./homework_page.css";
import { useMyContext } from "../../MyContext";
import Input from "./Input";

const QuestionWork = memo(() => {
    const { setAnswerInput, answerInput, questionNumber, setInputBlock, questions } = useMyContext();
    const [showAnswer, setShowAnswer] = useState(false);
    const [userAnswer, setUserAnswer] = useState(null)
    
    const currentQuestion = questions[questionNumber] || {};
    const { order_id = "", description = "", markup = '', right_answer = '', question_comment = '', answer2 = "", correct=null } = currentQuestion;
    
    useEffect(() => {
        setUserAnswer(answer2)
        answer2 ? setAnswerInput(true) : null;
        setInputBlock(answer2);
        const inputElement = document.querySelector(".inpt");
        if (inputElement) {
            inputElement.value = answer2;
        }

        return function cleanup(){
            inputElement.value = '';
            setInputBlock(null);
            setUserAnswer(null);
        }
    }, [answer2, questionNumber, userAnswer]);

    const handleInputChange = useCallback(
        (e) => {
            const inputValue = e.target.value;
            setInputBlock(inputValue);
            setAnswerInput(!!inputValue);
        },
        [setInputBlock, setAnswerInput]
    );

    const toggleShowAnswer = useCallback(() => {
        setShowAnswer((prev) => !prev);
    }, []);

    if (typeof questionNumber !== "number") return null;
    
    return (
        <div className="w-11/12 md:w-10/12 bg-[#1e1e1f] text-[#c5c5c5] mt-5 flex flex-col justify-start mx-auto min-h-10 rounded-xl p-5 pb-7 md:py-11 md:px-14">
            <div className={` flex items-center justify-start text-lg font-[GolosText-Medium] relative question_number ${correct == true ? 'text-[#00df60] question_number_true' : (correct == false ? 'text-[#ff0000] question_number_false' : '')}`}>
                {`Задание № ${order_id || ' ...'}`}
            </div>

            <div>
                {description ? (
                    <MathJax dynamic>
                        <div
                            className="description-html md:text-xl text-base text-start overflow-y-hidden pb-5 overflow-x-auto"
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </MathJax>
                ) : (
                    <p className="text-[#63697a]">Загрузка...</p>
                )}
            </div>

            <div className="w-full mt-8 relative flex items-center">
                <Input inputFunc={handleInputChange} correct={correct}/>
            </div>

            <div className="self-start text-start mt-10">
                <span className="pr-2 text-[#63697a]">Тема: </span>
                {markup || "Загружается..."}
            </div>

            {!!answerInput && userAnswer && (
                <>
                    <button
                        onClick={toggleShowAnswer}
                        className="flex bg-transparent p-0 mt-10 gap-3 text-[#8e74ff] font-[GolosText-Medium]"
                    >
                        <div>Решение</div>
                        <svg
                            className={`transition-transform ${showAnswer ? "-rotate-90" : "rotate-90"}`}
                            width="14"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            />
                        </svg>
                    </button>

                    {showAnswer && (
                        <div>
                            {right_answer && (
                                <div className="mt-10">
                                    <div className="text-start">
                                    <strong>Ответ: </strong> 
                                    <span>{right_answer.join(" / ")}</span>

                                    </div>
                                </div>
                            )}

                            {question_comment && (
                                <div className="bob py-8 px-6 border mt-10 relative border-[#141417] bg-[#181819] rounded-lg ">
                                    <div className="absolute p-2 -top-4 font-[GolosText-Medium] text-sm text-white bg-[#8e74ff] rounded-lg">
                                        Пояснение:
                                    </div>
                                    <div className="overflow-x-auto overflow-y-hidden pb-5">
                                        <MathJax dynamic>
                                            <div
                                                className="answer text-start"
                                                dangerouslySetInnerHTML={{ __html: question_comment }}
                                            />
                                        </MathJax>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
});
const HomeworkPage = ({ b }) => (
    <MathJaxContext>    
        <QuestionWork b={b} />
    </MathJaxContext>
);

export default HomeworkPage;
