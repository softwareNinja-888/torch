import { GradientText } from "./helper/GradientTxt";
import { TestimonalCard } from "./helper/TestimonialCard";

export function Testimonals(){
    return (
        <>
            <div className="px-16 py-20">
                <GradientText text="Kind words from customers" width="w-full"/>
                <div className="flex justify-center mt-10 text-white gap-10">
                    <TestimonalCard name="Emily Chang" title="Luminate" img="/face3.avif" logo="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac75_logo-1.svg"/>
                    <TestimonalCard name="Xavie Carter" title="Cucumber" img="/face.avif" logo="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac74_logo-3.svg"/>
                    <TestimonalCard name="Alexander Patel" title="Vexa" img="/face2.avif" logo="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac76_logo-4.svg"/>
                </div>
            </div>
        </>
    )
}