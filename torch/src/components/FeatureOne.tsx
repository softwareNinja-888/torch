import { FeatureInfo } from "./helper/FeatureInfo";
import { FeatureIntro } from "./helper/FeatureIntro";

export function FeatureOne():JSX.Element{
    return (
        <>
            <div id="feature" className="flex flex-col gap-2 px-16 py-32">

                <FeatureIntro text="Data at your fingertips" textGradient="Real-time insights for faster decisions"/>
                <div className="mt-24">
                    <img src='/graphFeature.avif' alt="graph" className="" />
                </div>
                <div className="flex gap-10  text-white mt-10">
                     <FeatureInfo title='Instant Updates' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error voluptatibus debitis, culpa aut maiores ipsa, perferendis quo explicabo cupiditate' img='https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac67_zap.svg'/>
                     <FeatureInfo title='Customisable Views' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error voluptatibus debitis, culpa aut maiores ipsa, perferendis quo explicabo cupiditate' img='https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac6a_sliders-horizontal.svg'/>
                     <FeatureInfo title='Collaborative tools' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error voluptatibus debitis, culpa aut maiores ipsa, perferendis quo explicabo cupiditate' img='https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac66_handshake.svg'/>                
                </div>
            </div>
        </>
    )
}