import './homework_page.css';
export default function Question_block({number}){
    return(
        <>
            <div className="w-10 h-10 border-2 relative flex items-center justify-center border-[#3b3b3c] rounded-full bfr cursor-pointer">
                {number}
            </div>
        </>
    )
}