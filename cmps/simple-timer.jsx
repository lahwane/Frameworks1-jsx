
const { useState, useEffect, useRef } = React

export function SimpleTimer() {
    const [timer, setTimer] = useState(0)

    const intervalId = useRef()
    console.log('intervalId:', intervalId)

    useEffect(() => {
        intervalId.current = setInterval(() => {
            // console.log('timer:', timer)
            console.log('interval')
            // setTimer(timer + 1)
            setTimer((prevTimer) => prevTimer + 1)
        }, 1000)
        console.log('intervalId:', intervalId)

        // setTimer(timer + 1)
        // setTimer(timer + 1)
        // setTimer(timer + 1)

        // setTimer((prevTimer) => prevTimer + 1)
        // setTimer((prevTimer) => prevTimer + 1)
        // setTimer((prevTimer) => prevTimer + 1)

        return () => {
            clearInterval(intervalId.current)
        }
    }, [])

    // console.log('SimpleTimer rendered')

    function onStop() {
        console.log('intervalId:', intervalId)
        clearInterval(intervalId.current)
    }

    return (
        <section className="simple-timer">
            <p>{timer}</p>
            <button onClick={onStop}>Stop</button>
        </section>
    )
}


// var x = [1, 55, 3, 12]

// x.sort((y, z) => y - z)