import { useEffect, useState } from "react";
import { getPets } from "../js/fetch";
import Cards from "../components/Cards";
import { IoMaleFemaleSharp } from "react-icons/io5";
import { IoMdMale } from "react-icons/io";
import { useParams } from "react-router-dom";
import SkeletonCard from "../components/Skeleton";

function Pets() {
  const skeletonArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(true);

  const { pet } = useParams();

  useEffect(() => {
    const url = `https://huachitos.cl/api/animales/tipo/${pet}`;
    getPets(url, setData, setError);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [pet]);

  console.log(loading);
  if (loading) {
    return (
      <div className="container-fluid d-flex justify-content-around  flex-wrap mt-5">
        {skeletonArr.map((s) => {
          return <SkeletonCard key={s} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="container-fluid d-flex justify-content-around flex-wrap mt-5">
        {data ? (
          data.map((a) => {
            return (
              <Cards
                img={a.imagen}
                name={a.nombre}
                key={a.id}
                genre={
                  a.genero === "hembra" ? (
                    <IoMaleFemaleSharp color="purple" size={30} />
                  ) : (
                    <IoMdMale color="blue" size={30} />
                  )
                }
                details={a.url}
              />
            );
          })
        ) : (
          <div>{error}</div>
        )}
      </div>
    );
  }
}

export default Pets;
