import {
    Bird,
    Bot,
    CornerDownLeft,
    GraduationCap,
    Home,
    Rabbit,
    Settings,
    Turtle,
    Video,
  } from "lucide-react"
  
  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"
  import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Textarea } from "@/components/ui/textarea"
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  
  export default function Chat() {
    return (
      <div className="grid h-screen w-full pl-[56px]">
        <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
          <div className="border-b p-2">
            <Button variant="outline" size="icon" aria-label="Home">
              <Bot className="size-5" />
            </Button>
          </div>
          <nav className="grid gap-1 p-2">
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
          <Button
                variant="ghost"
                size="icon"
                className="rounded-lg bg-transparent"
                aria-label="Playground"
              >
                <Home className="size-5" />
              </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Portal</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
          <Button
                variant="ghost"
                size="icon"
                className="rounded-lg bg-transparent"
                aria-label="Playground"
              >
                <Video className="size-5" />
              </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Onboarding</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
          <Button
                variant="ghost"
                size="icon"
                className="rounded-lg bg-muted"
                aria-label="Playground"
              >
                <Bot className="size-5" />
              </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Chat</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
          <Button
                variant="ghost"
                size="icon"
                className="rounded-lg bg-transparent"
                aria-label="Playground"
              >
                <GraduationCap className="size-5" />
              </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Treinamento</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
          </nav>
        </aside>
        <div className="flex flex-col">
          <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
            <h1 className="text-xl font-semibold">ChatBot</h1>
          </header>
          <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative flex w-full h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-3">
              <Badge variant="outline" className="absolute right-3 top-3">
                Output
              </Badge>
              <div className="flex-1" />
              <form
                className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1"
              >
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center p-3 pt-0">
                  <Button type="submit" size="sm" className="ml-auto gap-1.5 bg-euro-blue-500 hover:bg-euro-blue-400">
                    Send Message
                    <CornerDownLeft className="size-3.5" />
                  </Button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    )
  }
  