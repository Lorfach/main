import { useEffect, useState } from "react";
import Course_card from "./Course_card";
import { apiRequest } from "../../api";

const Courses = () => {
    const [subjects, setSubjects] = useState({});
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await apiRequest("access_to_courses");
                setSubjects(response)
                console.log(response);
            } catch (error) {

            }
        }
        fetchData();
    }, []);
    
    return (
        <>
            <div className="text-3xl mx-auto mt-10 text-[#c5c5c5]">
                <div className="inline-block">
                    Мои курсы
                    <div className="bg-[#775AFA] h-[5px] mt-3 rounded-r-md rounded-l-md w-full"></div>
                </div>
            </div>

            <div className="mx-auto px-10 mt-10 flex justify-center gap-10 flex-wrap">
                {subjects.length ? (
                    subjects.map((subj) => (
                        
                        
                        <Course_card subject={subj} key={subj}/>
                    ))
                ) : null }
            </div>
        </>
    );
};

export default Courses;
