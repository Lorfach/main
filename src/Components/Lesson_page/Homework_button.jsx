import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../MyContext";

export default function Homework_button({hId, h_title}){
    const navigate = useNavigate();
    const { subject } = useMyContext();

    return(
        <div onClick={() => navigate(`/${subject}/${hId[0]}/${hId[1]}`, {state:{h_title:h_title}})} className="cursor-pointer w-11/12 md:w-9/12 border-0 hover:contrast-[0.9] transition-all rounded-xl border-[#8e74ff] font-medium text-base py-5 md:py-3 mx-auto px-6 text-[#8e74ff] bg-[#1e1e1f]">
            Выполнить
        </div>
    )
}