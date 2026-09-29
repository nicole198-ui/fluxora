"use client";
import { useState } from "react";

import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";


import {
  Field,
  FieldLabel,
} from "@/components/ui/field";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contato() {

    const [enviado, setEnviado] = useState(false);

    function enviarFormulario(event) {
  event.preventDefault();

  setEnviado(true);
}
  return (
    <section
      id="contato"
      className="w-full bg-background px-6 py-24"
    >

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* LADO ESQUERDO */}
        <div>

          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Entre em contato
          </span>

          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
            Quer conhecer melhor a Fluxora?
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Descubra como a Fluxora pode ajudar sua indústria
            a organizar matérias-primas e acompanhar estoques.
            Preencha o formulário para solicitar um contato.
          </p>

        </div>

        {/* LADO DIREITO */}
        <Card className="w-full">

          <CardHeader>

            <CardTitle>
              Solicite um contato
            </CardTitle>

            <CardDescription>
              Preencha seus dados para conhecer melhor a Fluxora.
            </CardDescription>

          </CardHeader>

          <CardContent>

            <form
              onSubmit={enviarFormulario}
              className="flex flex-col gap-5"
            >
            
              <Field>
                <FieldLabel htmlFor="nome">
                  Nome
                </FieldLabel>
            
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Digite seu nome"
                  required
                />
              </Field>

                <Field>
                  <FieldLabel htmlFor="email">
                    E-mail corporativo
                  </FieldLabel>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nome@suaempresa.com.br"
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="empresa">
                    Empresa
                  </FieldLabel>

                  <Input
                    id="empresa"
                    name="empresa"
                    type="text"
                    placeholder="Nome da sua empresa"
                    required
                  />
                </Field>

                <Field>
              <FieldLabel htmlFor="interesse">
                Área de interesse
              </FieldLabel>
            
              <Select name="interesse" required>
            
                <SelectTrigger id="interesse" className="w-full">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
            
                <SelectContent>
            
                  <SelectItem value="controle-estoque">
                    Controle de estoque
                  </SelectItem>
            
                  <SelectItem value="gestao-materiais">
                    Gestão de matérias-primas
                  </SelectItem>
            
                  <SelectItem value="demonstracao">
                    Demonstração do sistema
                  </SelectItem>
            
                </SelectContent>
            
              </Select>
            </Field>
                <Button
                  type="submit"
                  className="mt-2 h-11 w-full"
                >
                  Solicitar contato
                </Button>

        {enviado && (
          <Alert className="border-primary/30 bg-secondary/50">
            <AlertTitle>
              Solicitação registrada!
            </AlertTitle>
        
            <AlertDescription>
              Esta é uma demonstração. Sua solicitação
              foi registrada apenas de forma simulada.
            </AlertDescription>
          </Alert>
        )}

            </form>


          </CardContent>

        </Card>

      </div>

    </section>
  );
}