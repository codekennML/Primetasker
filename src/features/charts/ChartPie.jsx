// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from "@nivo/pie";

const ChartPie = ({ marginSpecs, height }) => {
  const data = [
    {
      id: "Logistics",
      label: "Logistics",
      value: 115,
      color: "hsl(305, 70%, 50%)",
    },
    {
      id: "Cab Hailing",
      label: "Cab Hailing",
      value: 556,
      color: "hsl(114, 70%, 50%)",
    },
    {
      id: "Laundry",
      label: "Laundry",
      value: 157,
      color: "hsl(285, 70%, 50%)",
    },
    {
      id: "Frontend Dev.",
      label: "Cakes & Pastries",
      value: 342,
      color: "hsl(2, 70%, 50%)",
    },
    {
      id: "Car Wash",
      label: "Car Wash",
      value: 413,
      color: "hsl(285, 70%, 50%)",
    },
  ];

  return (
    <div className={height}>
      <ResponsivePie
        data={data}
        margin={marginSpecs}
        innerRadius={0.65}
        padAngle={0.7}
        fit={false}
        // startAngle={90}
        // endAngle={-90}
        cornerRadius={3}
        colors={{ scheme: "set2" }}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={false}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          //   {
          //     id: "lines",
          //     type: "patternLines",
          //     background: "inherit",
          //     color: "rgba(255, 255, 255, 0.3)",
          //     rotation: -45,
          //     lineWidth: 6,
          //     spacing: 10,
          //   },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={
          [
            // {
            //   anchor: "top-right",
            //   direction: "row",
            //   justify: false,
            //   translateX: -105,
            //   translateY: 80,
            //   itemsSpacing: 0,
            //   itemWidth: 100,
            //   itemHeight: 23,
            //   itemTextColor: "#999",
            //   itemDirection: "left-to-right",
            //   itemOpacity: 1,
            //   symbolSize: 18,
            //   symbolShape: "circle",
            //   effects: [
            //     {
            //       on: "hover",
            //       style: {
            //         itemTextColor: "#000",
            //       },
            //     },
            //   ],
            // },
          ]
        }
      />
    </div>
  );
};

export default ChartPie;
