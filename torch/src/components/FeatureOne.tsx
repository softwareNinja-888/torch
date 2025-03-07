import { GradientText } from "./helper/GradientTxt";

export function FeatureOne():JSX.Element{
    return (
        <>
            <div id="feature" className="flex flex-col gap-2 px-16 py-32">
                <div className="text-lg text-secondary font-bold">Data at your fingertips</div>
                <GradientText text="Real-time insights for faster decisions" width="w-full"/>
                <div className="mt-24">
                    <img src='/graphFeature.avif' alt="graph" className="" />
                </div>
                <div className="flex gap-10  text-white mt-10">
                    <div className="flex flex-col gap-6">
                        <div className="">
                            <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac67_zap.svg" alt="zap" className="w-10 h-10" />
                        </div>
                        <div className="text-2xl">
                            Instant Updates
                        </div>
                        <div className="w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error voluptatibus debitis, culpa aut maiores ipsa, perferendis quo explicabo cupiditate</div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="">
                            <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac6a_sliders-horizontal.svg" alt="slider" className="w-10 h-10" />
                        </div>
                        <div className="text-2xl">
                           Customisable Views
                        </div>
                        <div className="w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error voluptatibus debitis, culpa aut maiores ipsa, perferendis quo explicabo cupiditate</div>
                    </div>
                    <div className="flex flex-col gap-6 justify-around ">
                        <div className="">
                            <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac66_handshake.svg" alt="handshake" className="w-10 h-10" />
                        </div>
                        <div className="text-2xl">
                            Collaborative tools
                        </div>
                        <div className="w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error voluptatibus debitis, culpa aut maiores ipsa, perferendis quo explicabo cupiditate</div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}