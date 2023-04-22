import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, getFirestore, collection } from 'firebase/firestore'


const Basketball = () => {

    const { category } = useParams()
    const [product, setProduct] = useState([''])

    useEffect(() => {
        const db = getFirestore()
        const shopRef = collection(db, 'items')
        getDocs(shopRef).then((snapshot) => {
        if(snapshot === 0){
            console.log("No hay resultados")
        }    
        setProduct(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
    }, [category])

    const selectCategory = product.filter( product => product.category === 'basketball')





  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '40%',
        margin: '20px',
        padding: '20px',
        alignContent: 'center',
        backgroundColor: '#FFF',
        boxShadow: '0px 3px 10px rgba(0,0,0,0.2)',
    }}>
        {
            selectCategory ? (
                <>
            <h2>{selectCategory.title}</h2>
            <img src={selectCategory.imageId} alt="" />
            <p>{selectCategory.description}</p>
            <p>U$S {selectCategory.price}</p>
            <button style={{
                backgroundColor: '#0077ff',
            borderRadius: '5px',
            width: '50%',
            margin: '0px 180px',
            border: 'none',
            fontSize: '16px',
            }}>Agregar al Carrito</button>
            
            </>
        ) 
        : (
            <p>Cargando...</p>
            )
        }
        </div>
        )

    }
export default Basketball