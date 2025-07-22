import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {HeroUIProvider} from "@heroui/react";
import {ToastProvider} from "@heroui/toast";

import App from './App.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <ToastProvider placement='bottom-left' toastProps={{classNames: {wrapper: "w-[180px]", closeButton: "text-black-900 opacity-100 absolute right-4 top-1/2 -translate-y-1/2"}}}/>
      <main className="light text-foreground bg-background">
        <App />
      </main>
    </HeroUIProvider>
  </StrictMode>,
)