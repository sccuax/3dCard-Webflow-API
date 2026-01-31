import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // 1. Extraemos el itemId de la URL (ej: /gallery?itemId=697baf...) 🔍
  const { searchParams } = new URL(request.url);
  const itemId = searchParams.get('itemId');

  // Validación: Si no hay itemId, detenemos el proceso 🛑
  if (!itemId) {
    return NextResponse.json(
      { error: 'El parámetro itemId es obligatorio' }, 
      { status: 400 }
    );
  }

  // 2. Configuración de Webflow ⚙️
  const COLLECTION_ID = '697baed84e9feb45e74c9e45';
  const API_TOKEN = process.env.WEBFLOW_WORKSPACE_API_TOKEN;

  try {
    // 3. Llamada a la API de Webflow usando el itemId dinámico 📡
    const response = await fetch(
      `https://api.webflow.com/v2/collections/${COLLECTION_ID}/items/${itemId}/live`,
      {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Webflow API respondió con estatus: ${response.status}`);
    }

    const data = await response.json();

    // 4. Extraemos el campo 'images' que contiene el array de la galería 🖼️
    // Basado en tu estructura: data.fieldData.images
    const gallery = data.fieldData?.['images'] || [];

    return new NextResponse(JSON.stringify(gallery), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:5173', 
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
            },
        });

  } catch (error) {
    console.error("Error en el servidor:", error);
    return NextResponse.json(
      { error: 'Error al conectar con Webflow' }, 
      { status: 500 }
    );
  }
}