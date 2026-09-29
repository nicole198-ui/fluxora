import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Beneficios() {
  return (
    <section
      id="beneficios"
      className="w-full bg-background px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* TÍTULO DA SEÇÃO */}
        <div className="mb-12 text-center">

          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Mais organização para sua indústria
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Conheça os benefícios de utilizar a Fluxora
            para acompanhar e organizar suas matérias-primas.
          </p>

        </div>

        {/* CARDS DOS BENEFÍCIOS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            <Card className="border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <CardHeader>

                <CardTitle className="text-xl">
                  Organização de materiais
                </CardTitle>

                <CardDescription className="text-base leading-relaxed">
                  Mantenha as informações das matérias-primas
                  organizadas em um único ambiente, facilitando
                  o controle e a consulta dos materiais cadastrados.
                </CardDescription>

              </CardHeader>

            </Card>

            <Card className="border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            
              <CardHeader>
            
                <CardTitle className="text-xl">
                  Acompanhamento de estoque
                </CardTitle>
            
                <CardDescription className="text-base leading-relaxed">
                  Visualize a quantidade disponível de cada matéria-prima e acompanhe a situação dos materiais cadastrados.
                </CardDescription>
            
              </CardHeader>
            
            </Card>

            <Card className="border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            
              <CardHeader>
            
                <CardTitle className="text-xl">
                  Identificação de materiais em falta
                </CardTitle>
            
                <CardDescription className="text-base leading-relaxed">
                 Identifique matérias-primas com estoque baixo ou zerado para facilitar o planejamento e evitar a falta de materiais na produção.
                </CardDescription>
            
              </CardHeader>
            
            </Card>

        </div>

      </div>
    </section>
  );
}