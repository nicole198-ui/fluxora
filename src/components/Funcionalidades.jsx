import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Funcionalidades() {
  return (
    <section
      id="funcionalidades"
      className="w-full bg-secondary/30 px-6 py-24"
    >

      <div className="mx-auto max-w-7xl">

        {/* TÍTULO DA SEÇÃO */}
        <div className="mb-12">

          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Funcionalidades
          </span>

          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
            Tudo o que você precisa para controlar seu estoque
          </h2>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Conheça os recursos da Fluxora e descubra como
            simplificar a gestão de matérias-primas da sua indústria.
          </p>

        </div>

        {/* CARDS DAS FUNCIONALIDADES */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            <Card className="border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <CardHeader>

                <CardTitle className="text-xl">
                  Cadastro de matérias-primas
                </CardTitle>

                <CardDescription className="text-base leading-relaxed">
                  Cadastre matérias-primas e organize informações
                  como código, categoria, unidade de medida
                  e quantidade disponível.
                </CardDescription>

              </CardHeader>

            </Card>

            <Card className="border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            
              <CardHeader>
            
                <CardTitle className="text-xl">
                  Controle de estoque
                </CardTitle>
            
                <CardDescription className="text-base leading-relaxed">
                  Registre entradas e saídas de matérias-primas e acompanhe as quantidades disponíveis.
                </CardDescription>
            
              </CardHeader>
            
            </Card>

            <Card className="border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            
              <CardHeader>
            
                <CardTitle className="text-xl">
                  Busca e filtros
                </CardTitle>
            
                <CardDescription className="text-base leading-relaxed">
                  Encontre materiais por nome, código, categoria ou situação do estoque.
                </CardDescription>
            
              </CardHeader>
            
            </Card>

            <Card className="border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            
              <CardHeader>
            
                <CardTitle className="text-xl">
                  Indicadores e gráficos
                </CardTitle>
            
                <CardDescription className="text-base leading-relaxed">
                  Visualize informações sobre o estoque por meio de indicadores e gráficos organizados.
                </CardDescription>
            
              </CardHeader>
            
            </Card>

        </div>

      </div>

    </section>
  );
}