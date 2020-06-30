import React, { useEffect, useState } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import './trading-graph.css'

const TradingGraph = () => {
  const [graphData, setGraphData] = useState(null)

  useEffect(() => {
    const fetchGraphData = async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/usd-coin/market_chart?vs_currency=mxn&days=7')
      const { prices } = await response.json()
      setGraphData(prices)
      console.log(prices)
    }

    fetchGraphData()
  }, [])

  const min = graphData?.map(el => el[1]).sort((a, b) => a - b)[0]
  const max = graphData?.map(el => el[1]).sort((a, b) => b - a)[0]
  console.log(min, max)

  const options = {
    title: {
      style: {
        "color": "transparent"
      }
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        }
      }
    },
    legend: {
      enabled: false,
      title: {
        text: 'dasdas'
      }
    },
    tooltip: {
      dateTimeLabelFormats: {
        day: '%e of %b'
      }
    },
    yAxis: [{
      visible: false,
      startOnTick: false,
      endOnTick: false,
      min: min,
      max: max,
      gridLineColor: 'transparent'
    }],
    xAxis: [{
      type: 'datetime',
      dateTimeLabelFormats: {
        day: '%e of %b',
        month: '%b \'%y'
      }
    }],
    series: [
      {
        data: graphData?.map(serie => serie[1]),
        pointStart: graphData?.[0]?.[0],
        pointInterval: 3600 * 1000, // one day
      }
    ]

  }

  return (
    <div className='item graph'>
      <HighchartsReact
        highcharts={Highcharts}
        // constructorType={'stockChart'}
        options={options}
      />
    </div>
  );
}

export default TradingGraph;