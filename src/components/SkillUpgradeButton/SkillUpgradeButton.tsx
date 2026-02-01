import type { ISkillUpgradeButton } from "../../types"

export default function SkillUpgradeButton(
    {increaseClickForce, spendMoney, increaseCost, disableCondition, children}: ISkillUpgradeButton
) {
    return (
    <button onClick={() => {
          increaseClickForce(),
          spendMoney(),
          increaseCost()
        }}
        disabled={disableCondition}
        >
          {children}
        </button>
        )
}