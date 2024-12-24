import classes from "./AnimationContainer.module.sass"

import { JSXElement } from "solid-js"

export enum AnimatedPosition {
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
    HIDDEN,
    VISIBLE
}

interface AnimationContainerProps {
    children: JSXElement
    position: AnimatedPosition
}

export default function AnimationContainer(props: AnimationContainerProps) {
    return (
        <div class={getContainerClasses(props.position)}>
            { props.children }
        </div>
    )
}

function getContainerClasses(position: AnimatedPosition) {
    switch (position) {
        case AnimatedPosition.TOP:
            return classes.top + " " + classes.container
        case AnimatedPosition.BOTTOM:
            return classes.bottom + " " + classes.container
        case AnimatedPosition.LEFT:
            return classes.left + " " + classes.container
        case AnimatedPosition.RIGHT:
            return classes.right + " " + classes.container
        case AnimatedPosition.HIDDEN:
            return classes.hidden + " " + classes.container
        case AnimatedPosition.VISIBLE:
            return classes.container
    }
}