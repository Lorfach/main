import { Link, useNavigate, useParams } from "react-router-dom";

export default function HomeworkButton({ hId, h_title }) {
  // const navigate = useNavigate();
  const { subject_ } = useParams();

  // const handleClick = () => {
  //   // if (!subject_ || !hId?.length) return;
  //   navigate(`/${subject_}/${hId[0]}/${hId[1]}`, { state: { h_title } });
  // };

  return (
    <Link 
      to={`/${subject_}/${hId[0]}/${hId[1]}`}
      state={{ h_title }}
      className="cursor-pointer w-11/12 md:w-9/12 hover:contrast-[0.9] 
               transition-all rounded-xl font-medium text-base py-5 
               md:py-3 mx-auto px-6 text-[#8e74ff] bg-[#1e1e1f]">
      Выполнить
    </Link>
  );
}
