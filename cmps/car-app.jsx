import { carService } from "../services/car.service.js"

const { useState, useEffect } = React

export function CarApp() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        carService.query()
            .then(cars => setCars(cars))
    }, [])

    function onRemoveCar(carId) {
        carService.remove(carId)
            .then(() => {
                console.log('Removed!')
                setCars(prevCars => prevCars.filter(car => car.id !== carId))
            })
    }

    return (
        <section className="car-app">
            <h2>List of Cars</h2>
            <ul>
                {cars.map(car =>
                    <li key={car.id} >
                        <button onClick={() => onRemoveCar(car.id)}>x</button>
                        {car.vendor}
                    </li>
                )}
            </ul>


        </section>
    )
}