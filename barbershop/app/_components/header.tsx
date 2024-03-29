import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon} from "lucide-react";
import { Sheet, SheetContent,SheetTrigger } from "./ui/sheet";

import { SideMenu } from "./side-menu"

const Header = () => {
  

  return (
    <Card>
      <CardContent className="p-5 justify-between flex  flex-row items-center">
        <Image src="/logo_1.png" alt="Logo BarberShop" height={18} width={132} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"} size="icon">
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">

            {/* conteudo menu */}
            <SideMenu/>
           
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
