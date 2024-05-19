import {
    CornerDownLeft,
  } from "lucide-react"
  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"
  import { Label } from "@/components/ui/label"
  import { Textarea } from "@/components/ui/textarea"
  import SideBarChat from "../components/sidebar-chat"
  
  export default function Chat() {
    return (
           <div className="grid h-screen w-full pl-[56px]">
           <SideBarChat/>
            <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
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
      </div>
    )
  }
  