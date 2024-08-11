import {useState} from 'react';

function AddArtist(){
    const [artist, setArtist] = useState("");

    function handleArtistChange(event){
        const newArtist = event.target.value;
        setArtist(newArtist);
    }
    
    return (
        <input type="text" placeholder="Name" value = {artist} onChange={handleArtistChange}/>
       
    )
}

export default AddArtist;