import { TestimonalProfile } from "./TestimonialProfile";

export function TestimonalCard({img,name,title,logo}: {img:string,name:string,title:string,logo:string}):JSX.Element{
    return(
        <>
            <div className="flex flex-col gap-10 bg-otherBlack border border-otherBlack rounded-lg py-10 px-10">
                <div className="">
                    <img src={logo} alt="logo" className="" />
                </div>
                <div className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam voluptate quasi voluptatum cum. Doloremque expedita exercitationem quas.</div>
                <TestimonalProfile name={name} title={title} img={img}/>

            </div>
        </>
    )
}