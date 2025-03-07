export function GradientText({text,width='w-60'}:{text:string,width?:string},):JSX.Element {
    return (
      <div className={`flex items-center ${width}`}>
        <h1 className="text-7xl font-bold bg-gradient-to-r from-white to-[#FDE7B5] bg-clip-text text-transparent">
          {text}
        </h1>
      </div>
    );
  }