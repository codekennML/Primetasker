import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const ChartLine = ({ xLabel, yLabel, searchField, timeFrame }) => {
  const options = {
    chart: {
      type: "areaspline",
      backgroundColor: "transparent",
    },
    title: {
      text: "",
      align: "left",
    },
    // subtitle: {
    //   text: 'Source: <a href="https://www.ssb.no/jord-skog-jakt-og-fiskeri/jakt" target="_blank">SSB</a>',
    //   align: "left",
    // },
    legend: {
      layout: "vertical",
      align: "left",
      verticalAlign: "top",
      x: 120,
      y: 70,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
    },
    xAxis: {
      categories: [...xLabel],
    },
    yAxis: {
      title: {
        text: "Quantity",
      },
    },
    tooltip: {
      shared: true,
      headerFormat: "<b>Bookings starting starting autumn {point.x}</b><br>",
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      areaspline: {
        fillColor: "rgba(237, 217, 255, 0.2)",
        fillOpacity: 0.1,
      },
    },
    series: [
      {
        name: "Bookings",
        color: "Purple",
        data: [...yLabel],
      },
    ],
  };

  return (
    <div className=" w-full pt-6 ">
      <div className="h-[280px] w-full dark:bg-gray-600">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          containerProps={{ style: { height: "100%" } }}
        />
      </div>
      <h3 className="text-[15px] font-medium text-gray-400 text-center mb-4 ">
        {`${searchField} metrics for  ${new Date().getFullYear()}`}
      </h3>
    </div>
  );
};

export default ChartLine;
