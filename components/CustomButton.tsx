'use client'
import { CustomButtonProps } from "@/types";
import Image from "next/image";

function CustomButton({ title,containerStyles,handleClick,btnType,textStyles,rightIcon,isDisabled}:CustomButtonProps){
  return (
    <button 
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      
      onClick={() =>{ handleClick}}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
          <div className="relative w-4 h-3 font-bold ml-2">
            <Image
             src={rightIcon}
             alt="right icon"
             fill
             className="object-contain"
            />
          </div>
        )}

    </button>
  )
}

export default CustomButton