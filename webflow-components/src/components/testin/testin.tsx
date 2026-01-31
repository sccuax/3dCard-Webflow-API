"use client";

import { CardContainer, CardBody, CardItem } from "../ThreeDCard";
import { useWebflowGallery } from '../hooks/useWebflowGallery';
import { useState, useEffect, useCallback } from 'react';

export const My3DCardSlider = ({ title, text, buttonText, itemId }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { images: gallery = [], loading, error } = useWebflowGallery(itemId);
    
    // ✅ CORRECCIÓN: Asegurarse de que gallery sea un array
    const images = gallery || [];

    // Función para avanzar (memoizada para usar en el timer)
    const nextImage = useCallback(() => {
        if (images.length > 0) {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }
    }, [images.length]);

    const prevImage = () => {
        if (images.length > 0) {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    // Lógica de Auto-play ⏱️
    useEffect(() => {
        if (loading || images.length <= 1) return;

        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, [nextImage, loading, images.length]);

    // Resetear índice si cambia el item seleccionado
    useEffect(() => {
        setCurrentIndex(0);
    }, [itemId]);

    if (loading) {
        return (
            <CardContainer>
                <CardBody style={{
                    backgroundColor: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.75rem',
                    padding: '1.5rem'
                }}>
                    <div style={{ color: 'white', padding: '2rem', textAlign: 'center' }}>
                        Cargando slider... (Item ID: {itemId || 'no especificado'})
                    </div>
                </CardBody>
            </CardContainer>
        );
    }
    
    if (error) {
        return (
            <CardContainer>
                <CardBody style={{
                    backgroundColor: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.75rem',
                    padding: '1.5rem'
                }}>
                    <div style={{ color: '#ef4444', padding: '2rem', textAlign: 'center' }}>
                        Error: {error}
                    </div>
                </CardBody>
            </CardContainer>
        );
    }
    
    if (images.length === 0) {
        return (
            <CardContainer>
                <CardBody style={{
                    backgroundColor: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.75rem',
                    padding: '1.5rem'
                }}>
                    <div style={{ color: '#999', padding: '2rem', textAlign: 'center' }}>
                        No hay imágenes disponibles
                        <br />
                        <small>Item ID: {itemId || 'no especificado'}</small>
                    </div>
                </CardBody>
            </CardContainer>
        );
    }

    const currentImage = images[currentIndex];

    return (
        <CardContainer>
            <CardBody style={{
                backgroundColor: '#1f2937',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                position: 'relative'
            }}>
                <CardItem as="h2" translateZ={50} style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    color: 'white', 
                    marginBottom: '0.5rem' 
                }}>
                    {title}
                </CardItem>

                <CardItem as="p" translateZ={50} style={{ 
                    fontSize: '1rem', 
                    fontWeight: '400',
                    color: '#d1d5db', 
                    marginTop: '0.5rem',
                    marginBottom: '1rem',
                    textAlign: 'left'
                }}>
                    {text}
                </CardItem>

                {/* Contenedor de Imagen y Flechas */}
                <CardItem translateZ={100} style={{ 
                    position: 'relative', 
                    overflow: 'hidden', 
                    borderRadius: '0.75rem',
                    width: '100%'
                }}>
                    <img
                        src={currentImage.url}
                        alt={currentImage.alt || `Gallery image ${currentIndex + 1}`}
                        style={{ 
                            height: '15rem', 
                            width: '100%', 
                            objectFit: 'cover', 
                            transition: 'opacity 0.5s ease',
                            display: 'block'
                        }}
                    />

                    {/* Flechas de navegación */}
                    {images.length > 1 && (
                        <>
                            <button 
                                onClick={prevImage} 
                                style={{ ...arrowStyle, left: '10px' }}
                                aria-label="Imagen anterior"
                            >
                                ‹
                            </button>
                            <button 
                                onClick={nextImage} 
                                style={{ ...arrowStyle, right: '10px' }}
                                aria-label="Siguiente imagen"
                            >
                                ›
                            </button>
                        </>
                    )}
                </CardItem>

                {/* Paginación Inferior (Dots) */}
                {images.length > 1 && (
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '8px', 
                        marginTop: '15px' 
                    }}>
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Ir a imagen ${index + 1}`}
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: currentIndex === index ? '#fff' : '#ffffff4d',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s',
                                    padding: 0
                                }}
                            />
                        ))}
                    </div>
                )}

                <CardItem
                    as="button"
                    translateZ={20}
                    style={{
                        marginTop: '1.5rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.75rem',
                        backgroundColor: 'white',
                        color: 'black',
                        fontSize: '0.75rem',
                        fontWeight: '400',
                        border: 'none',
                        cursor: 'pointer',
                        width: '25%'
                    }}
                >
                    {buttonText}
                </CardItem>
            </CardBody>
        </CardContainer>
    );
};

const arrowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    zIndex: 10,
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.3s',
    padding: 0
};