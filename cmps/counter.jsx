

const { useState } = React

export function Counter() {

    // let count = 0
    var [count, setCount] = useState(0)
    // console.log('count:', count)
    var [isDark, setIsDark] = useState(true)


    // console.log('Counter rendered')
    const darkClass = isDark ? 'dark' : ''
    return (
        <section className={"counter " + darkClass}>

            <p>You clicked {count}</p>

            <button onClick={() => {
                // count++
                // console.log('count:', count)
                setCount(prevCount => prevCount + 1)
            }}>
                Click me
            </button>
            <button onClick={() => {
                setIsDark(prevIsDark => !prevIsDark)
            }}>
                Toggle Dark
            </button>
        </section>
    )
}

// var arr = [4, 5, 6]

// function getArr() {
//     return [4, 5, 6]
// }

// // var x = arr[0]
// // var y = arr[1]
// // var z = arr[2]

// var [x, y, z] = getArr()
// // var {x,y} = {x:3 , y:33}
// console.log('x:', x)
// console.log('y:', y)
// console.log('z:', z)
