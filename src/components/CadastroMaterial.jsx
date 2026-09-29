"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert";

export default function CadastroMaterial({
  materiais,
  setMateriais,
}) {
  const [aberto, setAberto] = useState(false);

  const [codigo, setCodigo] = useState("");
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [unidade, setUnidade] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [estoqueMinimo, setEstoqueMinimo] = useState("");

  function cadastrarMaterial(event) {
    event.preventDefault();

    const novoMaterial = {
      codigo,
      nome,
      categoria,
      unidade,
      quantidade: Number(quantidade),
      estoqueMinimo: Number(estoqueMinimo),
    };

    setMateriais((materiaisAtuais) => [
  ...materiaisAtuais,
  novoMaterial,
]);
    setSucesso(true);

    setCodigo("");
    setNome("");
    setCategoria("");
    setUnidade("");
    setQuantidade("");
    setEstoqueMinimo("");

    
  }

const [sucesso, setSucesso] = useState(false);

  return (
    <Dialog open={aberto} onOpenChange={setAberto}>
      <DialogTrigger
        render={
          <Button>
            Cadastrar material
          </Button>
        }
      />

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Cadastrar matéria-prima
          </DialogTitle>

          <DialogDescription>
            Adicione um novo material ao estoque da Fluxora.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={cadastrarMaterial}
          className="flex flex-col gap-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="codigo">
              Código
            </Label>

            <Input
              id="codigo"
              value={codigo}
              onChange={(event) => setCodigo(event.target.value)}
              placeholder="Ex: MP-013"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="nome">
              Material
            </Label>

            <Input
              id="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              placeholder="Nome da matéria-prima"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label>
              Categoria
            </Label>

            <Select
              value={categoria}
              onValueChange={setCategoria}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>

              <SelectContent>
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
          </div>

          <div className="grid gap-2">
            <Label htmlFor="unidade">
              Unidade
            </Label>

            <Input
              id="unidade"
              value={unidade}
              onChange={(event) => setUnidade(event.target.value)}
              placeholder="Ex: kg, L, un"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div className="grid gap-2">
              <Label htmlFor="quantidade">
                Quantidade
              </Label>

              <Input
                id="quantidade"
                type="number"
                min="0"
                value={quantidade}
                onChange={(event) => setQuantidade(event.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="estoqueMinimo">
                Estoque mínimo
              </Label>

              <Input
                id="estoqueMinimo"
                type="number"
                min="0"
                value={estoqueMinimo}
                onChange={(event) => setEstoqueMinimo(event.target.value)}
                required
              />
            </div>

          </div>
          {sucesso && (
  <Alert className="border-primary/30 bg-secondary/50">
    <AlertTitle>
      Cadastro realizado com sucesso!
    </AlertTitle>

    <AlertDescription>
      O material foi adicionado ao estoque da Fluxora.
    </AlertDescription>
  </Alert>
)}

          <DialogFooter>
  {sucesso ? (
    <Button
      type="button"
      onClick={() => {
        setAberto(false);
        setSucesso(false);
      }}
    >
      Fechar
    </Button>
  ) : (
    <Button type="submit">
      Cadastrar
    </Button>
  )}
</DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}