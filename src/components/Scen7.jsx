import React from "react";
import OvenHome from "./OvenHome";
import OvenFoodType from './OvenFoodType';
import OvenLevel from './OvenLevel';
import OvenEcoProgram from './OvenProgram';
import WashingMachineHome from "./WashingMachineHome";
import WashingMachineFabricType from './WashingMachineFabricType';
import WashingMachineColor from './WashingMachineColor';
import WashingMachineDirtLevel from './WashingMachineDirtLevel';
import WashingMachineProgram from './WashingMachineSocialNormProgram';
import DishwasherHome from "./DishwasherHome";
import DishwasherDishType from './DishwasherDishType';
import DishwasherDirtLevel from './DishwasherDirtLevel';
import DishwasherSocialNormProgram from './DishwasherEcoProgram';
import Progress from "./Progress";
import Scenario from "./Scenario";

const Scen7 = (props) => {

    const page1 = OvenHome;
    const page2 = OvenFoodType;
    const page3 = OvenLevel;
    const page4 = OvenEcoProgram;
    const page5 = Progress;
    const page6 = WashingMachineHome;
    const page7 = WashingMachineFabricType;
    const page8 = WashingMachineColor;
    const page9 = WashingMachineDirtLevel;
    const page10 = WashingMachineProgram;
    const page11 = Progress;
    const page12 = DishwasherHome;
    const page13 = DishwasherDishType;
    const page14 = DishwasherDirtLevel;
    const page15 = DishwasherSocialNormProgram;
    const page16 = Progress;
    const scenario = 7;
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
export default Scen7;
