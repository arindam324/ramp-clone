import React, {useEffect, Fragment, useState} from "react";
import {Transition} from '@headlessui/react'
import {useInterval, useMedia} from 'react-use'
import SwipeComponent from "./components/SwipeComponent";
import './index.css'

const Content: React.FC<{ selectedTab: number }> = ({selectedTab}) => {
    switch (selectedTab) {
        case 1 : {
            return (
                <Transition
                    show={selectedTab === 1}
                    enter="transform transition duration-[400ms]"
                    enterFrom="opacity-0 rotate-90 -translate-y-10 "
                    enterTo="opacity-100 rotate-0 translate-y-0"
                    leave="transform duration-200 delay-100  transition ease-in-out"
                    leaveFrom="opacity-100  translate-y-0"
                    leaveTo=" opacity-0 -translate-y-5"
                >
                    <img
                        className={"w-[800px] h-[600px] picUp"}
                        loading="lazy"
                        alt={"image"}
                        src={"/GyqKhax.png"}/>
                </Transition>
            )
        }
        case 2: {
            return (
                <Transition
                    show={selectedTab === 2}
                    enter="transform transition duration-[400ms]"
                    enterFrom="opacity-0 rotate-90 -translate-y-10 "
                    enterTo="opacity-100 rotate-0 translate-y-0"
                    leave="transform duration-200 delay-100  transition ease-in-out"
                    leaveFrom="opacity-100  translate-y-0"
                    leaveTo=" opacity-0 -translate-y-5">
                    <video
                        className={"h-[800px] picDown w-full aspect-video "}
                        src={"/video.mp4"}
                        autoPlay
                    />
                </Transition>
            )
        }
        case 3: {
            return (
                <Transition
                    show={selectedTab === 3}
                    enter="transform transition duration-[400ms]"
                    enterFrom="opacity-0 rotate-90 -translate-y-10 "
                    enterTo="opacity-100 rotate-0 translate-y-0"
                    leave="transform duration-200 delay-100  transition ease-in-out"
                    leaveFrom="opacity-100  translate-y-0"
                    leaveTo=" opacity-0 -translate-y-5">
                    <img
                        src={"/house.jpg"}
                        className={"w-full h-[600px] picUp"}
                        loading="lazy"
                        alt={"image"}
                    />
                </Transition>
            )
        }
        case 4: {
            return (
                <Transition
                    show={selectedTab === 4}
                    enter="transform transition duration-[400ms]"
                    enterFrom="opacity-0 rotate-90 -translate-y-10 "
                    enterTo="opacity-100 rotate-0 translate-y-0"
                    leave="transform duration-200 delay-100  transition ease-in-out"
                    leaveFrom="opacity-100  translate-y-0"
                    leaveTo=" opacity-0 -translate-y-5">
                    <img
                        src={"/dashboard.png"}
                        loading="lazy"
                        className={"w-full picDown"}
                        alt={"image"}
                    />
                </Transition>
            )
        }
        default: {
            return (
                <div>
                    <img loading="lazy"
                         className={"w-[600px] h-[600px]"}
                         alt={"image"} src={"/GyqKhax.png"}/>
                </div>
            )
        }
    }
}
const App = () => {
    const [selectedTab, setSelectedTab] = useState<number>(1)
    useInterval(() => setSelectedTab((prev) => (prev > 0 && prev < 4 ? prev + 1 : 1)), 4000);

    const Tabs = [
        {
            id: 1,
            name: "Discover what to build",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum impedit incidunt ipsa\n ipsam, laudantium nihil odio quae.",
            content: "/GyqKhax.png",
        },
        {
            id: 2,
            name: "Visualize your custom home in 3D/VR/4K Renders",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum impedit incidunt ipsa\n ipsam, laudantium nihil odio quae.",
        },
        {
            id: 3,
            name: " Track your home as it comes to life",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum impedit incidunt ipsa\n ipsam, laudantium nihil odio quae.",
        },
        {
            id: 4,
            name: "Smart home living",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum impedit incidunt ipsa\n ipsam, laudantium nihil odio quae.",
        },
    ];


    const isLarge = useMedia('(min-width: 1280px)')

    return (
        <div
            className={"flex  justify-center  max-w-[1280px] mx-auto flex-col items-center min-h-screen w-full"}>
            {isLarge ? (
                <div
                    className={"w-full space-x-8 flex items-center"}
                >
                    <div className={"w-1/2"}>
                        <h1 className={"lg:text-5xl text-4xl font-semibold leading-10 lg:leading-normal "}>
                            A better experience, for a better home
                        </h1>
                        <p className={"text-base lg:text-lg leading-6"}>
                            Our technology powers a seamless experience from discovery & planning
                            to post move-in living
                        </p>

                        <div className={"mt-4 space-y-6"}>
                            {Tabs.map(item => (
                                <div key={item.id} onClick={() => setSelectedTab(item.id)} className={""}>
                                    <div className={"flex items-center cursor-pointer justify-between"}>
                                        <h2 className={'text-3xl'}>{item.name}</h2>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </div>
                                    <Transition
                                        show={selectedTab === item.id}
                                        enter="transform transition duration-[400ms]"
                                        enterFrom="opacity-0 -translate-y-5 "
                                        enterTo="opacity-100 rotate-0 translate-y-0"
                                        leave="transform duration-200 delay-100  transition ease-in-out"
                                        leaveFrom="opacity-100  translate-y-0"
                                        leaveTo=" opacity-0 -translate-y-5"
                                    >
                                        <p>{item.text}</p>
                                    </Transition>
                                    <div className={"w-full  bg-gray-300 h-[1px] mt-2"}>
                                        <div className={`h-[1px]  ${
                                            selectedTab === item.id && "bg-black loader"
                                        }`}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={"w-1/2  flex items-center justify-center"}>
                        <Content selectedTab={selectedTab}/>
                    </div>
                </div>
            ) : (
                <div className={"w-full p-5 space-y-4  mt-10"}>
                    <div>
                        <h1 className={"lg:text-5xl text-4xl font-semibold leading-10 lg:leading-normal "}>
                            A better experience, for a better home
                        </h1>
                        <p className={"text-base lg:text-lg leading-6"}>
                            Our technology powers a seamless experience from discovery & planning
                            to post move-in living
                        </p>
                    </div>
                    <SwipeComponent
                        heading={"Discover what You Build"}
                        setSelectedTab={() => setSelectedTab(1)}
                        show={selectedTab === 1}>
                        <img
                            loading="lazy"
                            src={"/GyqKhax.png"}
                            className={"pic2"}
                            alt={"image"}
                        />
                    </SwipeComponent>
                    <SwipeComponent
                        heading={"Visualize your custom home in 3D/VR/4K Renders"}
                        setSelectedTab={() => setSelectedTab(2)}
                        show={selectedTab === 2}>
                        <video
                            className={"lg:h-[800px] h-[300px] w-full aspect-video "}
                            src={"/video.mp4"}
                            autoPlay
                        />
                    </SwipeComponent>
                    <SwipeComponent
                        heading={"Discover what You Build"}
                        setSelectedTab={() => setSelectedTab(3)}
                        show={selectedTab === 3}>
                        <img
                            src={"/house.jpg"}
                            loading="lazy"
                            className={"pic2"}
                            alt={"image"}
                        />
                    </SwipeComponent>
                    <SwipeComponent
                        heading={"Discover what You Build"}
                        setSelectedTab={() => setSelectedTab(4)}
                        show={selectedTab === 4}>
                        <img
                            src={"/dashboard.png"}
                            loading="lazy"
                            className={"pic"}
                            alt={"image"}
                        />
                    </SwipeComponent>
                </div>
            )}
        </div>
    )
}

export default App