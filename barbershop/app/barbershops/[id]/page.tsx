import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import BarberShopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";


interface BarberShopDetailsPageProps {
    params: {
        id?: string;
    };
}

const BarberShopDetailsPage = async ({ params }: BarberShopDetailsPageProps) => {

    if (!params) {
        // TODO: Retorna a home page
        return null;
    }

    const barbershop = await db.barbershop.findUnique({

        where: {
            id: params.id,
        },
        include: {
            services: true,
        }
    });

    if (!barbershop) {
        // TODO: retorna a Home Page
        return null;
    }

    return (
        <>
            <BarberShopInfo barbershop={barbershop} />
            <div className="flex flex-col gap-4 py-6">
                {barbershop.services.map(service => (
                    <ServiceItem key={service.id} service={service} />
                ))}
            </div>
            
        </>
    )
}

export default BarberShopDetailsPage;