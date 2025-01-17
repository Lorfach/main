import { Link } from 'react-router-dom';
import { memo } from 'react';
import { useMyContext } from '../../MyContext';

function Lesson({ lesson_title, lesson_id, homeworks, process }) {
  const { subject } = useMyContext();

  const isCompleted = process === true;
  const isInProgress = process === 'in_process';

  return (
    <Link to={`/${subject}/${lesson_id}`} state={{ lesson_id, lesson_title, homeworks }} className='border-[#8e74ff] transition-all hover:scale-[1.015] border rounded-xl w-full sm:w-[calc(50%-19px)] md:w-[calc(33%-19px)] p-4 h-[192px] zali flex flex-col cursor-pointer text-[#c5c5c5] bg-[#1e1e1f]'>
        <div className="font-medium text-base text-start font-[GolosText-Medium]">{lesson_title}</div>
        {(isCompleted || isInProgress) ? (
          <div className="flex flex-col justify-end grow-[1]">
            <div className="flex gap-2">
              {isCompleted ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="2" width="20" height="20" rx="10" fill="#00D05A" />
                  <path
                    d="M11.2485 15.4965C11.0245 15.4965 10.8005 15.4115 10.6295 15.2405L8.2565 12.8675C7.9145 12.5255 7.9145 11.9715 8.2565 11.6305C8.5985 11.2885 9.1515 11.2875 9.4935 11.6295L11.2485 13.3845L15.3765 9.2565C15.7185 8.9145 16.2715 8.9145 16.6135 9.2565C16.9555 9.5985 16.9555 10.1525 16.6135 10.4945L11.8675 15.2405C11.6965 15.4115 11.4725 15.4965 11.2485 15.4965Z"
                    fill="white"
                  />
                </svg>
              ) : isInProgress ? (
                <div className="w-6 h-6 bg-[#bfb900] flex justify-center items-center rounded-full text-white">?</div>
              ) : null}
              {isCompleted ? 'Урок пройден' : 'В процессе'}
            </div>
            <div className="w-full bg-[#141417] h-[6px] rounded-full mx-auto mt-4">
              <div
                className={`h-full ${isCompleted ? 'bg-[#00df60]' : isInProgress ? 'bg-[#bfb900]' : ''} rounded-full w-full`}
              />
            </div>
          </div>
        ) : (
          <div className="bg-[#ab97ff] p-[10px] mt-auto text-white text-xs rounded-lg w-5/12 font-[GolosText-Medium]">
            Начать
          </div>
        )}
    </Link>
  );
}

export default memo(Lesson);
