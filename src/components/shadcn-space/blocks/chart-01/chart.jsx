"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

export default function Chart01({ materiais }) {

  const metais = materiais.filter(
    (material) => material.categoria === "Metais"
  ).length;

  const polimeros = materiais.filter(
    (material) => material.categoria === "Polímeros"
  ).length;

  const quimicos = materiais.filter(
    (material) => material.categoria === "Químicos"
  ).length;

  const embalagens = materiais.filter(
    (material) => material.categoria === "Embalagens"
  ).length;

  const chartData = [
    {
      categoria: "Metais",
      quantidade: metais,
    },
    {
      categoria: "Polímeros",
      quantidade: polimeros,
    },
    {
      categoria: "Químicos",
      quantidade: quimicos,
    },
    {
      categoria: "Embalagens",
      quantidade: embalagens,
    },
  ];

  const chartConfig = {
    quantidade: {
      label: "Materiais",
      color: "var(--chart-1)",
    },
  };

  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">
          Materiais por categoria
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Quantidade de matérias-primas cadastradas em cada categoria.
        </p>
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-[300px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 10,
            }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="categoria"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              fontSize={12}
            />

            <YAxis
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              fontSize={12}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel={false}
                  indicator="line"
                />
              }
            />

            <Bar
              dataKey="quantidade"
              fill="var(--color-quantidade)"
              radius={[6, 6, 0, 0]}
              barSize={45}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}