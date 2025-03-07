import { GradientText } from "./helper/GradientTxt";

export function Header():JSX.Element{
    return (
        <>
            <div className="sticky top-0 z-50 bg-primary overflow-x-hidden max-w-screen text-white m-0 flex justify-between items-center px-8 py-4 ">
                <div className=""> 
                    <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac6c_torch-logo.svg" alt="logo" className="w-32 h-20" />
                </div>
                <div className="text-primaryText text-lg flex gap-12">
                    <div className="hover:text-white">
                        <a href="#">Features</a>
                    </div>
                    <div className="hover:text-white">
                        <a href="#">Pricing</a>
                    </div>
                    <div className="hover:text-white">
                        <a href="#">About</a>
                    </div>
                    <div className="hover:text-white">
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="border border-otherBlack bg-otherBlack px-6 py-2 rounded-lg">Sign in </div>
                    <div className="border border-secondary bg-secondary px-6 py-2 rounded-lg text-black">Get started</div>
                </div>
            </div>
        </>
    )

}