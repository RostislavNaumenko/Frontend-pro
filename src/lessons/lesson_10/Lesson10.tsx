import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./lesson10.module.css";
import MyButton from "../../components/myButton/MyButton";
import Loader from "../../components/loader/Loader";

export default function Lesson10() {
  const [facts, setFacts] = useState<string[]>([]);
  const [load, setLoad] = useState<boolean>(true);

  function addFact(): void {
    startLoad();
    setTimeout(async () => {
      fetchdata().then((newFact) => {
        setFacts((prevFacts) => [...prevFacts, newFact]);
        finishLoad();
      });
    }, 1000);
  }

  function startLoad(): void {
    setLoad(true);
  }

  function finishLoad(): void {
    setLoad(false);
  }

  function deleteAllFacts(): void {
    startLoad();
    setTimeout(() => {
      setFacts([]);
      finishLoad();
    }, 1000);
  }

  const fetchdata = async (): Promise<string> => {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    const fact = data.fact;
    return fact;
  };

  useEffect(() => {
    addFact();
  }, []);

  console.log(facts);

  return (
    <div className={styles.desk + " " + styles.app}>
      <div className={styles.app}>
        <MyButton text="GET MORE INFO" onClick={addFact} />
        {facts.length > 0 ? (
          <MyButton text="DELETE ALL DATA" onClick={deleteAllFacts} />
        ) : (
          <></>
        )}
      </div>
      {load ? (
        <Loader />
      ) : (
        <div
          className={cn(styles.facts, {
            [styles.factsBorder]: facts.length > 0,
          })}
        >
          {facts.map((fact, index) => (
            <li className={styles.app} key={index}>
              {fact}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
