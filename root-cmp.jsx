import { CarApp } from "./cmps/car-app.jsx"
import { Counter } from "./cmps/counter.jsx"
import { SimpleCounter } from "./cmps/simple-counter.jsx"
import { UserPreview } from "./cmps/user-preview.jsx"

export function App() {

    function onDrink(count) {
        console.log('Drinking...', count)
    }

    return (
        <section className="app">
            <header className="app-header">
                <h1>My App</h1>
            </header>

            <main>
                {/* <Counter /> */}
                {/* <SimpleCounter initialVal={10} onModified={onDrink} />
                <SimpleCounter /> */}
                {/* <UserPreview /> */}
                <CarApp />
            </main>

        </section>
    )
}