import React, { useState, useEffect } from "react";
import Scen1 from "./Scen1";
import Scen2 from "./Scen2";
import Scen3 from "./Scen3";
import Scen4 from "./Scen4";
import Scen5 from "./Scen5";
import Scen6 from "./Scen6";
import Scen7 from "./Scen7";
import Scen8 from "./Scen8";
import Scen9 from "./Scen9";
import ThankYou from "./ThankYou";
import axios from "axios";
import {db} from "../firebase";
import { doc, setDoc, collection, query, where, getDocs  } from "firebase/firestore"; 
// import ExportToExcel from "./ExportToExcel";


const RandomScen = (props) => {

  const [formValues, setFormValues] = useState({
    IP: "",
    Scenario: "",
    Gender: "",
    Age: "",
    Email: "",
    Education: "",
    LivingArea: "",
    NumberOfSmartHomeApps: "",
    DishwasherFreq: "",
    WashingMachineFreq: "",
    OvenFreq: "",
    DishwasherDirtLevel: "",
    DishwasherDishType: [],
    DishwasherProgramNoNudge: "",
    DishwasherEcoProgram:"",
    DishwasherSocialNormProgram:"",
    WashingMachineDirtLevel: "",
    WashingMachineColor: "",
    WashingMachineFabricType: "",
    WashingMachineProgramNoNudge: "",
    WashingMachineEcoProgram: "",
    WashingMachineSocialNormProgram: "",
    OvenLevel: "",
    OvenFoodType:"",
    OvenProgramNoNudge: "",
    OvenEcoProgram:"",
    OvenSocialNormProgram:"",
    // Email: ""
  });
  // const [startTime, setStartTime] = useState(null);
  const [userIp, setUserIp] = useState(null);
  const [scenario, setScenario] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  // The userIp gets stored in db only if the experiment has been completed
  // A check is made in the start of the experiment whether the userIp exists.
  // If a userIp exists in db, they don't allow them to do the experiment again. (a "Thank you" page renders)
  // If the userIp does not exist in db, it renders a scenario for them.
  // If the user has done a part of the experiment but not getting it until the last page where the storing happens, then they have the potential to render a different scenario in every refresh.
  // The user's scenario is stored in db in the end of the experiment to ensure it has completely done.
  
  useEffect(() => {
    const getUserIp = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setUserIp(response.data.ip);
      } catch (error) {
        console.error(error);
      }
    };
    if (userIp) {
      db.collection('users')
      .where('IP', '==', userIp)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) { // 
          // IP address doesn't exist in the database
          console.log('IP address does not exist in the database');
          // Get the count of users for each scenario
          const scenarioCountPromises = [];
          for (let i = 1; i <= 9; i++) {
            const scenarioCountPromise = db
              .collection('users')
              .where('Scenario', '==', i)
              .get()
              .then((snapshot) => snapshot.size);
              console.log('scenarioCountPromise:', scenarioCountPromise);
            scenarioCountPromises.push(scenarioCountPromise);
          }
          // Once we have the counts, find the scenario with the fewest users
          Promise.all(scenarioCountPromises).then((scenarioCounts) => {
            console.log('scenarioCounts:', scenarioCounts);
            const minCount = Math.min(...scenarioCounts);
            console.log('minCount:', minCount);
            const scenariosWithMinCount = [];
            scenarioCounts.forEach((count, index) => {
              console.log('count:', count);
              if (count === minCount) {
                scenariosWithMinCount.push(index + 1); // Scenario numbers are 1-based
              }
            });
            console.log('scenariosWithMinCount:', scenariosWithMinCount);
            // Randomly choose one of the scenarios with the fewest users
            const randomScenarioIndex = Math.floor(Math.random() * scenariosWithMinCount.length);
            // console.log('randomScenarioIndex:', randomScenarioIndex);
            const scenarioNumber = scenariosWithMinCount[randomScenarioIndex];
            // Set the chosen scenario and store the IP address and chosen scenario in the database
            setScenario(scenarioNumber);
            console.log('scenario is:', scenarioNumber);
          });
        } 
        else {
          // IP address already exists in the database
          console.log('IP address already exists in the database');
          // Redirect in Thank you for your participation page
          setShowThankYou(true);
        }
      });
    }
    else {
      getUserIp();
    }
  }, [userIp]);

  const store = async () => {
    try {
      // Query Firestore for a user with the same ip address
      const usersRef = collection(db, 'users');
      const queryRef = query(usersRef, where('IP', '==', userIp));
      const matchingDocs = await getDocs(queryRef);

      if (matchingDocs.docs.length === 1) {
        // User already exists with this email, do not allow recording data again
        console.error('A user with this ip address already exists.');
        setShowThankYou(true);
      }
      else {
       // Update the Firestore document with the form values for the authenticated user
       const userDocRef = doc(db, 'users', userIp);
       await setDoc(userDocRef,{
          IP: userIp,
          Scenario: scenario,
          // durationInMinutes: (Date.now() - startTime) / (1000 * 60),
          Gender: formValues.Gender,
          Age: formValues.Age,
          Email: formValues.Email,
          Education: formValues.Education,
          LivingArea: formValues.LivingArea,
          NumberOfSmartHomeApps: formValues.NumberOfSmartHomeApps,
          DishwasherFreq: formValues.DishwasherFreq,
          WashingMachineFreq: formValues.WashingMachineFreq,
          OvenFreq: formValues.OvenFreq,
          DishwasherDirtLevel: formValues.DishwasherDirtLevel,
          DishwasherDishType: formValues.DishwasherDishType,
          DishwasherProgramNoNudge: formValues.DishwasherProgramNoNudge,
          DishwasherEcoProgram: formValues.DishwasherEcoProgram,
          DishwasherSocialNormProgram: formValues.DishwasherSocialNormProgram,
          WashingMachineDirtLevel: formValues.WashingMachineDirtLevel,
          WashingMachineColor: formValues.WashingMachineColor,
          WashingMachineFabricType: formValues.WashingMachineFabricType,
          WashingMachineProgramNoNudge: formValues.WashingMachineProgramNoNudge,
          WashingMachineEcoProgram: formValues.WashingMachineEcoProgram,
          WashingMachineSocialNormProgram: formValues.WashingMachineSocialNormProgram,
          OvenLevel: formValues.OvenLevel,
          OvenFoodType: formValues.OvenFoodType,
          OvenProgramNoNudge: formValues.OvenProgramNoNudge,
          OvenEcoProgram: formValues.OvenEcoProgram,
          OvenSocialNormProgram: formValues.OvenSocialNormProgram,
          // Email: formValues.Email
        });
        console.log("Form values submitted successfully");
        setFormValues({
          IP: "",
          Scenario: "",
          // durationInMinutes: (Date.now() - startTime) / (1000 * 60),
          Gender: "",
          Age: "",
          Email: "",
          Education: "",
          LivingArea: "",
          NumberOfSmartHomeApps: "",
          DishwasherFreq: "",
          WashingMachineFreq: "",
          OvenFreq:"",
          DishwasherDirtLevel: "",
          DishwasherDishType: [],
          DishwasherProgramNoNudge: "",
          DishwasherEcoProgram:"",
          DishwasherSocialNormProgram:"",
          WashingMachineDirtLevel: "",
          WashingMachineColor: "",
          WashingMachineFabricType: "",
          WashingMachineProgramNoNudge: "",
          WashingMachineEcoProgram: "",
          WashingMachineSocialNormProgram: "",
          OvenLevel: "",
          OvenFoodType:"",
          OvenProgramNoNudge: "",
          OvenEcoProgram:"",
          OvenSocialNormProgram:"", 
        });
        console.log(formValues);
      }
    }
    catch (e) {
    console.error('Form submission error: ', e);
    }
  };

  return (
    <div className="total-random-scenario">
      {/* <ExportToExcel /> */}
      {showThankYou ? (
        <ThankYou />
      ) : (
        <div className="random-scenario">
          {scenario === 1 && <Scen1 formValues={formValues} setFormValues={setFormValues} store={store} />}
          {scenario === 2 && <Scen2 formValues={formValues} setFormValues={setFormValues} store={store} />}
          {scenario === 3 && <Scen3 formValues={formValues} setFormValues={setFormValues} store={store} />}
          {scenario === 4 && <Scen4 formValues={formValues} setFormValues={setFormValues} store={store} />}
          {scenario === 5 && <Scen5 formValues={formValues} setFormValues={setFormValues} store={store} />}
          {scenario === 6 && <Scen6 formValues={formValues} setFormValues={setFormValues} store={store} />}
          {scenario === 7 && <Scen7 formValues={formValues} setFormValues={setFormValues} store={store} />}
          {scenario === 8 && <Scen8 formValues={formValues} setFormValues={setFormValues} store={store} />}
          {scenario === 9 && <Scen9 formValues={formValues} setFormValues={setFormValues} store={store} />}
        </div>
      )
    }
    </div>
  );  

};

export default RandomScen;