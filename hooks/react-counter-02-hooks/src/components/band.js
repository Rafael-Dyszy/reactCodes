import React, { useState } from 'react';
// import css from './counter/counter.module.css';

const band_members = [
        {
            id: 1,
            name: 'Neil Peart',
            instrument: 'Bateria'
        },
        {
            id: 2,
            name: 'Alex Lifeson',
            instrument: 'Guitarra',
        },
        {
            id: 3,
            name: 'Geddy Lee',
            instrument: 'Baixo',
        },
    ];

export default function Band() {

    const [bandMembers] = useState(band_members);
    const [bandName] = useState('Rush');
    
        return (
            <div>
                <h4>{bandName}</h4>
                <ul>
                {bandMembers.map(({id, name, instrument}) => {
                    return (
                    <li key={id}>
                        {name} - {instrument}
                    </li>
                    );
                })}
                </ul>
            </div>
        );
    }

