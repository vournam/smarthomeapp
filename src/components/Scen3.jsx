import React from "react";
import WashingMachineHome from "./WashingMachineHome";
import WashingMachineFabricType from './WashingMachineFabricType';
import WashingMachineColor from './WashingMachineColor';
import WashingMachineDirtLevel from './WashingMachineDirtLevel';
import WashingMachineProgramNoNudge from './WashingMachineProgramNoNudge';
import OvenHome from "./OvenHome";
import OvenFoodType from './OvenFoodType';
import OvenLevel from './OvenLevel';
import OvenEcoProgram from './OvenEcoProgram';
import DishwasherHome from "./DishwasherHome";
import DishwasherDishType from './DishwasherDishType';
import DishwasherDirtLevel from './DishwasherDirtLevel';
import DishwasherSocialNormProgram from './DishwasherSocialNormProgram';
import Progress from "./Progress";
import Scenario from "./Scenario";

const Scen3 = (props) => {

    const page1 = WashingMachineHome;
    const page2 = WashingMachineFabricType;
    const page3 = WashingMachineColor;
    const page4 = WashingMachineDirtLevel;
    const page5 = WashingMachineProgramNoNudge;
    const page6 = Progress;
    const page7 = OvenHome;
    const page8 = OvenFoodType;
    const page9 = OvenLevel;
    const page10 = OvenEcoProgram;
    const page11 = Progress;
    const page12 = DishwasherHome;
    const page13 = DishwasherDishType;
    const page14 = DishwasherDirtLevel;
    const page15 = DishwasherSocialNormProgram;
    const page16 = Progress;
    const scenario = 3;
    const formValues = props.formValues;
    const setFormValues = props.setFormValues;
    const store = props.store;

    // console.log('formValuesScen', formValues);

    return (
        <Scenario 
            page1={page1} 
            page2={page2} 
            page3={page3} 
            page4={page4} 
            page5={page5} 
            page6={page6} 
            page7={page7}
            page8={page8}
            page9={page9}
            page10={page10}
            page11={page11}
            page12={page12}
            page13={page13}
            page14={page14}
            page15={page15}
            page16={page16}
            scenario={scenario}
            formValues={formValues}
            setFormValues={setFormValues}
            store={store}
         />
    );
}
export default Scen3;
