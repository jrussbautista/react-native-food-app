import React, {useEffect, useState} from 'react';
import {db} from '../firebase';

const useCollection = collection_name => {
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCollection() {
      try {
        const query = db.collection('categories');
        const snapshot = await query.get();
        const collection = snapshot.docs.map(col => {
          return {
            id: col.id,
            ...col.data(),
          };
        });
        setCollection(collection);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    getCollection();
  }, []);
  return {[collection_name]: collection, isLoading};
};

export default useCollection;
