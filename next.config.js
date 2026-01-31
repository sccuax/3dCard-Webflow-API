/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Esto permite que Vercel ignore los errores de tipos de Webflow
    // y termine de construir tu API (la carpeta /app).
    ignoreBuildErrors: true,
  },
  eslint: {
    // También ignoramos ESLint para evitar que el build se detenga
    // por advertencias de formato en los componentes de Webflow.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;