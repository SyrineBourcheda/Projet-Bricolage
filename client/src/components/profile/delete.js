import React from 'react';
import axios from 'axios';

const Delete = (props) => {

    let request = axios.delete(`/api/delete_ad?id=${props.match.params.id}`)
                .then(request =>{
                    
                        props.history.push('/profile')
                    
                })

    return (
        <div >
        </div>
    );
};

export default Delete;