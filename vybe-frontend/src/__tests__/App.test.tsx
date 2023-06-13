import { render, screen } from "@testing-library/react";
import App from "../App";
import  React from "react"
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ResizeObserver from 'resize-observer-polyfill';

import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";

global.ResizeObserver = ResizeObserver;
global.React = React;

jest.mock('react-apexcharts', () => jest.fn(() => { return null }));
jest.mock('apexcharts', () => ({ exec: jest.fn(() => { return new Promise((resolve, reject) => { resolve("uri") }) }) }));
const mock = {
balanceChart: {
	series: [{
		data: [400, 430]
	  }],
	options: {
		chart: {
		  type: 'bar',
		  height: 350
		},
		plotOptions: {
		  bar: {
			borderRadius: 4,
			horizontal: true,
		  }
		},
		dataLabels: {
		  enabled: false
		},
		xaxis: {
		  categories: [ "7VHUFJHWu2CuExkJcJrzhQPJ2oygupTWkL2A2For4BmE",
		  "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"
		  ],
		}
	  }
}, 
marketCapChart: {
	series: [20059256.588990252, 1057680.4350760388],
    options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ["7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU","CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG"],
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
},
tpsChart: {
          
	series: [{
		name: "TPS",
		data: [43341,3939]
	}],
	options: {
	  chart: {
		height: 350,
		type: 'line',
		zoom: {
		  enabled: false
		}
	  },
	  dataLabels: {
		enabled: false
	  },
	  stroke: {
		curve: 'straight'
	  },
	  title: {
		text: 'Transaction per Second',
		align: 'left'
	  },
	  grid: {
		row: {
		  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
		  opacity: 0.5
		},
	  },
	  xaxis: {
		categories: [199344569,199344446],
	  }
	}
 }
}

jest.mock('../useApp', () => ({
		useApp:()=>{
			return mock;
		}
}));

const useStateSpy = jest.spyOn(React, "useState");

describe("App", () => {
  
      
  it("should work as expected", () => {
    shallow(<App />);
  });
  
  it("should render the Market Cap chart",()=>{
		const wrapper = shallow(<App/>);
		const  marketCap = <h1>Market Capital</h1>
		expect(wrapper.contains(marketCap)).toEqual(true);
  });
  it("should render the TPS chart",()=>{
	const wrapper = shallow(<App/>);
	const  tps = <h1>Transaction Per second</h1>
	expect(wrapper.contains(tps)).toEqual(true);
});
it("should render the Balance chart",()=>{
	const wrapper = shallow(<App/>);
	const  balance = <h1>Wallet Balance</h1>
	expect(wrapper.contains(balance)).toEqual(true);
});
});

describe("Snapshots",()=>{
it("should renders correctly",()=>{
	const tree =shallow(<App/>);
	expect(toJSON(tree)).toMatchSnapshot();
	});
});