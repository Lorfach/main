import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import HomeworkButton from "./Lesson_page/Homework_button";
import LessonHeader from "./Lesson_page/Lesson_header";
import { Video } from "./Lesson_page/Video";
import { apiRequest } from "../api";

export default function LessonPage() {
  const { lessonId, homeworkId, subject_ } = useParams();
  const { state } = useLocation();
  const [data, setData] = useState(null);
  const [title, setTitle] = useState(state?.lesson_title || "");
  const hasFetched = useRef(false);

  const fetchData = useCallback(async () => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    try {
      const response = await apiRequest("question_months", {
        body: JSON.stringify({ folder: lessonId, [subject_]: "TRUE" }),
      });
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [lessonId, subject_]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="max-w-[1280px] mx-auto">
      <LessonHeader title={data?.title || title} go={null} />

      {data?.blocks?.[0] && (
        <Video YT_url={data.blocks[0].youtube} RU_url={data.blocks[0].rutube} />
      )}

      {!homeworkId && data?.homeworks && (
        <div className="mt-11 w-11/12 md:w-8/12 py-5 md:py-7 mx-auto border border-[#8e74ff] bg-[#141417] rounded-xl gap-6 flex flex-col">
          <div className="text-2xl font-semibold text-[#c5c5c5] flex items-center justify-center">
            Домашняя работа
          </div>

          {data.homeworks.map((homework) => (
            <HomeworkButton
              key={`${lessonId}-${homework}`}
              hId={[lessonId, homework]}
              h_title={data.title || title}
            />
          ))}
        </div>
      )}
    </div>
  );
}