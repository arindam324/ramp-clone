import React, {useEffect, useState} from 'react'


const Content: React.FC<{ selectedTab: number }> = ({selectedTab}) => {
    switch (selectedTab) {
        case 1:
            return (
                <img src={"/GyqKhax.png"} className={"pic2"} alt={"image"}/>
            )
        case 2:
            return (
                <video className={"h-[800px] w-full aspect-video video"} src={"/video.mp4"} autoPlay/>
            )
        case 3:
            return (
                <img src={"/house.jpg"} className={"pic2"} alt={""}/>
            )
        case 4:
            return (
                <img src={"/dashboard.png"} className={"pic"} alt={""}/>
            )
        default:
            return (
                <img src={"/GyqKhax.png"} className={"pic2"} alt={"image"}/>
            )

    }
}


function App() {


    const [selectedTab, setSelectedTab] = useState<number>(1)

    useEffect(() => {
        //change the selectedTab item to another one after a certain period of time
        const timer = setInterval(() => {
            setSelectedTab(prev => prev > 0 && prev < 4 ? (prev + 1) : (1))
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    console.log(selectedTab)

    const Tabs = [
        {
            id: 1,
            name: 'Discover what to build',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum impedit incidunt ipsa\n ipsam, laudantium nihil odio quae.",
            content: '/GyqKhax.png'
        },
        {
            id: 2,
            name: 'Visualize your custom home in 3D/VR/4K Renders',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum impedit incidunt ipsa\n ipsam, laudantium nihil odio quae."

        },
        {
            id: 3,
            name: ' Track your home as it comes to life',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum impedit incidunt ipsa\n ipsam, laudantium nihil odio quae."
        },
        {
            id: 4,
            name: 'Smart home living',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum impedit incidunt ipsa\n ipsam, laudantium nihil odio quae."
        }
    ]

    return (
        <div className={"flex w-full space-x-5 min-h-screen max-w-[1480px] mx-auto  items-center justify-center"}>
            <div className={"w-1/2 "}>
                <h1 className={"text-5xl font-semibold leading-normal "}>A better experience, for a better home</h1>
                <p className={"text-lg leading-6"}>Our technology powers a seamless experience from discovery &
                    planning to post move-in living</p>
                <div className={"mt-8 space-y-4"}>
                    {Tabs.map(item => (
                        <div onClick={() => setSelectedTab(item.id)} key={item.id}
                             className={`${selectedTab === item.id ? '' : ' h-content overflow-hidden'}  w-[80%] cursor-pointer `}>
                            <div className={"flex items-center  space-x-6"}>
                                <p
                                    className={`${selectedTab === item.id ? 'text-black font-bold' : "text-gray-300 "}`}>{`0${item.id}`}</p>
                                <h2 className={"text-3xl leading-normal"}>{item.name}</h2>
                            </div>

                            <div
                                className={`flex items-center w-[92%] ml-auto justify-between ${selectedTab === item.id ? '' : " hidden opacity-0"}  `}>
                                <p className={"leading-5 w-[60%] text  text-sm"}>{item.text}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                                </svg>
                            </div>
                            <div className="w-full bg-gray-200 h-[1px]">
                                <div className={` mt-2 h-[1px] ${selectedTab === item.id && ' bg-black loader'}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"w-1/2  "}>
                <Content selectedTab={selectedTab}/>
            </div>
        </div>
    )
}

export default App
