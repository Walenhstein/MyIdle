import type { IHireOperatorButton } from "../../types"

export default function HireOperatorButton(
    {hireOperator, spendMoney, children, disableCondition}: IHireOperatorButton
) {
    return(
    <button onClick={() => {
                hireOperator()
                spendMoney()
            }}
        disabled={disableCondition}
    >
        {children}
    </button>
)}