
import './App.css'
import Chart from "react-apexcharts";
import {useApp} from './useApp';



function App() {
  const {
    marketCapChart,
    tpsChart,
    balanceChart,
  } = useApp();
  return (
    <>
      <div>
      {marketCapChart &&
      <>
      <h1>Market Capital (USD)</h1>
      <div className="card">
        <Chart
              options={marketCapChart?.options}
              series={marketCapChart?.series}
              type="pie"
              width="500"
            />
       
        </div>
        </>
         }
      </div>
      { tpsChart &&
      <>
      <h1>Transaction Per second</h1>
      <div className="card">
         <Chart
          options={tpsChart?.options}
          series={tpsChart?.series}
          type="line"
        />
        </div>
        </>
        }
        {balanceChart&& 
       <>
       <h1>Wallet Balance</h1>
       <div className="card"> 
       <Chart
          options={balanceChart.options}
          series={balanceChart.series}
          type="bar"
          width="1000"
       />
        </div>
        </>
        } 
      
    </>
  )
}

export default App
