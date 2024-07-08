import React from 'react'
import PropTypes from 'prop-types'

export const MyComponent = ({ name, lastName }) => {
    const student = {
        name: "Elvis",
        lastName: "Acosta",
        mobile: "3123",
        likeindProfile: "https://linkeid.com/elvis"
    }

    return (
        <div>
            <hr />
            <h4> Este es mi primer component</h4>
            <p>Temas React</p>
            <p>Docente</p>
            <p><strong>{name}{lastName}</strong></p>
            <p>Temas de React</p>
            <ul>
                <li>Componentes</li>
                <li>Eventos</li>
                <li>Estados - Hooks</li>
                <li>Comunicacion</li>
            </ul>
        </div>
    )
}

MyComponent.propTypes = {
    name: PropTypes.string
}