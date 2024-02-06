import { db } from "@/app/_lib/prisma";


interface BarberShopDetailsPageProps {
    params:{
        id?: string;
    };
}

const BarberShopDetailsPage = async ({params}: BarberShopDetailsPageProps) => {

    if(!params){
        // TODO: Retorna a home page
        return null;
    }

    const barbershop = await db.barbershop.findUnique({
        
        where: {
            id: params.id,
        }
    });
    
    if(!barbershop){
        // TODO: retorna a Home Page
        return null;
    }

    return <h1> {barbershop.name}</h1>
}

export default BarberShopDetailsPage;