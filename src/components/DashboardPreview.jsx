import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default function DashboardPreview() {
  return (
    <Card className="w-full">

      <CardHeader>
        <CardTitle>
          Visão geral do estoque
        </CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        <Card className="border-border bg-background shadow-none">

          <CardContent className="flex flex-col gap-3">

            <p className="text-sm text-muted-foreground">
              Total de materiais
            </p>

            <p className="text-3xl font-bold text-foreground">
              120
            </p>

            <Badge variant="secondary" className="w-fit">
              Cadastrados
            </Badge>

          </CardContent>

        </Card>
       
        <Card className="border-border bg-background shadow-none">

          <CardContent className="flex flex-col gap-3">

            <p className="text-sm text-muted-foreground">
              Estoque normal
            </p>

            <p className="text-3xl font-bold text-foreground">
              85
            </p>

            <Badge variant="secondary" className="w-fit">
              Normal
            </Badge>

          </CardContent>

        </Card>


        {/* ESTOQUE BAIXO */}
        <Card className="border-border bg-background shadow-none">

          <CardContent className="flex flex-col gap-3">

            <p className="text-sm text-muted-foreground">
              Estoque baixo
            </p>

            <p className="text-3xl font-bold text-foreground">
              25
            </p>

            <Badge
              variant="outline"
              className="w-fit border-amber-500 text-amber-700"
            >
              Atenção
            </Badge>

          </CardContent>

        </Card>


        {/* SEM ESTOQUE */}
        <Card className="border-border bg-background shadow-none">

          <CardContent className="flex flex-col gap-3">

            <p className="text-sm text-muted-foreground">
              Sem estoque
            </p>

            <p className="text-3xl font-bold text-foreground">
              10
            </p>

            <Badge variant="destructive" className="w-fit">
              Sem estoque
            </Badge>

          </CardContent>

        </Card>

      </CardContent>

    </Card>
  );
}