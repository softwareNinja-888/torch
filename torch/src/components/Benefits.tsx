import { GradientText } from "./helper/GradientTxt";

export function Benefits():JSX.Element{
    return(
        <>
            <div className="flex flex-col gap-20 px-16 ">
                <div className="">
                    <GradientText text="Take action from Insights" width="w-full" h="h-22"/>
                </div>
                <div className="grid grid-cols-2 grid-rows-[repeat(3,300px)] gap-4 max-w-6xl mx-auto bg-primary gap-y-16 gap-x-10 text-white">

                    {/* Easy-to-use dashboards */}
                    <div className="p-8 bg-cardBg border border-cardBg rounded-lg row-start-1 row-end-3">
                        <div className="">
                            <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac62_layout-dashboard.svg" alt="layout" className="w-12" />
                        </div>
                        <div className="mt-32"></div>
                        <div className="text-3xl w-7/12">Easy-to-use dashboards</div>
                        <div className="w-10/12 mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit id, dolorum, laudantium maxime.</div>
                    </div>
                    
                    {/* Collaborative analytics */}
                    <div className="p-8 bg-cardBg border border-cardBg rounded-lg">
                        <div className="">
                            <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac5f_radar.svg" alt="layout" className="w-12" />
                        </div>
                        <div className="mt-12"></div>
                        <div className="text-3xl w-7/12">Real-time data updates</div>
                        <div className="w-10/12 mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit id, dolorum, laudantium maxime.</div>      
                    </div>
                    

                    {/* Real-time data updates */}
                    <div className="p-8 bg-cardBg border border-cardBg rounded-lg row-start-2 row-end-4">
                        <div className="">
                            <img src=" https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac61_wand-sparkles.svg" alt="layout" className="w-12" />
                        </div>
                        <div className="mt-72"></div>
                        <div className="text-3xl w-7/12">Automated reports</div>
                        <div className="w-10/12 mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit id, dolorum, laudantium maxime.</div>
                    </div>
                    
                    {/* Automated reports */}
                    <div className="p-8 bg-cardBg border border-cardBg rounded-lg">
                        <div className="">
                            <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac60_mouse-pointer-click.svg" alt="layout" className="w-12" />
                        </div>
                        <div className="mt-12"></div>
                        <div className="text-3xl w-7/12">Collaborative analysis</div>
                        <div className="w-10/12 mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit id, dolorum, laudantium maxime.</div>
                    </div>
                </div>
                </div>

        </>
    )
}