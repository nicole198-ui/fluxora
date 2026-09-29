import Link from "next/link";

import { Button } from "@/components/ui/button";
import DashboardPreview from "@/components/DashboardPreview";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 px-6 py-20 lg:py-28">

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LADO ESQUERDO */}
        <div className="animar-entrada flex flex-col items-start">

          {/* DESTAQUE */}
          <span className="mb-6 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-primary">
            Tecnologia para uma indústria mais eficiente
          </span>

          {/* TÍTULO */}
        <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-6xl">
          Sua matéria-prima sob controle, sua produção em{" "}
          <span className="text-primary">
            movimento.
          </span>
        </h1>

          {/* DESCRIÇÃO */}
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            Simplifique o controle de matérias-primas, acompanhe
            seus estoques e identifique materiais em falta
            com uma plataforma desenvolvida para a indústria.
          </p>

          {/* BOTÕES */}
          <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row">

            <Link href="/demo">
              <Button className="h-12 w-full px-6 text-base sm:w-auto text-white hover:bg-primary/90">
                Ver demonstração
              </Button>
            </Link>

            <Link href="/#contato">
              <Button
                variant="outline"
                className="h-12 w-full px-6 text-base sm:w-auto border-slate-300 bg-white px-6 text-base text-slate-800 hover:bg-slate-100"
              >
                Solicitar contato
              </Button>
            </Link>

          </div>

        </div>

       {/* LADO DIREITO */}
        <div className="animar-entrada w-full">
          <DashboardPreview />
        </div>

      </div>

    </section>
  );
}