export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  safelist: [
    'bg-yellow-300', 
    'text-black',
    'border-red-600',
    'border-8',
    'z-[9999]',
    'h-full',
    'w-full',
    'w-screen',
    'h-screen',
    'fixed',
    'top-0',
    'left-0',
    'p-10',
    'p-8',
    'text-2xl',
    'text-base',
    'overflow-y-auto'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
