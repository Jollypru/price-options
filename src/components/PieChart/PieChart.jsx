import { Pie, PieChart as PChart } from "recharts";

const PieChart = () => {
    const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];
          
    return (
        <div>
            <PChart width={800} height={300}>
                <Pie data={data01} dataKey="value" outerRadius={50} fill="green"></Pie>
                <Pie data={data02} dataKey="value" innerRadius={60} outerRadius={80} fill="blue" label></Pie>
            </PChart>
        </div>
    );
};

export default PieChart;

