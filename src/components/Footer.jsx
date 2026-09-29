import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-primary/95 px-6 py-12 text-primary-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row">

          {/* MARCA */}
          <div>
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-primary-foreground"
            >
              Fluxora
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
              Tecnologia para simplificar o controle de
              matérias-primas e acompanhar os estoques
              da sua indústria.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-primary-foreground">
              Navegação
            </h3>

            <Link
              href="/#beneficios"
              className="text-sm text-primary-foreground/80 transition-colors hover:text-white"
            >
              Benefícios
            </Link>

            <Link
              href="/#funcionalidades"
              className="text-sm text-primary-foreground/80 transition-colors hover:text-white"
            >
              Funcionalidades
            </Link>

            <Link
              href="/demo"
              className="text-sm text-primary-foreground/80 transition-colors hover:text-white"
            >
              Demonstração
            </Link>

            <Link
              href="/#contato"
              className="text-sm text-primary-foreground/80 transition-colors hover:text-white"
            >
              Contato
            </Link>
          </div>
        </div>

        {/* PARTE INFERIOR */}
        <div className="mt-10 border-t border-white/20 pt-6">
          <p className="text-center text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Fluxora. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}