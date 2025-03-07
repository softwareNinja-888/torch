import { GradientText } from "./helper/GradientTxt";

export function Hero():JSX.Element{
    return (
        <>
            <div className="grid grid-cols-2 px-16 py-32">
                <div className="flex flex-col gap-10">
                    <GradientText text="Powerful data insights for all"/>
                    <div className="text-gray-400 w-8/12 text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores magnam alias enim eligendi vitae distinctio, voluptas sunt quaerat officia odio facilis assumenda laudantium ?
                    </div>
                    <div className="flex flex-row-reverse justify-end gap-3">
                        <div className="border border-otherBlack bg-otherBlack px-6 py-3 rounded-lg text-white">
                            Learn More    
                        </div>
                        <div className="border border-secondary bg-secondary px-6 py-3 rounded-lg text-black">
                            Get started
                        </div>
                    </div>
                    <div className="grid grid-cols-3 w-92 gap-y-8">
                        <div className="max-w-20">
                            <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac74_logo-3.svg" alt="n.a" className="w-20" />
                        </div>
                        <div className="max-w-20">
                            <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac77_logo-2.svg" alt="Accent" className="w-20" />
                        </div>
                        <div className="max-w-20">
                            <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac76_logo-4.svg" alt="Irene" className="w-20" />
                        </div>
                        <div className="max-w-20">
                            <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac75_logo-1.svg" alt="Someday" className="w-20" />
                        </div>
                        
                    </div>
                </div>
                <div className="">
                    <img src='/graphHero.avif' alt="graphs" className="" />
                </div>
            </div>
        </>
    )
}