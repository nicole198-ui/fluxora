import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FiltrosMateriais({
  busca,
  setBusca,
  categoria,
  setCategoria,
  situacao,
  setSituacao,
}) {
  return (
    <div className="mt-10 rounded-xl border border-border bg-card p-6">
      <h2 className="mb-6 text-xl font-semibold text-foreground">
        Buscar matérias-primas
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

        {/* BUSCA */}
        <Input
  placeholder="Buscar por nome ou código..."
  value={busca}
  onChange={(event) => setBusca(event.target.value)}
/>

        {/* CATEGORIA */}
        <Select
  value={categoria}
  onValueChange={setCategoria}
>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Todas as categorias" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="todas">
              Todas as categorias
            </SelectItem>

            <SelectItem value="Metais">
              Metais
            </SelectItem>

            <SelectItem value="Polímeros">
              Polímeros
            </SelectItem>

            <SelectItem value="Químicos">
              Químicos
            </SelectItem>

            <SelectItem value="Embalagens">
              Embalagens
            </SelectItem>
          </SelectContent>
        </Select>

        {/* SITUAÇÃO */}
        <Select
  value={situacao}
  onValueChange={setSituacao}
>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Todas as situações" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="todas">
              Todas as situações
            </SelectItem>

            <SelectItem value="normal">
              Estoque normal
            </SelectItem>

            <SelectItem value="baixo">
              Estoque baixo
            </SelectItem>

            <SelectItem value="sem-estoque">
              Sem estoque
            </SelectItem>
          </SelectContent>
        </Select>

        <Button
  variant="outline"
  className="w-full"
  onClick={() => {
    setBusca("");
    setCategoria("todas");
    setSituacao("todas");
  }}
>
  Limpar filtros
</Button>

      </div>
    </div>
  );
}