export function GradientText({text,width='w-60',h=""}:{text:string,width?:string,h?:string},):JSX.Element {
    return (
      <div className={`flex items-center justify-start ${width}`}>
        <h1 className={`text-7xl font-bold bg-gradient-to-r from-white to-[#FDE7B5] bg-clip-text text-transparent bg-red-300 ${h}`}>
          {text}
        </h1>
      </div>
    );
  }