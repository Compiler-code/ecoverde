import React, { useEffect, useState } from 'react';

const SearchResults = ({queries}) => {
  const [ properties, setProperties ] = useState( [] );
  
    useEffect( () => {
      const fetchProperties = async () => {
        try {
          const res = await fetch( "http://localhost:8000/properties" );
          const data = await res.json();
          const fusion = [ ...data[ 0 ], ...data[ 1 ] ];
          setProperties( fusion );
        } catch ( error ) {
          toast.error( error );
        }
      };
  
      fetchProperties();
    }, [] );

  return (
    <div className="search-results">{queries}</div>
  );
};

export default SearchResults;