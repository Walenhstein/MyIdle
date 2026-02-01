
import './App.css'
import HireOperatorButton from './components/HireOperatorButton/HireOperatorButton';
import MainEarningButton from './components/MainEarningButton/MainEarningButton';
import SkillUpgradeButton from './components/SkillUpgradeButton/SkillUpgradeButton';
import useGameLogic from './hooks/useGameLogic'
import usePassiveIncome from './hooks/usePassiveIncome';
import countPrettier from './UI/UICountFormatter';

function App() {

  const {
    money,
    clickForce,
    upgradeCost,
    addMoneyForCall,
    increaceClickForce,
    spendMoney,
    increaseUpgradeCost,
    hireOperator,
    operatorsValue,
    setMoney,
    pasIncome,
  } = useGameLogic();
  usePassiveIncome(setMoney, pasIncome);
  return (
    <>
     
      <h1>Money: ${countPrettier(money)}</h1>
      <div className="card">
        <MainEarningButton
        addMoneyForCall={()=>addMoneyForCall()}
        > 
        Make a call
        </MainEarningButton>

        <SkillUpgradeButton
          increaseClickForce = {() => increaceClickForce()} 
          spendMoney = {() => spendMoney(upgradeCost)}
          increaseCost = {() => increaseUpgradeCost()} 
          disableCondition = {money<upgradeCost}
        >
          Upgrade Skills
        </SkillUpgradeButton>

        <HireOperatorButton
        hireOperator={() => hireOperator()}
        spendMoney={() => spendMoney(10)}
        disableCondition={operatorsValue>=5 || money<10}
        >
          Hire a new operator
        </HireOperatorButton>

         <span>Cost: {upgradeCost}$ </span>
        <p> You earning to call: {clickForce}$</p>
      </div>
    </>
  )
}



export default App
