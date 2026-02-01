import { useState } from "react";

    export default function useGameLogic() {
        const [money, setMoney] = useState(0);
        const [clickForce, setClickForce] = useState(1);
        const [upgradeCost, setUpgradeCost] = useState(50);
        const [pasIncome, setPasIncome] = useState(0);
        const [operatorsValue, setOperatorsValue] = useState(0);
        
        function addMoneyForCall() {
            setMoney((prev) => prev + clickForce)
        }

        function increaceClickForce() {
            setClickForce(() => Math.round(clickForce * 1.07**2) + 1)
        }

        function spendMoney(currentCost: number) {
            setMoney((prev: number) => prev - currentCost)
        }

        function increaseUpgradeCost() {
            setUpgradeCost((prev: number) => Math.round(prev * 1.20**2)+1)
        }

        function hireOperator() {
            setPasIncome((prev: number) => prev + 1);
            setOperatorsValue((prev: number) => prev + 1);
        }


    return ({
        money,
        setMoney,
        clickForce,
        setClickForce,
        upgradeCost,
        setUpgradeCost,
        addMoneyForCall,
        increaceClickForce,
        spendMoney,
        increaseUpgradeCost,
        hireOperator,
        operatorsValue,
        pasIncome,
    });
}