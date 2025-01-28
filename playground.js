
// const greeting = <h1>Hello React! So lovely to see you!</h1>
// console.log('greeting:', greeting)

// In a real React App we will have this code only ONCE
const elContainer = document.getElementById('root')
const root = ReactDOM.createRoot(elContainer)
// root.render(greeting)


////////////////////////////////////////////////////

// React RAW API compared to JSX
// const elBox = <h1 className="container">Yes Master</h1>

// const elBox = React.createElement('h1',
//     { className: 'container', children: 'Yes Master' })

// console.log('elBox:', elBox)
// root.render(elBox)

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// some more JSX
// const names = (
//     <ol>
//         <li>Puki</li>
//         <li>Muki</li>
//     </ol>
// )


// root.render(names)

////////////////////////////////////////////////////

// const myLink = <a href="http://example.com" >
//     <p className="special">Click me please</p>
// </a>

// root.render(myLink)

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// JSX Must have one parent element

// This is valid.
// const fruits = <ul>
//     <li>Apple</li>
//     <li>Orange</li>
// </ul>

// This is NOT valid.
// const fruits = <h3>Fruits</h3>
// <ul>
//     <li>Apple</li>
//     <li>Orange</li>
// </ul>

// option 1:

// const fruits = (
//     <div>
//         <h3>Fruits</h3>
//         <ul>
//             <li>Apple</li>
//             <li>Orange</li>
//         </ul>
//     </div>
// )

// option 2:

// const fruits = (
//     <React.Fragment>
//         <h3>Fruits</h3>
//         <ul>
//             <li>Apple</li>
//             <li>Orange</li>
//         </ul>
//     </React.Fragment>
// )

// option 3:

// const fruits = (
//     [
//         <h3>Fruits</h3>,
//         <ul>
//             <li>Apple</li>
//             <li>Orange</li>
//         </ul>
//     ]
// )


// root.render(fruits)

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// Hello Interpolation - embedding JS expressions inside JSX

// const fullName = 'Puki Ma'

// const greeting2 = <h1>Hello {fullName}!</h1>

// root.render(greeting2)

////////////////////////////////////////////////////

// const imgName = (Math.random() > 0.5) ? 'dog' : 'cat'
// const img = <img src={`./assets/img/${imgName}.jpeg`} />
// root.render(img)

////////////////////////////////////////////////////

// const fullName2 = 'Puki Ma'
// const sum = 2 + 1
// const container = (
//     <section>
//         <p>
//             {sum} ≈ {Math.PI.toFixed(5)}
//         </p>
//         <p>
//             {fullName2}
//             {console.log('render')}
//         </p>
//     </section>
// )

// root.render(container)

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// Dynamic Attributes!

// const isDark = true
// const dynClass = isDark ? 'dark' : 'light'

// // Add images
// const imgName2 = (Math.random() > 0.5) ? 'dog' : 'cat'
// const dynSrc = `./assets/img/${imgName2}.jpeg`

// const HelloWorld =
//     <div>
//         <h2 className={dynClass}>Some Header</h2>
//         <img src={dynSrc} alt="" />
//     </div>

// root.render(HelloWorld)

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// Conditional Rendering
// Option 1 -> just using ifs.

// const isDark = false
// let button

// if (isDark) {
//     button = <button>
//         Go Light
//     </button>
// } else {
//     button = <button>
//         Go Dark
//     </button>
// }

// root.render(button)


///////////////////////////////////////////////
// Option 2 - The Ternary Operator (short if)

// var age = 25
// const msg =
//     <h1>
//         {(age >= 18) ? 'Old enough' : 'Too young'}
//     </h1>

// root.render(msg)

///////////////////////////////////////////////
// Option 3 - Short Circuit - using &&

// const age = 25
// const tasty =
//     <ul>
//         {<li>Chocolate</li>}
//         {age > 5 && <li>Pizza</li>}
//         {age > 15 && <li>Eggplant</li>}
//         {age > 40 && <li>Grappa</li>}
//         {false}
//         {null}
//         {undefined}
//         {/* {0} */}
//     </ul>

// root.render(tasty)

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// Loops and Arrays

// const names = ['Muki', 'Puki', 'Duki', 'Ruki'];

// const list = <ul>
//     {names.map(name => <li key={name}>{name}</li>)}
// </ul>

// root.render(list)
////////////////////////////////////////////////////

// const users = [{ id: 'u101', fullName: 'Muki Ja' }, { id: 'u102', fullName: 'Puki Ma' }]

// const list2 = <ul>
//     {users.map(user => <li key={user.id}>{user.fullName}</li>)}
// </ul>

// root.render(list2)
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// Handling Events

// function handleClick(ev, greet) {
//     console.log('I Was Clicked!')
//     console.log('ev:', ev)
//     console.log('greet:', greet)
// }

// Event is sent as a default

// const SomeButton = (
//     <button onClick={handleClick}>
//         Click Me!
//     </button>
// )


// When we need to pass arguments to our function - we will wrap it inside an arrow func.

const SomeButton = (
    <button onClick={(ev) => handleClick(ev, 'Heya mister')}>
        Click Me!
    </button>
)

// root.render(SomeButton)

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// React Components - function that returns JSX

function SomeFuncCmp() {
    return <h1>Hello React Component</h1>
}

function Welcome(props) {
    console.log('props:', props)

    return <h1>Welcome {props.name}, You are {props.age} years old</h1>
}

const mainSection = (
    <section>
        <SomeFuncCmp />

        <Welcome name="puki" age={18} />
    </section>
)

root.render(mainSection)

