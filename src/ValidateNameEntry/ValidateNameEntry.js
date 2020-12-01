import React from 'react'
import './ValidateNameEntry.css'

export default function ValidateNameEntry(props) {
    if (props.message) {
        return <div className='ValidateNameEntry_error'>{props.message}</div>
    }
    return <></>
}