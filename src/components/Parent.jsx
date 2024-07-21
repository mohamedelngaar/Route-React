import React, { useState } from 'react'

export default function Parent() {
    const [Name, changeName] = useState("mostafa")
    const [age, changeAge] = useState(50)

    function ChangeName() {
        changeName('mahmoud')
    }
    function ChangeAge() {
        changeAge(20)
    }
    return (
        <div>
        </div>

    )
}
