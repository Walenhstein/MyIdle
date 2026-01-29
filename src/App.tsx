
import './App.css'
import MainEarningButton from './components/MainEarningButton/MainEarningButton';
import SkillUpgradeButton from './components/SkillUpgradeButton/SkillUpgradeButton';
import useGameLogic from './hooks/useGameLogic'

function App() {

  const {
    money,
    clickForce,
    cost,
    addMoneyForCall,
    increaceClickForce,
    spendMoney,
    increaseCost
  } = useGameLogic();
  
  return (
    <>
     
      <h1>Money: {money}$</h1>
      <div className="card">
        <MainEarningButton
        addMoneyForCall={()=>addMoneyForCall()}
        > 
        Make a call
        </MainEarningButton>

        <SkillUpgradeButton
          increaceClickForce = {() => increaceClickForce()} 
          spendMoney = {() => spendMoney()}
          increaseCost = {() => increaseCost()} 
          disableCondition = {money<cost}
        >
          Upgrade Skills
        </SkillUpgradeButton>

         <span>Cost: {cost}$ </span>
        <p> You earning to call: {clickForce}$</p>
      </div>
    </>
  )
}



export default App
