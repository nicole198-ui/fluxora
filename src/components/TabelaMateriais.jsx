import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

export default function TabelaMateriais({ materiais }) {
  return (
    <div className="mt-10 rounded-xl border border-border bg-card p-6">

      <h2 className="mb-6 text-xl font-semibold text-foreground">
        Matérias-primas cadastradas
      </h2>

      <div className="w-full overflow-x-auto">
        <Table>

          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Material</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Unidade</TableHead>
              <TableHead>Quantidade disponível</TableHead>
              <TableHead>Estoque mínimo</TableHead>
              <TableHead>Situação</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
  {materiais.length === 0 ? (
    <TableRow>
      <TableCell
        colSpan={7}
        className="h-24 text-center text-muted-foreground"
      >
        Nenhum material encontrado.
      </TableCell>
    </TableRow>
  ) : (
    materiais.map((material) => (
      <TableRow key={material.codigo}>

        <TableCell>
          {material.codigo}
        </TableCell>

        <TableCell className="font-medium">
          {material.nome}
        </TableCell>

        <TableCell>
          {material.categoria}
        </TableCell>

        <TableCell>
          {material.unidade}
        </TableCell>

        <TableCell>
          {material.quantidade}
        </TableCell>

        <TableCell>
          {material.estoqueMinimo}
        </TableCell>

        <TableCell>
          {material.quantidade === 0 ? (
            <Badge variant="destructive">
              Sem estoque
            </Badge>
          ) : material.quantidade < material.estoqueMinimo ? (
            <Badge
              variant="outline"
              className="border-amber-500 text-amber-700"
            >
              Estoque baixo
            </Badge>
          ) : (
            <Badge variant="secondary">
              Normal
            </Badge>
          )}
        </TableCell>

      </TableRow>
    ))
  )}
</TableBody>

        </Table>
      </div>

    </div>
  );
}