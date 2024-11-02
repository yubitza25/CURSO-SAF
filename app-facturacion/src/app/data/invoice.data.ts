import { Company } from "../models/company";
import { Item } from "../models/item";

export const invoiceData: any= {
    id: 1,
    name: 'Componentes de PC',
    client: {
        name: 'Yubitza',
        lastname: 'Siesquen',
        address: {
            country: 'Peru',
            city: 'Chiclayo',
            street: 'Los algarrobos',
            number: 'S/N',
        }
    },
    company: {
        name: 'New Enterprise',
        fiscalNumber: 31313131,
    },
    items:[
        {
            id:1,
            product: 'Cpu Intel i9',
            price: 599,
            quantity: 1
        },

        {
            id:2,
            product: 'Corsair Teclado Mecanico',
            price:399,
            quantity: 2
        },

        {
            id: 3,
            product: 'Monitor Aus',
            price: 899,
            quantity: 3
        },
    ]
}