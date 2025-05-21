import data from "./source.json"

export const db = data

export const loader = async ( params ) => {
  const res = await fetch( `http://localhost:8000/${params}` );
  const data = await res.json();

  return data;
};