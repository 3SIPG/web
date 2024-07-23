"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useForm } from 'react-hook-form'
import { useState } from "react"
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface Inputs {
  user: string,
  password: string
}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  function onSubmit(data: Inputs) {
    
    if(data.user == "user") {
      setLoading(true)
      setTimeout(() => {
        router.push("/dashboard/funcionario") 
      }, 2000)
    } else if (data.user == "admin") {
      setLoading(true)
      setTimeout(() => {
        router.push("/dashboard/admin") 
      }, 2000)
    } else if (data.user == "creator") {
      setLoading(true)
      setTimeout(() => {
        router.push("/dashboard/creator") 
      }, 2000)
    } else {
      alert("This account doesn't exist!")
    }
       
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-[.5rem]">
            <Label className="sr-only" htmlFor="user">
              User
            </Label>
            <Input
             {...register("user")}
              id="user"
              className=""
              placeholder="Usuário"
              type="user"
              autoCapitalize="none"
              autoComplete="user"
              autoCorrect="off"
              disabled={isLoading}
            />
             <Label className="sr-only" htmlFor="user">
              User
            </Label>
            <Input
              {...register("password")}
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