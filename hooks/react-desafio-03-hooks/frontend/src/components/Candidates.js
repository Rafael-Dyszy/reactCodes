import React from 'react';
import FLipMove from 'react-flip-move';

import Card from './Card';
import Candidate from './Candidate';

export default function Candidates({candidates}) {
    return (
        <div>
            <FLipMove>
                {candidates.map((candidate, index)=>{
                    const {id} = candidate;
                    return (
                    <div key={id}>
                        <Card >
                            <Candidate candidate={candidate} position={index + 1}/>
                        </Card>
                    </div>
                    );
                })}
            </FLipMove>
        </div>
    )
}
