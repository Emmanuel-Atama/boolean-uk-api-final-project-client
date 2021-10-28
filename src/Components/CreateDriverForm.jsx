import { useState } from "react/cjs/react.development"

export default function CreateDriverForm(props) {
    const { drivers, setDrivers} = props

    const [ firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [carId, setCarId] = useState()
    return(
        <>
        </>
    )
}