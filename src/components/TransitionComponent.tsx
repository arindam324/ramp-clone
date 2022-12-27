import React, {ReactNode} from "react";
import {Transition} from '@headlessui/react'

type Props = {
    show: boolean,
    children: ReactNode
}

const TransitionComponent: React.FC<Props> = ({show, children}) => {
    return (
        <Transition
            className={"lg:w-1/2 "}
            show={show}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 -translate-y-10 "
            enterTo="opacity-100 rotate-0 translate-y-0"
            leave="transform duration-200 delay-100  transition ease-in-out"
            leaveFrom="opacity-100  translate-y-0"
            leaveTo=" opacity-0 -translate-y-5"
        >
            {children}
        </Transition>
    )
}


export default TransitionComponent