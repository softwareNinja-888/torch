import { TestimonalCard } from "./TestimonialCard";

export function TestimonalProfile({img,name,title}: {img:string,name:string,title:string}):JSX.Element{

    const names = name.split(" ");
    return (
        <>
            <div className="flex items-center gap-5">
                <div className="">
                    <img src={img} alt="profile image" className="w-24 h-24 rounded-xl" />
                </div>
                <div className="">
                    <div className="text-lg font-bold">
                        {names[0] || ' '}<br/> {names[1] || ' '}
                    </div>
                    <div className="text-sm">{title}</div>
                </div>
            </div>
        </>
    )
}