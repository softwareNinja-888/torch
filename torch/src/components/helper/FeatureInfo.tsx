export function FeatureInfo({title,info,img}:{title:string,info:string,img:string}):JSX.Element{
    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="">
                    <img src={img} alt="zap" className="w-10 h-10" />
                </div>
                <div className="text-2xl">
                    {title}
                </div>
                <div className="w-10/12">
                    {info}
                </div>
            </div>
        </>
    )
}