import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY, CONTEXT_KEY } from './Key';

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  console.log('>>>>>>>>>> term', term);
  console.log('>>>>>>>>>> API', API_KEY);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;

//const CONTEXT_KEY = '304991159e51fb4ae';

//GET https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures

//https://www.googleapis.com/customsearch/v1?key=AIzaSyBuF4bsmiA1e_OEG8bo6_oISnAR8LXbQDk&cx=304991159e51fb4ae&q=learn

// fetch(`GET https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)

// function useGoogleSearch(term) {
//    const [data, setData] = useState(null);

//    console.log('>>>>>>>>>> term', term);
//    console.log('>>>>>>>>>> API', API_KEY);
//    useEffect(() => {
//      const fetchData = async () => {
//        fetch(
//          `GET https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
//        )
//          .then((response) => response.json())
//          .then((result) => {
//            setData(result);
//            console.log('>>>>>>>>>>result', result);
//          });
//      };
//      fetchData();
//    }, [term]);
//    return { data };
//  }

// useEffect(() => {
//    try {
//      const fetchData = axios.get(
//        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
//
//      );
//      if (fetchData) {
//        console.log(fetchData);
//      }
//    } catch (e) {
//      console.log(e);
//    }
//  }, [term]);

//  return { data };
// };
