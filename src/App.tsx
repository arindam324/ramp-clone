import React, {useState} from 'react'


const Content: React.FC<{ selectedTab: string }> = ({selectedTab}) => {
    switch (selectedTab) {
        case '0':
            return (
                <img src={"/GyqKhax.png"} className={"pic"} alt={"image"}/>
            )
        case '1':
            return (
                <video className={"h-[800px] w-full aspect-video video"} src={"/video.mp4"} autoPlay/>
            )

        case '2':
            return (
                <img src={"/house.jpg"} className={"pic2"} alt={""}/>
            )
        case '3':
            return (
                <img src={"/dashboard.png"} className={"pic"} alt={""}/>
            )
        default:
            return (
                <img src={"/GyqKhax.png"} className={"pic"} alt={"image"}/>
            )

    }
}


function App() {

    const [selectedTab, setSelectedTab] = useState<string>("0")
    const Tabs = [
        {
            id: 0,
            name: 'Discover what to build',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum impedit incidunt ipsa\n ipsam, laudantium nihil odio quae.",
            content: '/GyqKhax.png'
        },
        {
            id: 1,
            name: 'Visualize your custom home in 3D/VR/4K Renders',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum impedit incidunt ipsa\n ipsam, laudantium nihil odio quae."

        },
        {
            id: 2,
            name: ' Track your home as it comes to life',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum impedit incidunt ipsa\n ipsam, laudantium nihil odio quae."
        },
        {
            id: 3,
            name: 'Smart home living',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At harum impedit incidunt ipsa\n ipsam, laudantium nihil odio quae."
        }
    ]

    return (
        <div className={"flex w-full min-h-screen max-w-[1280px] mx-auto  items-center justify-center"}>
            <div className={"w-1/2 "}>
                <h1 className={"text-5xl font-semibold leading-normal "}>A better experience, for a better home</h1>
                <p className={"text-lg leading-6"}>Our technology powers a seamless experience from discovery &
                    planning to post move-in living</p>
                <div className={"mt-8 space-y-4"}>
                    {Tabs.map(item => (
                        <div onClick={() => setSelectedTab(item.id.toString())} key={item.id}
                             className={`border-b ${selectedTab === item.id.toString() ? 'pb-2' : ' h-[85px] overflow-hidden'}  w-[80%] cursor-pointer `}>
                            <div className={"grid grid-cols-5  items-center "}>
                                <div
                                    className={`h-10 w-10 justify-self-center col-span-1 border rounded-full flex items-center justify-center ${selectedTab === item.id.toString() ? 'border-black border-2 text-black' : "text-gray-300 border-gray-300"}`}>{item.id}</div>
                                <h2 className={"text-3xl self-center col-span-4 col-span-auto leading-normal"}>{item.name}</h2>
                            </div>

                            <div
                                className={`flex items-center w-[80%] ml-auto justify-between ${selectedTab === item.id.toString() ? 'opacity-1' : "opacity-0"}  `}>
                                <p className={"leading-5 w-[60%] font-semibold text-sm"}>{item.text}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                                </svg>

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
