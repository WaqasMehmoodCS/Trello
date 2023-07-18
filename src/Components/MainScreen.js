import React, { Suspense, useEffect, useState } from "react";
import styles from "../Styles/MainScreen.module.css";
import { projects } from "../data/Projects";

// Dynamically import the "Team" component using React.lazy()
const Team = React.lazy(() => import("./Team"));

const MainScreen = () => {
  // State to store all projects
  const [allProject, setAllProject] = useState([]);

  useEffect(() => {
    // This effect runs when the component mounts
    let list = true;

    if (list) {
      // Set the "allProject" state to the projects data
      setAllProject(projects);
    }

    // Clean up function when the component unmounts
    return () => {
      list = false;
    };
  }, [allProject]); // The effect depends on the "allProject" state

  return (
    <>
      <div className={styles.mainScreen}>
        {/* Render the "Team" component for each project */}
        {allProject &&
          allProject.map((project) => {
            return (
              <Suspense fallback={<div>loading . . . </div>} key={project.id}>
                {/* Pass props to the "Team" component */}
                <Team projectName={project.name} id={project.id} />
              </Suspense>
            );
          })}
      </div>
    </>
  );
};

export default MainScreen;
