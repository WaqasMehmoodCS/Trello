// import styles from "../Styles/Team.module.css"; // Importing CSS styles
// import Card from "./Card.js"; // Importing the Card component

// import { teamMembers } from "../data/TeamMembers"; // Importing teamMembers data
// import { useEffect, useState } from "react"; // Importing React hooks

// const Team = ({ projectName }) => {
//   const [team, setTeam] = useState([]); // Initializing team state as an empty array

//   useEffect(() => {
//     let test = true; // Initializing the test variable as true

//     if (test) {
//       try {
//         switch (projectName) {
//           case "Software":
//             setTeam(teamMembers[0].softwareTeam); // Setting the team state to the softwareTeam data
//             break;
//           case "Car Leasing":
//             setTeam(teamMembers[2].carLeaseTeam); // Setting the team state to the carLeaseTeam data
//             break;
//           case "Marketing":
//             setTeam(teamMembers[1].marketingTeam); // Setting the team state to the marketingTeam data
//             break;
//           default:
//             break;
//         }
//       } catch (error) {
//         console.log("An error occured : ",error); // Logging any errors that occur during setting the team state
//       }
//     }

//     return () => {
//       test = false; // Cleaning up the effect by setting the test variable to false
//     };
//   }, [projectName]); // Running the effect whenever the projectName prop changes

//   return (
//     <div className={styles.team}>
//       <div className={styles.name}>{projectName}</div>
//       <div className={styles.cardContainer}>
//         {team.length > 0 ? (
//           <Card team={team} /> // Rendering the Card component with the team data
//         ) : (
//           <div>No Team is Available For This Project</div> // Rendering a message when no team data is available
//         )}
//       </div>
//     </div>
//   );
// };

// export default Team; // Exporting the Team component

import styles from "../Styles/Team.module.css";

// import Card from "./Card.js";

import { teamMembers } from "../data/TeamMembers";
import React,  { useEffect, useState } from "react";

const Card = React.lazy(()=>import('./Card.js'))

const Team = ({ projectName }) => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    let test = true;
    if (test) {
      try {
        switch (projectName) {
          case "Software":
            setTeam(teamMembers[0].softwareTeam);
            break;
          case "Car Leasing":
            setTeam(teamMembers[2].carLeaseTeam);
            break;
          case "Marketing":
            setTeam(teamMembers[1].marketingTeam);
            break;
          default:
            break;
        }
      } catch (error) {
        console.log(error);
      }
    }
    return () => {
      test = false;
    };
  }, [projectName]);

  return (
    <>
      <div className={styles.team}>
        <div className={styles.name}>{projectName}</div>
        <div className={styles.cardContainer}>
          {team.length > 0 ? (
            <Card team={team} />
          ) : (
            <div>No Team is Available For This Project</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Team;
