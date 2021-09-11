import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import DogPhoto from "./DogPhoto";

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

function Dogs() {
  const [selectedDog, setselectedDog] = useState("");
  const { loading, error, data } = useQuery(GET_DOGS);

  useEffect(() => {
    if (data) {
      setselectedDog(data?.dogs[0]?.breed);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  const onDogSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setselectedDog(event.target.value);
  };

  return (
    <>
      <select name="dog" onChange={onDogSelected} value={selectedDog}>
        {data.dogs.map((dog: any) => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>
      <br />
      <DogPhoto breed={selectedDog} />
    </>
  );
}

export default Dogs;
