import { Metadata } from "next";
import Image from "next/image";
import mainImage from '@/app/assets/login-photo.png';
import { UserAuthForm } from "@/app/components/user-auth-form";
export const metadata: Metadata = {
  title: "Login Page | Eurofarma",
  description: "Generated by create next app",
  icons: {
    icon: "/icon.png",
  }
};
export default function Home() {
  return (
  <main className="font-ubuntu w-[100vw] h-[100vh] flex justify-center items-center">
    <section className="border rounded-lg w-[104rem] h-[48rem] flex flex-row md:w-[72rem] md:h-[40rem]">
      <div className="bg-euro-primary-300 w-[50%] border-y-euro-primary-300 rounded-s-lg flex justify-center flex-col items-center">
       <Image src={mainImage} alt={""} width={348} height={348}/>
       <p className="text-white font-space-grotesk leading-snug p-4 text-center w-[24rem]">
       Fazemos parte da sua família há mais de 50 anos, movidos pela busca incessante de tornar a saúde acessível para que todos possam viver melhor.
       </p>
      </div>
      <div className="lg:p-8 flex justify-center items-center w-[50%]">
          <div className="mx-auto flex w-[50%] flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Bem-vindo Colaborador!
              </h1>
              <p className="text-sm text-muted-foreground">
               Coloque suas informações abaixo para efetuar o login
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
    </section>
  </main>
);
}
