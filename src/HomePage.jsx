import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React, { useState } from 'react';


// function HomePage() {
//     //function that creates a card with to values a title and then a paragraph
//     function getCard(title, paragraph) {
//         return (
//             <div className='fillertext'>
//                 <h1>{title}</h1>
//                 <p>{paragraph}</p>
//             </div>
//         );
//     }
//     //function that runs after request is done
//     function requestReceived(data){
//         console.log(data);
//     }

//     //need when making requests
//     useEffect(() => {
//         const url = 'http://127.0.0.1:5000/';
//         const params = { numbooks: 5 };
//         //creates new url with the paramaters
//         const urlWithParams = new URL(url);
//         Object.keys(params).forEach(key => 
//             urlWithParams.searchParams.append(key, params[key])
//         );
//         //request from flask server a dictionary of a list of dictionaries with book info
//         fetch(urlWithParams)
//         //after request is done checks if respone is ok
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             //after request is finished runs requestRecieved function defined above
//             .then(requestReceived)
//             .catch(error => console.error('Error:', error));
//     }, []);
//     //create navigate function for page switching
//     const navigate = useNavigate();
//     const dataList = [
//         { message: 'Hello from Home!', id: 1 },
//         { message: 'Hello from Home!', id: 2 },
//         { message: 'Hello from Home!', id: 3 }
//     ];
//     //allows naivagation between pages on click new page changing depending on index
//     const handleClick = (num) => {
//         navigate('/new-page', { state: dataList[num] });
//     };
//     //makes the buttons taht you can click o to go to a new page
//     return (
//         <div>
//             <button onClick={() => handleClick(0)}>
//                 {getCard("", "1")}
//             </button>
//             <button onClick={() => handleClick(1)}>
//                 {getCard("", "2")}
//             </button>
//             <button onClick={() => handleClick(2)}>
//                 {getCard("", "3")}
//             </button>
//         </div>
//     );
// }

function HomePage() {
    //function that creates a card with to values a title and then a paragraph
    const [count, setCount] = useState(75);
    const [gencount, setGen]=useState(1);
    function nextGen(){
        setGen(gencount+1)
    }
    function doCount(){
        setCount(count - 1);
        // console.log("eating ice cream "+count);
    }
    function salad(){
        setCount(count+1)
    }
    function lavacake(){
        setCount(count-50)
    }
    var message=(<p>Hi there my name is Bob jr the {gencount}.My father died and I have {count} days left to live.</p>)
    var buttons = (<button onClick={doCount}> Free ice cream.  </button>)
    if (count == 50){
        buttons = (<><button onClick={salad}> Free Salad.  </button>
                    <button onClick={lavacake}> Free Lava cake!!!!!  </button></>)
    }
    if (count == 0){
        nextGen()
        setCount(count+75)
    }
    return (
        <div>
            {message}
            {buttons}
        </div>
    );
    
}

export default HomePage;