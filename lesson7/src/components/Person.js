import React from 'react';

const Person = props => {
    const {name, age} = props;
	return (
		<div className="person" >
			<h2>{name}</h2>
			<p>{age}</p>
            {age > 21 
                ? <div className="danger">You are 21+</div>
                : <div className="danger">You are not allowed</div>
                /* this renders different content based on the age */}
            
            {age > 21 && <div className="danger">Only for 21+</div> /* work similarly as above and is used if we do not want to render anything if the condition is false */}
		</div>
	);
};

export default Person;
