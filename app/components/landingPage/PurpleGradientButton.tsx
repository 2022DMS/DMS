type PurpleGradientButtonProps = {
    text: string;
    imageSrc: string;
    imageAlt: string;
    maxWidthClass: string
};

export function PurpleGradientButton({ imageSrc, imageAlt, text, maxWidthClass }: PurpleGradientButtonProps) {
  return (
    <div className="
        z-[1]
        rounded-xl
        p-[1.5px] 
        bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
        shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66]
    ">
      <div className={`
          flex items-center gap-3 justify-center
          text-white font-semibold
          rounded-xl
          bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]
          px-[29px] py-[10px]
          max-w-${maxWidthClass}
          w-full
          cursor-pointer
          `}>
          {text}
          <img src={imageSrc} alt={imageAlt} className="w-3 object-contain" />
      </div>
    </div>
  );
}
