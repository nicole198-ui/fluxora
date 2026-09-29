"use client";


import materiaisIniciais from "@/app/data/materiais.json";

import Link from "next/link";
import Header from "@/components/Header";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import TabelaMateriais from "@/components/TabelaMateriais";
import FiltrosMateriais from "@/components/FiltrosMateriais";
import Chart02 from "@/components/shadcn-space/blocks/chart-02/chart";
import Chart01 from "@/components/shadcn-space/blocks/chart-01/chart";
import CadastroMaterial from "@/components/CadastroMaterial";
import MovimentacaoEstoque from "@/components/MovimentacaoEstoque";
import Footer from "@/components/Footer";

export default function Demo() {


  const [materiais, setMateriais] = useState([]);
  const [dadosCarregados, setDadosCarregados] = useState(false);

  useEffect(() => {
    const materiaisSalvos = localStorage.getItem("fluxora-materiais");

    if (materiaisSalvos) {
      setMateriais(JSON.parse(materiaisSalvos));
    } else {
      setMateriais(materiaisIniciais);

      localStorage.setItem(
        "fluxora-materiais",
        JSON.stringify(materiaisIniciais)
      );
    }

    setDadosCarregados(true);
  }, []);

  useEffect(() => {
    if (!dadosCarregados) return;

    localStorage.setItem(
      "fluxora-materiais",
      JSON.stringify(materiais)
    );
  }, [materiais, dadosCarregados]);

  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("todas");
  const [situacao, setSituacao] = useState("todas");
  const totalMateriais = materiais.length;

  const estoqueNormal = materiais.filter(
    (material) =>
      material.quantidade > 0 &&
      material.quantidade >= material.estoqueMinimo
  ).length;

  const estoqueBaixo = materiais.filter(
    (material) =>
      material.quantidade > 0 &&
      material.quantidade < material.estoqueMinimo
  ).length;

  const semEstoque = materiais.filter(
    (material) => material.quantidade === 0
  ).length;

  const materiaisFiltrados = materiais.filter((material) => {
    const correspondeBusca =
      material.nome.toLowerCase().includes(busca.toLowerCase()) ||
      material.codigo.toLowerCase().includes(busca.toLowerCase());

    const correspondeCategoria =
      categoria === "todas" ||
      material.categoria === categoria;

    let correspondeSituacao = true;

    if (situacao === "normal") {
      correspondeSituacao =
        material.quantidade > 0 &&
        material.quantidade >= material.estoqueMinimo;
    }

    if (situacao === "baixo") {
      correspondeSituacao =
        material.quantidade > 0 &&
        material.quantidade < material.estoqueMinimo;
    }

    if (situacao === "sem-estoque") {
      correspondeSituacao =
        material.quantidade === 0;
    }

    return (
      correspondeBusca &&
      correspondeCategoria &&
      correspondeSituacao
    );
  });

  return (
    <main className="min-h-screen bg-background">

      <Header />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          {/* TÍTULO E DESCRIÇÃO */}
          <div>
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">
              Controle de matérias-primas
            </h1>

            <p className="mt-3 text-muted-foreground">
              Acompanhe os materiais cadastrados e visualize
              a situação do estoque da sua indústria.
            </p>

            <p className="mt-4 text-sm text-primary">
              Ambiente de demonstração com dados fictícios.
            </p>
          </div>

          {/* BOTÕES */}
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">

            <CadastroMaterial
              materiais={materiais}
              setMateriais={setMateriais}
            />

            <MovimentacaoEstoque
              materiais={materiais}
              setMateriais={setMateriais}
            />

          </div>

        </div>

        <p className="mt-4 text-sm text-primary">
          Ambiente de demonstração com dados fictícios.
        </p>

        {/* INDICADORES DE ESTOQUE */}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total de materiais
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold text-foreground">
                {totalMateriais}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Estoque normal
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold text-foreground">
                {estoqueNormal}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Estoque baixo
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold text-foreground">
                {estoqueBaixo}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Sem estoque
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold text-foreground">
                {semEstoque}
              </p>
            </CardContent>
          </Card>


        </div>

        <FiltrosMateriais
          busca={busca}
          setBusca={setBusca}
          categoria={categoria}
          setCategoria={setCategoria}
          situacao={situacao}
          setSituacao={setSituacao}
        />

        <TabelaMateriais materiais={materiaisFiltrados} />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">

          <Chart01 materiais={materiais} />

          <Chart02
            estoqueNormal={estoqueNormal}
            estoqueBaixo={estoqueBaixo}
            semEstoque={semEstoque}
            totalMateriais={totalMateriais}
          />

        </div>


      </section>

      < Footer />

    </main>
  );
}