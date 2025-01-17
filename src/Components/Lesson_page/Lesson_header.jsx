import { memo } from "react";
import { useNavigate } from "react-router-dom"
import { useMyContext } from "../../MyContext";

const Lesson_header = memo(({title, go}) => {

    const {setQuestionNumber} = useMyContext();
    const { subject } = useMyContext();
    const navigate = useNavigate();

    if(!go){
        go = '/'+subject;
    }
    return(
        <div className=" bg-[#1e1e1f] mx-auto flex justify-center px-12 py-6 gap-6 items-start flex-col mb-6 md:mt-7 w-full md:w-10/12">
            <div className="text-xl md:text-2xl font-medium text-[#c5c5c5] break-all text-start">{title}</div>
            <div className="text-[#775afa] cursor-pointer font-medium text-base gap-2 items-center flex" onClick={() => {navigate(go); setQuestionNumber(0)}}>
                <svg width={'24px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 11L7.135 11L10.768 6.64C11.122 6.216 11.064 5.585 10.64 5.232C10.215 4.878 9.585 4.936 9.231 5.36L4.231 11.36C4.192 11.407 4.173 11.462 4.144 11.514C4.12 11.556 4.091 11.592 4.073 11.638C4.028 11.753 4.001 11.874 4.001 11.996C4.001 11.997 4 11.999 4 12C4 12.001 4.001 12.003 4.001 12.004C4.001 12.126 4.028 12.247 4.073 12.362C4.091 12.408 4.12 12.444 4.144 12.486C4.173 12.538 4.192 12.593 4.231 12.64L9.231 18.64C9.43 18.877 9.714 19 10 19C10.226 19 10.453 18.924 10.64 18.768C11.064 18.415 11.122 17.784 10.768 17.36L7.135 13L19 13C19.552 13 20 12.552 20 12C20 11.448 19.552 11 19 11Z" fill="currentColor"></path>
                </svg>
                Назад к уроку
            </div>
      </div>
    )
})

export default Lesson_header;