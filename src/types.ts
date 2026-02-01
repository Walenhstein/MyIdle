export interface IMainEarningButton {
    addMoneyForCall: () => void;
    children: string;
}

interface IBasedButton {
    spendMoney: () => void;
    disableCondition: boolean;
    children: string;
}

export interface ISkillUpgradeButton extends IBasedButton {
    increaseClickForce: () => void;
    increaseCost: () => void;
}

export interface IHireOperatorButton extends IBasedButton {
    hireOperator: () => void;
}