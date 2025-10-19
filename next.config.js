/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimizações para build mais rápido
  swcMinify: true,
  
  // Configurações de imagem otimizadas
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Configurações experimentais para melhor performance (removidas as problemáticas)
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Configurações de build
  typescript: {
    // Permite build mesmo com erros de TypeScript (para desenvolvimento)
    ignoreBuildErrors: false,
  },
  
  eslint: {
    // Permite build mesmo com warnings de ESLint
    ignoreDuringBuilds: false,
  },
  
  // Removido output standalone que pode causar problemas de fetch
  
  // Headers de segurança simplificados
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;