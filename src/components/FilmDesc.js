import React from 'react'

const FilmDesc = (props) => {
    const detail=props.films.find(el=>el.name==props.match.params.name);
    console.log(detail) ;
    return (
        <div style={{color:"white"}} >
            <p>{detail.name}</p>
            <p>{detail.description}</p>*
            <p>{detail.video}</p>
        </div>
    )
}

export default FilmDesc
