export interface IMainEarningButton {
    addMoneyForCall: () => void;
    children: string;
}

export interface ISkillUpgradeButton {
    increaceClickForce: () => void;
    spendMoney: () => void;
    increaseCost: () => void;
    disableCondition: boolean;
    children: string;
}