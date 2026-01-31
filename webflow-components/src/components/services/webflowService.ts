export interface ImageGalleryItem {
    fileId: string;
    url: string;
    alt?: string;
}

export const getImagesFromAPI = async (itemId: string): Promise<ImageGalleryItem[]> => {
    if (!itemId) return [];

    try {
        // Forzamos la dirección al puerto de Next.js (3000)
        const url = `http://localhost:3000/gallery?itemId=${itemId}`;
        
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return await response.json();
        } else {
            console.error("❌ El servidor no devolvió JSON. Verifica que Next.js corra en el puerto 3000.");
            return [];
        }
    } catch (error) {
        console.error('💥 Error de conexión al backend:', error);
        return [];
    }
};