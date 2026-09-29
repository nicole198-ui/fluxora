"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Fluxora"
            width={120}
            height={40}
            className="h-auto w-auto"
            priority
          />
        </Link>

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>

              <NavigationMenuItem>
                <NavigationMenuLink href="/#beneficios">
                  Benefícios
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/#funcionalidades">
                  Funcionalidades
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/#contato">
                  Contato
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:block">
          <Link href="/demo">
            <Button className="bg-primary px-5 text-white hover:bg-primary/90">
              Ver demonstração
            </Button>
          </Link>
        </div>


        {/* MENU MOBILE */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary"
                >
                  Menu
                </Button>
              }
            />

            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-primary">
                  Fluxora
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-4 px-4">

                <SheetClose
                  render={<Link href="/#beneficios" />}
                  nativeButton={false}
                  className="text-left text-foreground hover:text-primary"
                >
                  Benefícios
                </SheetClose>

                <SheetClose
                  render={<Link href="/#funcionalidades" />}
                  nativeButton={false}
                  className="text-left text-foreground hover:text-primary"
                >
                  Funcionalidades
                </SheetClose>

                <SheetClose
                  render={<Link href="/#contato" />}
                  nativeButton={false}
                  className="text-left text-foreground hover:text-primary"
                >
                  Contato
                </SheetClose>

                <SheetClose
                  render={<Link href="/demo" />}
                  nativeButton={false}
                  className="rounded-md bg-primary px-4 py-3 text-center font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Ver demonstração
                </SheetClose>

              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>

    </header>
  );
}