"use client";

import { Label, Pie, PieChart } from "recharts";

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

export default function Chart02({
  estoqueNormal,
  estoqueBaixo,
  semEstoque,
  totalMateriais,
}) {
  const chartData = [
  {
    situacao: "normal",
    quantidade: estoqueNormal,
    fill: "var(--color-normal)",
  },
  {
    situacao: "baixo",
    quantidade: estoqueBaixo,
    fill: "var(--color-baixo)",
  },
  {
    situacao: "semEstoque",
    quantidade: semEstoque,
    fill: "var(--color-semEstoque)",
  },
];

  const chartConfig = {
    quantidade: {
      label: "Materiais",
    },

    normal: {
      label: "Estoque normal",
      color: "var(--chart-1)",
    },

    baixo: {
      label: "Estoque baixo",
      color: "var(--chart-4)",
    },

    semEstoque: {
      label: "Sem estoque",
      color: "var(--destructive)",
    },
  };

  const situacoes = [
    {
      id: 1,
      nome: "Estoque normal",
      quantidade: estoqueNormal,
      cor: "bg-chart-1",
    },
    {
      id: 2,
      nome: "Estoque baixo",
      quantidade: estoqueBaixo,
      cor: "bg-chart-4",
    },
    {
      id: 3,
      nome: "Sem estoque",
      quantidade: semEstoque,
      cor: "bg-destructive",
    },
  ];

  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">
          Distribuição do estoque
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-8">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-[240px] w-[240px]"
        >
          <PieChart>
             <ChartTooltip
    cursor={false}
    content={<ChartTooltipContent hideLabel />}
  />

  <Pie
    data={chartData}
    dataKey="quantidade"
    nameKey="situacao"
    innerRadius={65}
    outerRadius={95}
    strokeWidth={5}
    startAngle={90}
    endAngle={-270}
  ></Pie>

          </PieChart>
        </ChartContainer>

        <div className="flex flex-col gap-3">
          {situacoes.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`${item.cor} h-4 w-1 rounded-full`}
                />

                <span className="text-sm">
                  {item.nome}
                </span>
              </div>

              <span className="text-sm font-semibold">
                {item.quantidade}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}