module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1A8CD8',
      },
      screens: {
        'sm': '350px', // Pequenos dispositivos, como telefones celulares
        'md': '1025px', // Dispositivos médios, como tablets
        // 'lg': '1200px', // Dispositivos grandes, como laptops/desktops
        // 'xl': '1400px', // Dispositivos extra grandes, como monitores de desktop largos
        // '2xl': '1536px', // Dispositivos extra grandes, como monitores de desktop largos
      },
    },
  },
  plugins: [],
}
