import type { IMainEarningButton } from "../../types";


export default function MainEarningButton({addMoneyForCall, children}:IMainEarningButton) {
  
    return (
        <button onClick={addMoneyForCall}>
            { children }
        </button>
    )
}