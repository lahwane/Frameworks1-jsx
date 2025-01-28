import { SimpleCounter } from "./simple-counter.jsx"
import { SimpleTimer } from "./simple-timer.jsx"

const { useState } = React

export function UserPreview() {
    const [user, setUser] = useState({ fullname: 'Puki Reactof', score: 77 })

    function onUpdateScore(newScore) {
        // console.log('newScore:', newScore)
        // user.score = newScore
        setUser(prevUser => ({ ...prevUser, score: newScore }))
    }

    // console.log('UserPreview rendered')

    return (
        <section className="user-preview">
            <h2>{user.fullname}</h2>
            <h3>Score: {user.score}</h3>

            {user.score > 70 && <SimpleCounter
                initialVal={user.score}
                onModified={onUpdateScore}
            />}

            {user.score > 70 && <SimpleTimer />}

        </section>
    )

}