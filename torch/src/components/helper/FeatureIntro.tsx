import { GradientText } from "./GradientTxt"

export function FeatureIntro({text="",textGradient=""}: {text:string,textGradient:string}):JSX.Element{
    return (
        <>
            <div className="">
                <div className="text-lg text-secondary font-bold">{text}</div>
                <GradientText text={textGradient} width="w-full"/>
            </div>
        </>
    )
}