import { gql, NetworkStatus, useQuery } from "@apollo/client";

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }: { breed: string }) {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed },
      notifyOnNetworkStatusChange: true,
      // pollInterval: 500,
    }
  );

  if (networkStatus === NetworkStatus.refetch) return <div>'Refetching!'</div>;
  if (loading) return <div>photo loading...</div>;
  if (error) return <div>Error! {error}</div>;

  return (
    <>
      <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      <button
        onClick={() =>
          refetch({
            breed, // Always refetches a dalmatian instead of original breed
          })
        }
      >
        Refetch!
      </button>
    </>
  );
}

export default DogPhoto;
