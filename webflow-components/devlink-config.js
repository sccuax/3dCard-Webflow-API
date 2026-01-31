require('dotenv').config();

module.exports = {
    // El nombre de tu carpeta de componentes
    componentsSourceDir: './src', // Asegúrate de que apunte a donde están tus archivos .tsx
    // Dónde se generarán los archivos para Webflow
    exportDir: './devlink',
    // Tu API Token de Webflow (si ya lo configuraste con 'webflow login')
    webflowConfig: {
        siteId: "fluxzami", // Lo obtienes de la URL de tu proyecto en Webflow
        authToken: process.env.WEBFLOW_WORKSPACE_API_TOKEN
    }
}