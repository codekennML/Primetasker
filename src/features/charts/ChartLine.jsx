import { ResponsiveLine } from "@nivo/line";

const ChartLine = ({ data, title }) => {
  // const data = [
  //   {
  //     id: "japan",
  //     color: "hsl(313, 70%, 50%)",
  //     data: [
  //       {
  //         x: "plane",
  //         y: 204,
  //       },
  //       {
  //         x: "helicopter",
  //         y: 211,
  //       },
  //       {
  //         x: "boat",
  //         y: 94,
  //       },
  //       {
  //         x: "train",
  //         y: 152,
  //       },
  //       {
  //         x: "subway",
  //         y: 53,
  //       },
  //       {
  //         x: "bus",
  //         y: 286,
  //       },
  //       {
  //         x: "car",
  //         y: 203,
  //       },
  //       {
  //         x: "moto",
  //         y: 170,
  //       },
  //       {
  //         x: "bicycle",
  //         y: 265,
  //       },
  //       {
  //         x: "horse",
  //         y: 15,
  //       },
  //       {
  //         x: "skateboard",
  //         y: 266,
  //       },
  //       {
  //         x: "others",
  //         y: 140,
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className=" w-full py-3 ">
      <div className="h-[280px] w-full">
        <ResponsiveLine
          data={data}
          margin={{ top: 5, right: 10, bottom: 40, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: false,
            reverse: false,
          }}
          yFormat=" >-.2f"
          curve="natural"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 15,
            tickRotation: 0,
            // legend: "Booking Per Month",
            // legendOffset: 45,
            // legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 10,
            tickRotation: 0,
            // legend: "count",
            // legendOffset: -40,
            // legendPosition: "middle",
          }}
          enableGridX={false}
          colors={{ scheme: "set2" }}
          borderColor="#000000"
          pointSize={6}
          pointColor="#d343d6"
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor", modifiers: [] }}
          pointLabelYOffset={-12}
          enableArea={false}
          areaBaselineValue={0}
          areaOpacity={0.1}
          useMesh={true}
          legends={
            [
              // {
              //   anchor: "top-right",
              //   direction: "column",
              //   justify: false,
              //   translateX: 100,
              //   translateY: 0,
              //   itemsSpacing: 0,
              //   itemDirection: "left-to-right",
              //   itemWidth: 79,
              //   itemHeight: 20,
              //   itemOpacity: 0.75,
              //   symbolSize: 12,
              //   symbolShape: "circle",
              //   symbolBorderColor: "rgba(0, 0, 0, .5)",
              //   effects: [
              //     {
              //       on: "hover",
              //       style: {
              //         itemBackground: "rgba(0, 0, 0, .03)",
              //         itemOpacity: 1,
              //       },
              //     },
              //   ],
              // },
            ]
          }
        />
      </div>
      <h3 className="text-lg font-medium text-gray-400 text-center mt-1 ">
        Bookings Analytics for last 365 days
      </h3>
    </div>
  );
};

export default ChartLine;
