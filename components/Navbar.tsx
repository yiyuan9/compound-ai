import { Button } from "@/components/ui/button"
import MobileSidebar from "@/components/MobileSidebar"

import { UserButton } from "@clerk/nextjs"
import { Menu } from "lucide-react"


const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}
export default Navbar