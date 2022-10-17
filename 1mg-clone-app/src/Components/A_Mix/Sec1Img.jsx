
import { useState, useEffect } from "react"
import { Sec1ImgList } from "./Sec1ImgList";

const getData = (page) => {
    return fetch(`http://localhost:3000/sec1`).then ((res) => {
        return res.json();
    })
}

export const Sec1Img = () => {

    const [imageList, setImageList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect ( () => {
        fetchAndUpdateData()
    },[]);
    
    const fetchAndUpdateData = () => {
        setLoading(true);
        getData().then((data) => {
        console.log(data);
        setImageList(data);
        setLoading(false);
      })
      .catch ((err) => {
        setLoading(false);
        setError(true);
      }) 
  
    };
  
    if(loading) {
      return <h1>Loading...</h1>
    }
  
    if(error) {
      return <h1>Something went wrong</h1>
    }
  
    return (
      <div>
        {imageList.map((items) => (
        <Sec1ImgList key={items.id} {...items} />
        ))}
      </div>
    );
  };



