import type { ISkillUpgradeButton } from "../../types"

export default function SkillUpgradeButton(
    {increaceClickForce, spendMoney, increaseCost, disableCondition, children}: ISkillUpgradeButton
) {
    return (
    <button onClick={() => {
          increaceClickForce(),
          spendMoney(),
          increaseCost()
        }}
        disabled={disableCondition}
        >
          {children}
        </button>
        )
}