/**
 * Configuração Global da Aplicação (12-Factor App)
 * Concentramos as variáveis de ambiente aqui para que, ao mudar uma URL,
 * alteremos apenas este arquivo ao invés de buscar no projeto todo.
 */
export const config = {
    // Simula a URL do Backend (Vite expõe env vars usando import.meta.env)
    apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',

    // Regras de negócio
    maxImageUploadSize: 5 * 1024 * 1024, // 5MB limit

    // Flag útil para desligar warnings no ambiente de desenvolvimento
    isProduction: import.meta.env.PROD
};
