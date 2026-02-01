import { useEffect, useRef, type SetStateAction } from "react";
//import useGameLogic from "./useGameLogic";

export default function usePassiveIncome(
    setMoney: React.Dispatch<SetStateAction<number>>,
    pasIncome: number
) {

const refPeriod = useRef(Date.now());
//const {setMoney, pasIncome} = useGameLogic();

useEffect(() => {
    const intervalIncome = setInterval(() => {
        const delta = Date.now() - refPeriod.current;
        if (delta>0) {setMoney((prev:number) => prev + (pasIncome*(delta/1000)));
        refPeriod.current = Date.now();}
    }, 100);
    return () => clearInterval(intervalIncome);
},[pasIncome]); 
}