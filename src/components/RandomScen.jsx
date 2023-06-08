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
import axios from "axios";
import {db} from "../firebase";
import { doc, setDoc, updateDoc, collection, query, where, getDocs  } from "firebase/firestore"; 

const RandomScen = (props) => {

  const [formValues, setFormValues] = useState({
    Gender: "",
    Age: "",
    Education: "",
    LivingArea: "",
    NumberOfSmartHomeApps: "",
    DishwasherFreq: "",
    WashingMachineFreq: "",
    OvenFreq: "",
    DishwasherDirtLevel: "",
    DishwasherDishType: [],
    DishwasherProgram: "",
    DishwasherEcoProgram:"",
    DishwasherSocialNormProgram:"",
    WashingMachineDirtLevel: "",
    WashingMachineColor: "",
    WashingMachineFabricType: "",
    WashingMachineProgram: "",
    WashingMachineEcoProgram: "",
    WashingMachineSocialNormProgram: "",
    OvenLevel: "",
    OvenFoodType:"",
    OvenProgram: "",
    OvenEcoProgram:"",
    OvenSocialNormProgram:""
  });
  const [startTime, setStartTime] = useState(null);
  const [userIp, setUserIp] = useState(null);
  const [scenario, setScenario] = useState(null);
  const [ipExists, setIpExists] = useState(false);
  const [ipFetched, setIpFetched] = useState(false);
  const [prevUserIp, setPrevUserIp] = useState(null);

  useEffect(() => {
    const getUserIp = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setUserIp(response.data.ip);
        setIpFetched(true);
      } catch (error) {
        console.error(error);
      }
    };
    if (ipFetched && userIp) {
      db.collection('users')
      .where('ip', '==', userIp)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) { // 
          // IP address doesn't exist in the database
          console.log('IP address does not exist in the database');
          setIpExists(false);
          // Get the count of users for each scenario
          const scenarioCountPromises = [];
          for (let i = 1; i <= 9; i++) {
            const scenarioCountPromise = db
              .collection('users')
              .where('scenario', '==', i)
              .get()
              .then((snapshot) => snapshot.size);
              console.log('scenarioCountPromise:', scenarioCountPromise);
            scenarioCountPromises.push(scenarioCountPromise);
          }
          // Once we have the counts, find the scenario with the fewest users
          Promise.all(scenarioCountPromises).then((scenarioCounts) => {
            const minCount = Math.min(...scenarioCounts);
            const scenariosWithMinCount = [];
            scenarioCounts.forEach((count, index) => {
              if (count === minCount) {
                scenariosWithMinCount.push(index + 1); // Scenario numbers are 1-based
              }
            });
            console.log('scenariosWithMinCount:', scenariosWithMinCount);
            // Randomly choose one of the scenarios with the fewest users
            const randomScenarioIndex = Math.floor(Math.random() * scenariosWithMinCount.length);
            console.log('randomScenarioIndex:', randomScenarioIndex);
            const scenarioNumber = scenariosWithMinCount[randomScenarioIndex];
            // Set the chosen scenario and store the IP address and chosen scenario in the database
            setScenario(scenarioNumber);
            console.log('scenario is:', scenarioNumber);
            const userDocRef = doc(collection(db, 'users'), userIp);
            setDoc(userDocRef, { id: userIp, scenario: scenarioNumber }, { merge: true });
          });
        } 
        else {
          // IP address already exists in the database
          console.log('IP address already exists in the database');
          setIpExists(true);
        }
      });
    }
    else {
      getUserIp();
    }
  }, []);

  const store = async () => {
    try {
      // Query Firestore for a user with the same ip address
      const usersRef = collection(db, 'users');
      const queryRef = query(usersRef, where('ip', '==', userIp));
      const matchingDocs = await getDocs(queryRef);

      if (matchingDocs.docs.length > 1) {
        // User already exists with this email, do not allow recording data again
        console.error('A user with this ip address already exists.');
        return;
      }
      else {
        // console.log(formValues.level);
       // Update the Firestore document with the form values for the authenticated user
       const userDocRef = doc(db, 'users', userIp);
       await updateDoc(userDocRef,{
          ip: userIp,
          durationInMinutes: (Date.now() - startTime) / (1000 * 60),
          Gender: formValues.Gender,
          Age: formValues.Age,
          Education: formValues.Education,
          LivingArea: formValues.LivingArea,
          NumberOfSmartHomeApps: formValues.NumberOfSmartHomeApps,
          DishwasherFreq: formValues.DishwasherFreq,
          WashingMachineFreq: formValues.WashingMachineFreq,
          OvenFreq: formValues.OvenFreq,
          DishwasherDirtLevel: formValues.DishwasherDirtLevel,
          DishwasherDishType: formValues.DishwasherDishType,
          DishwasherProgram: formValues.DishwasherProgram,
          DishwasherEcoProgram: formValues.DishwasherEcoProgram,
          DishwasherSocialNormProgram: formValues.DishwasherSocialNormProgram,
          WashingMachineDirtLevel: formValues.WashingMachineDirtLevel,
          WashingMachineColor: formValues.WashingMachineColor,
          WashingMachineFabricType: formValues.WashingMachineFabricType,
          WashingMachineProgram: formValues.WashingMachineProgram,
          WashingMachineEcoProgram: formValues.WashingMachineEcoProgram,
          WashingMachineSocialNormProgram: formValues.WashingMachineSocialNormProgram,
          OvenLevel: formValues.OvenLevel,
          OvenFoodType: formValues.OvenFoodType,
          OvenProgram: formValues.OvenProgram,
          OvenEcoProgram: formValues.OvenEcoProgram,
          OvenSocialNormProgram: formValues.OvenSocialNormProgram
        });
        console.log("Form values submitted successfully");
        setFormValues({
          DishwasherDirtLevel: "",
          DishwasherDishType: [],
          DishwasherProgram: "",
          DishwasherEcoProgram:"",
          DishwasherSocialNormProgram:"",
          WashingMachineDirtLevel: "",
          WashingMachineColor: "",
          WashingMachineFabricType: "",
          WashingMachineProgram: "",
          WashingMachineEcoProgram: "",
          WashingMachineSocialNormProgram: "",
          OvenLevel: "",
          OvenFoodType:"",
          OvenProgram: "",
          OvenEcoProgram:"",
          OvenSocialNormProgram:""
        });
        console.log(formValues);
      }
    }
    catch (e) {
    console.error('Form submission error: ', e);
    }
    setPrevUserIp(userIp);
  };

  return (
    <div>
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
  );  

};

export default RandomScen;