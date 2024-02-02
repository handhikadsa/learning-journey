import { useState, useEffect } from 'react'

const increase = (prevValue, max) => {
    return {
        value: prevValue < max ? prevValue + 1 : prevValue
    }
}

const decrease = (prevValue, min) => {
    return {
        value: prevValue > min ? prevValue - 1 : prevValue
    }
}

export function useQuantitySelector () {
    const [state, setState] = useState(0)

    const onClickMinus = () => {
        setState(decrease(state, 0))
    }

    const onClickPlus = () => {
        setState(increase(state, 10))
    }

    return  {
        onClickMinus,
        onClickPlus,
        state
    }
}