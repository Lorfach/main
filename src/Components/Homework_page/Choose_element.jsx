import { memo, forwardRef } from "react";

const Choose_element = memo(
  forwardRef(({ index, onClick, correct, order_id, isActive }, ref) => {
    return (
      <div
        key={index}
        onClick={() => onClick(index)}
        ref={ref} // Передаем ссылку
        className={`w-10 h-10  border-2 relative before:bg-[#3b3b3c] flex transition-colors text-sm items-center justify-center  rounded-full cursor-pointer bfr
          ${
          isActive
            ? "bg-transparent border-[#8e74ff] before:bg-[#8e74ff]"
            : correct === true
            ? "bg-[#e3fbe7] border-[#00df60] text-black bfr-t"
            : correct === false
            ? "bg-[#3d2324] border-[#a73a3e] text-white bfr-f"
            : " border-[#3b3b3c]"
        }`}
      >
        {order_id}
      </div>
    );
  })
);

export default Choose_element;
