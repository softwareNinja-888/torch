import { FeatureInfo } from "./helper/FeatureInfo";
import { FeatureIntro } from "./helper/FeatureIntro";

export function FeatureTwo(){
    return (
        <>
            <div className="px-16 py-20">
                <FeatureIntro text="Actionable insights" textGradient="Turn complex data into simple decisions"/>
                <div className="mt-24">
                    <img src='/graphFeature2.avif' alt="graph" className="" />
                </div>                
                <div className="flex gap-10  text-white mt-10">
                    <FeatureInfo title='Automated report' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error voluptatibus debitis, culpa aut maiores ipsa, perferendis quo explicabo cupiditate' img='https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac61_wand-sparkles.svg'/>
                    <FeatureInfo title='Trend analysis' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error voluptatibus debitis, culpa aut maiores ipsa, perferendis quo explicabo cupiditate' img='https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac69_chart-no-axes-combined.svg'/>
                    <FeatureInfo title='Interactive charts' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error voluptatibus debitis, culpa aut maiores ipsa, perferendis quo explicabo cupiditate' img='https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac64_chart-pie.svg'/>
                </div>
            </div>
        </>
    )
}