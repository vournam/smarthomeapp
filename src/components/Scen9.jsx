import React from "react";
import DishwasherHome from "./DishwasherHome";
import DishwasherDishType from './DishwasherDishType';
import DishwasherDirtLevel from './DishwasherDirtLevel';
import DishwasherProgramNoNudge from './DishwasherProgramNoNudge';
import OvenHome from "./OvenHome";
import OvenFoodType from './OvenFoodType';
import OvenLevel from './OvenLevel';
import OvenSocialNormProgram from './OvenSocialNormProgram';
import WashingMachineHome from "./WashingMachineHome";
import WashingMachineFabricType from './WashingMachineFabricType';
import WashingMachineColor from './WashingMachineColor';
import WashingMachineDirtLevel from './WashingMachineDirtLevel';
import WashingMachineEcoProgram from './WashingMachineEcoProgram';
import Progress from "./Progress";
import Scenario from "./Scenario";

const Scen9 = (props) => {

    const page1 = DishwasherHome;
    const page2 = DishwasherDishType;
    const page3 = DishwasherDirtLevel;
    const page4 = DishwasherProgramNoNudge;
    const page5 = Progress;
    const page6 = OvenHome;
    const page7 = OvenFoodType;
    const page8 = OvenLevel;
    const page9 = OvenSocialNormProgram;
    const page10 = Progress;
    const page11 = WashingMachineHome;
    const page12 = WashingMachineFabricType;
    const page13 = WashingMachineColor;
    const page14 = WashingMachineDirtLevel;
    const page15 = WashingMachineEcoProgram;
    const page16 = Progress;
    const scenario = 9;
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
export default Scen9;
