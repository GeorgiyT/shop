import React from 'react'
import data from '../../data/'
import ClientsList from '../clients/ClientsList'
import ProductsList from '../products/ProductsList'




const Main = () => {
    return (
        <>
            <ProductsList products={data.products}/>
            <ClientsList clients={data.clients}/>
        </>
    );
}

export default Main;