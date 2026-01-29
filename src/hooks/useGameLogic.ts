import { useEffect, useState } from "react";

    export default function useGameLogic() {
        const [money, setMoney] = useState(0);
        const [clickForce, setClickForce] = useState(1);
        const [cost, setCost] = useState(50);
        
        useEffect(() => {

        })
        
        function addMoneyForCall() {
            setMoney((prev) => prev + clickForce)
        }

        function increaceClickForce() {
            setClickForce(() => Math.round(clickForce * 1.07**2) + 1)
        }

        function spendMoney() {
            setMoney((prev: number) => prev - cost)
        }

        function increaseCost() {
            setCost((prev: number) => Math.round(prev * 1.20**2)+1)
        }


    return ({
        money,
        setMoney,
        clickForce,
        setClickForce,
        cost,
        setCost,
        addMoneyForCall,
        increaceClickForce,
        spendMoney,
        increaseCost,

    });
}