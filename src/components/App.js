// create your App component here

// import { handlers } from "../mocks/handlers";
// import { server } from "../mocks/server";


import React, { useEffect, useState } from "react";
import { data } from "../mocks/data";




function App() {

    const [image, setImage] = useState(null)
    //console.log(data)
    //console.log(data.message)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setImage(data))
    }, [])


    if (!image){
        return <h2>Loading</h2>
    }


   

    return (
        <div>
            <h1>Dog Image</h1>
            <img src={data.message} alt="A Random Dog"/>
        </div>
    )

}

export default App;

// Create an App component from scratch
// Use the useEffect hook in the App component. Inside the callback for useEffect, send a fetch request to https://dog.ceo/api/breeds/image/random, 
// a free API that returns a random image of a dog.
// Display a <p> tag with the text of "Loading..." when the component is first rendered
// After receiving a response from the API, show the dog image in an <img> tag, with the alt attribute set to "A Random Dog".










// import React, { useEffect, useState } from "react";
// import { data } from "../mocks/data";




// function App() {

//     const [image, setImage] = useState(null)
//     //console.log(data)
//     //console.log(data.message)

//     useEffect(() => {
//         fetch("https://dog.ceo/api/breeds/image/random")
//         .then(res => res.json())
//         .then(data => setImage(data))
//     }, [])


//     if (!image){
//         return <h2>loading</h2>
//     }


   

//     return (
//         <div>
//             <h1>Hiiiii</h1>
//             <img src={data.message} alt="A Random Dog"/>
//         </div>
//     )

// }

// export default App;






