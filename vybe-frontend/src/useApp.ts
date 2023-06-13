import {useState, useEffect} from 'react';
import {baseApiUrl} from './configs/constants';

export const useApp = ()=>{
    const [marketCap, setMarketCap] = useState();
    const [marketCapChart, setMarketCapChart] = useState<any>();
    const [tpsChart, setTpsChart] = useState<any>();
    const [balanceChart, setBalanceChart] = useState<any>();
  
    useEffect(()=>{
      const marketcapFetch = async () => {
        const result = (
          await Promise.all([
            fetch(baseApiUrl+"/get-market-cap"),
            fetch(baseApiUrl+"/get-performance"),
            fetch(baseApiUrl+"/get-balance")
          ])
        ).map((r) => r.json());
  
        // and waiting a bit more - fetch API is cumbersome
        const [marketCap, performance, addressBalance] = await Promise.all(
          result
        );
        createMarketCapChart(marketCap.data);
        createBalanceChart(addressBalance.data);
        createTpsChart(performance.data);
          }
         marketcapFetch();
    },[]);
     
    const createMarketCapChart = (marketCapResponse)=>{
      setMarketCapChart({
        series: marketCapResponse?.map(data=>  parseFloat(data?.marketCapital?.toFixed(2)) ),
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: marketCapResponse?.map(data=>data?.symbol),
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
            }]
          }
      });
    }
    const createTpsChart = (performanceResponse)=>{
      setTpsChart({
        series: [{
          name: "TPS",
          data: performanceResponse?.map(data=>(data?.numTransactions/data?.samplePeriodSecs) )
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: true,
            autoScaleYaxis: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Transaction Per Seconds',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: performanceResponse?.map((data,index)=>index),
          labels: {
            formatter: function(value) {
              return value + 'min ago'
            }
          }
        }
      },
    
    
    });
    }
    const createBalanceChart = (addressBalance)=>{
      setBalanceChart({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: addressBalance?.map(data=>data?.address)
          }
        },
        series: [
          {
            name: "Sol Balance",
            data: addressBalance?.map(data=> parseFloat(data?.balance?.toFixed(2)))
          }
        ]
      });
    }
    return{
        marketCapChart,
        tpsChart,
        balanceChart,
    };
}