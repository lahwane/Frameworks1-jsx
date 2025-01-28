
const { useState, useEffect } = React

export function SimpleCounter(props) {
    // console.log('props:', props)

    // let count = 0

    const [count, setCount] = useState(props.initialVal || 0)

    // useEffect(() => {
    //     // console.log('init')
    //     console.log('Mounted')

    //     return () => {
    //         console.log('Unmounted')
    //     }

    // }, [])

    useEffect(() => {
        // console.log('hi')
        // console.log('count:', count)
        if (props.onModified) props.onModified(count)
    }, [count])

    function onUpdateCount(diff) {
        // console.log(diff)
        setCount(prevCount => prevCount + diff)
        // console.log('count:', count)
    }

    // console.log('SimpleCounter rendered')
    return (
        <section className="simple-counter">
            <button onClick={() => onUpdateCount(-1)}>-</button>
            {count}
            <button onClick={() => onUpdateCount(1)}>+</button>
        </section>
    )
}