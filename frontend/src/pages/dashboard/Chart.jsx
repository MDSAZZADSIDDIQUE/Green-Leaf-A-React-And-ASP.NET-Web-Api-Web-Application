import { useTheme } from "@mui/material/styles";
import * as React from "react";
import {
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import Title from "./Title";

function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("Snake Plant", 3),
  createData("Fiddle Leaf", 2),
  createData("String of Pearls", 3),
  createData("Monstera Deliciosa", 1),
  createData("Spider Plant", 5),
];

const Chart = () => {
  const theme = useTheme();
  const [rows, setRows] = React.useState(null);

  const [treeSold, setTreeSold] = React.useState(0);

  const getProductList = async () => {
    try {
      const response = await axios.get("https://localhost:44369/api/order");
      setRows(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getProductList();
  }, []);

  React.useEffect(() => {
    console.log(rows);
    console.log(treeSold);
    if (rows != null) {
      rows.forEach((element) => {
        setTreeSold(treeSold + element.amount);
      });
    }
    setTreeSold(2464.56);
  }, [rows]);

  React.useEffect(() => {}, [rows]);
  return (
    <React.Fragment>
      <Title>Product sold</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Number of products
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default Chart;
