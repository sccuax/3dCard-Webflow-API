// useWebflowGallery.ts
import { useState, useEffect } from 'react';
import { getImagesFromAPI } from '../services/webflowService';
import type { ImageGalleryItem } from '../services/webflowService';

export const useWebflowGallery = (itemId: string) => {
    const [images, setImages] = useState<ImageGalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadGallery = async () => {
            if (!itemId) return;
            setLoading(true);
            try {
                // Aquí llamamos a la función que actualizamos antes
                const data = await getImagesFromAPI(itemId);
                
                if (data && data.length > 0) {
                    setImages(data);
                    setError(null);
                } else {
                    setError("No se encontraron imágenes para este item.");
                }
            } catch (err) {
                setError("Error al conectar con la API.");
            } finally {
                setLoading(false);
            }
        };

        loadGallery();
    }, [itemId]);

    // IMPORTANTE: Retornamos 'images'
    return { images, loading, error };
};