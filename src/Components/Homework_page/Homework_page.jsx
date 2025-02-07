import { useLocation, useParams } from "react-router-dom";
import Lesson_header from "../Lesson_page/Lesson_header";
import { memo, useEffect, useState, useRef } from "react";
import './homework_page.css';
import Question_work from "./Question_work";
import Question_choose from "./Question_choose";
import { Submit_answer } from "./Submit_answer";
import { apiRequest } from "../../api";
import { useMyContext } from "../../MyContext";

const Homework_page = memo(() => {
    // console.log(1);
    
    const { lessonId, homeworkId, subject_ } = useParams();
    const { questions, setQuestions } = useMyContext();
    const { state } = useLocation();
    const [title, setTitle] = useState('');
    // let header_title = '';
    
    // const [questions, setQuestions] = useState([]);
    // console.log(questions);
    
    // const [title, setTitle] = useState(state?.h_title || null);

    const hasFetched = useRef(false);

    const fetchData = async () => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        setQuestions([])
        try {
            const response = await apiRequest("question_inside", {
                body: JSON.stringify({ folder: lessonId, question: homeworkId, [subject_]:'TRUE' }),
            });
            // console.log(response);
            // console.log(response.questions);
            setQuestions(response);

            if(!state?.h_title){
                let a = await apiRequest("question_months", {
                    body: JSON.stringify({ folder: lessonId, [subject_]:'TRUE' }),
                });
                setTitle(a.title)
                // console.log(a);
                
            }
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Загружаем данные только один раз
    useEffect(() => {
        fetchData();
    }, [lessonId, homeworkId]);
    // console.log(questions);
    
    return (
        <div className="max-w-[1280px] mx-auto">
            <Lesson_header title={state?.h_title || title} go={`../${subject_}/${lessonId}`} />
            <Question_choose questions={questions} />
            <Question_work />
            <Submit_answer b={questions}/>
        </div>
    );
});

export default Homework_page;
