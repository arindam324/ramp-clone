import TransitionComponent from "./TransitionComponent";
import React, {ReactNode} from "react";

type SwipeProps = {
    setSelectedTab: () => void,
    show: boolean,
    heading: string,
    children: ReactNode
}

const SwipeComponent: React.FC<SwipeProps> = ({setSelectedTab, show, children, heading}) => {
    return (
        <div onClick={setSelectedTab}>
            <div className={"lg:flex items-center"}>
                <div className={"flex flex-col"}>
                    <div className={"flex lg:w-1/2 items-center cursor-pointer justify-between"}>
                        <h2 className={"text-xl font-medium"}>{heading}</h2>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </div>

                    <p className={"text-sm leading-5 mb-2 lg:w-1/2 mt-2"}>
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing
                        elit.
                        Eius eos
                        exercitationem iusto,
                        laudantium nemo odio odit perferendis quo sit tenetur.
                    </p>
                </div>
                <TransitionComponent show={show}>
                    {children}
                </TransitionComponent>
            </div>
            <div className={"w-full lg:w-1/2 bg-gray-300 h-[1px] mt-2"}>
                <div className={`h-[1px]  ${
                    show && "bg-black loader"
                }`}/>
            </div>
        </div>
    )
}

export default SwipeComponent