"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-[.5rem]">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              className=""
              placeholder="Usuário"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
             <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="password"
              placeholder="Senha"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button className="bg-euro-primary-300 hover:bg-euro-primary-400">
           Entrar
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            esqueceu sua senha?
          </span>
        </div>
      </div>
      <Button className="bg-euro-secondary-600 text-euro-primary-100 hover:bg-euro-secondary-800">
        Suporte
      </Button>
    </div>
  )
}