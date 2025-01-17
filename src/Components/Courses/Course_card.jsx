import { useNavigate } from 'react-router-dom';
import './course_card.css'
import { useCallback } from 'react';
import { useMyContext } from '../../MyContext';

const Course_card = ({subject}) => {    
    const {setSubject} = useMyContext()
    const urls = {
        rus:{
            card_bg: { backgroundColor: 'rgb(255, 191, 30)', backgroundImage: "url(https://storage.yandexcloud.net/topschool.backet/public/background_desktop_teacher_file_id/a40ac387-65e1-4edd-a96f-6812498d4d4f.png)"},
            card_ico: 'https://storage.yandexcloud.net/topschool.backet/public/course_cover/f6e81d23-18ff-4f79-9922-71402964033f.png',
            title: 'Годовой курс «Новый русский 2024/2025» c Машей Птипцей'
        },
        math:{
            card_bg: {backgroundImage: 'url(https://storage.yandexcloud.net/topschool.backet/public/background_desktop_teacher_file_id/e23ae795-e19a-4acd-b6af-ab28b4e90691.png)', backgroundColor: 'rgb(170, 45, 241)'},
            card_ico: 'https://storage.yandexcloud.net/topschool.backet/public/course_cover/4b7bba1e-be32-4047-ac77-1c79671e3882.png',
            title: 'Годовой курс «Легион с Ильичом 2024/2025»'
        }
    }
    
    const navigate = useNavigate();
    const goto = useCallback(() => {
        setSubject(subject)
        navigate(`/${subject}`)
    }, []);

    return (
        <div className="bg-[#1a181e] w-full sm:w-5/12 md:w-5/12 lg:w-4/12 xl:w-3/12 h-[340px] flex flex-col rounded-3xl select-none cursor-pointer" onClick={goto}>
            <div className="p-3 w-full h-[84%] overflow-hidden bg-[#1E1E1F] relative rounded-2xl">
                <div className="rounded-2xl zxczxc overflow-hidden  relative h-[70%] bg-center bg-contain flex justify-center items-center" style={urls[subject].card_bg}>
                    <img className="w-36  h-36  z-10 relative rounded-xl shadow-2xl" src={urls[subject].card_ico}  alt="" srcSet="" />
                </div>
                
                <div className='text-[#c5c5c5] font-[GolosText-Medium] truncate mt-6 whitespace-nowrap px-2'>
                    {urls[subject].title}
                </div>
            </div>

            <div className='flex justify-between items-center px-4 flex-grow text-xs text-[#775afa] hover:text-[#69b1ff] transition-colors font-[GolosText-Medium]'>
                <div>Посмотреть</div>
                <div className='h-full w-6 flex items-center'>
                    <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.76 16.6l5.433-5.433a1.655 1.655 0 000-2.333L7.76 3.4" stroke="#775AFA"></path></svg>
                </div>
            </div>
        </div>
    );
};

export default Course_card;
