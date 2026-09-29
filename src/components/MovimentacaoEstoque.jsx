"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

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

export default function MovimentacaoEstoque({
  materiais,
  setMateriais,
}) {
  const [aberto, setAberto] = useState(false);

  const [codigoMaterial, setCodigoMaterial] = useState("");
  const [tipo, setTipo] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const materialSelecionado = materiais.find(
    (material) => material.codigo === codigoMaterial
  );

  function movimentarEstoque(event) {
    event.preventDefault();

    setErro("");
    setSucesso("");

    const valor = Number(quantidade);

    if (!codigoMaterial || !tipo) {
      setErro("Selecione o material e o tipo de movimentação.");
      return;
    }

    if (!Number.isFinite(valor) || valor <= 0) {
      setErro("A quantidade deve ser maior que zero.");
      return;
    }

    if (
      tipo === "saida" &&
      valor > materialSelecionado.quantidade
    ) {
      setErro(
        `Saldo insuficiente. O material possui ${materialSelecionado.quantidade} ${materialSelecionado.unidade} disponíveis.`
      );
      return;
    }

    setMateriais((materiaisAtuais) =>
      materiaisAtuais.map((material) => {
        if (material.codigo !== codigoMaterial) {
          return material;
        }

        return {
          ...material,
          quantidade:
            tipo === "entrada"
              ? material.quantidade + valor
              : material.quantidade - valor,
        };
      })
    );

    setSucesso(
      tipo === "entrada"
        ? "Entrada registrada com sucesso!"
        : "Saída registrada com sucesso!"
    );

    setQuantidade("");
  }

  return (
    <Dialog open={aberto} onOpenChange={setAberto}>
      <DialogTrigger
        render={
          <Button variant="outline">
            Movimentar estoque
          </Button>
        }
      />

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Movimentação de estoque
          </DialogTitle>

          <DialogDescription>
            Registre uma entrada ou saída de matéria-prima.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={movimentarEstoque}
          className="flex flex-col gap-4"
        >
          {/* MATERIAL */}
          <div className="grid gap-2">
            <Label>Material</Label>

            <Select
              value={codigoMaterial}
              onValueChange={(value) => {
                setCodigoMaterial(value);
                setErro("");
                setSucesso("");
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione um material" />
              </SelectTrigger>

              <SelectContent>
                {materiais.map((material) => (
                  <SelectItem
                    key={material.codigo}
                    value={material.codigo}
                  >
                    {material.codigo} - {material.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* SALDO ATUAL */}
          {materialSelecionado && (
            <div className="rounded-lg bg-secondary/50 p-3 text-sm">
              Saldo atual:{" "}
              <strong>
                {materialSelecionado.quantidade}{" "}
                {materialSelecionado.unidade}
              </strong>
            </div>
          )}

          {/* TIPO */}
          <div className="grid gap-2">
            <Label>Tipo de movimentação</Label>

            <Select
              value={tipo}
              onValueChange={(value) => {
                setTipo(value);
                setErro("");
                setSucesso("");
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="entrada">
                  Entrada
                </SelectItem>

                <SelectItem value="saida">
                  Saída
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* QUANTIDADE */}
          <div className="grid gap-2">
            <Label htmlFor="quantidadeMovimentacao">
              Quantidade
            </Label>

            <Input
              id="quantidadeMovimentacao"
              type="number"
              step="any"
              min="0"
              value={quantidade}
              onChange={(event) =>
                setQuantidade(event.target.value)
              }
              placeholder="Digite a quantidade"
              required
            />
          </div>

          {/* ERRO */}
          {erro && (
            <Alert variant="destructive">
              <AlertTitle>
                Não foi possível registrar
              </AlertTitle>

              <AlertDescription>
                {erro}
              </AlertDescription>
            </Alert>
          )}

          {/* SUCESSO */}
          {sucesso && (
            <Alert className="border-primary/30 bg-secondary/50">
              <AlertTitle>
                Movimentação realizada!
              </AlertTitle>

              <AlertDescription>
                {sucesso}
              </AlertDescription>
            </Alert>
          )}
<DialogFooter>
  {sucesso ? (
    <Button
      type="button"
      onClick={() => {
        setAberto(false);
        setSucesso("");
        setErro("");
        setCodigoMaterial("");
        setTipo("");
        setQuantidade("");
      }}
    >
      Fechar
    </Button>
  ) : (
    <Button type="submit">
      Registrar movimentação
    </Button>
  )}
</DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}