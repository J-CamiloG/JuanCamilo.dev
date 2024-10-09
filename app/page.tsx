"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Ghost, Home, User, Briefcase, Award, Mail, Code, Zap, Globe, Download, Linkedin, Github, ChevronRight, Loader } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useTranslation } from 'react-i18next'
import { Translations, Languages } from './types/i18n'
import './i18n'

const news = [
  {
    text: "Acabo de lanzar un nuevo proyecto usando React y TypeScript. ¡Échale un vistazo!",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQF_uFiMaJgzRg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724167396147?e=1733961600&v=beta&t=sU53k0O-E-24-dnLtD_F1LkcULaalFLrgG9surSRyNk",
    link: "#proyecto-react"
  },
  {
    text: "Participé en un hackathon y mi equipo ganó el primer lugar con una innovadora app de IA.",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQF_uFiMaJgzRg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724167396147?e=1733961600&v=beta&t=sU53k0O-E-24-dnLtD_F1LkcULaalFLrgG9surSRyNk",
    link: "#hackathon-ia"
  },
  {
    text: "Publiqué un artículo sobre optimización de rendimiento en aplicaciones Next.js.",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQF_uFiMaJgzRg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724167396147?e=1733961600&v=beta&t=sU53k0O-E-24-dnLtD_F1LkcULaalFLrgG9surSRyNk",
    link: "#articulo-nextjs"
  },
  {
    text: "Contribuí a un proyecto de código abierto popular y mi PR fue aceptado.",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQF_uFiMaJgzRg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724167396147?e=1733961600&v=beta&t=sU53k0O-E-24-dnLtD_F1LkcULaalFLrgG9surSRyNk",
    link: "#contribucion-opensource"
  },
  {
    text: "Estoy aprendiendo sobre Web3 y blockchain. ¡Pronto compartiré mis hallazgos!",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQF_uFiMaJgzRg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724167396147?e=1733961600&v=beta&t=sU53k0O-E-24-dnLtD_F1LkcULaalFLrgG9surSRyNk",
    link: "#aprendizaje-web3"
  },
]

export default function Component() {
  const { t, i18n } = useTranslation<keyof Translations>()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [isNewsDialogOpen, setIsNewsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Loader className="w-16 h-16 text-violet-500 animate-spin" />
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between p-8 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.06), transparent 80%)`,
        }}
      />
      <header className="z-10 flex flex-col md:flex-row justify-between items-center md:items-start">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <Ghost className="text-violet-500" />
            <span>{t('welcome')}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500"
          >
            {t('name')}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl font-semibold mt-2 text-gray-300 flex items-center gap-2 flex-wrap"
          >
            <span className="flex items-center gap-1"><Code className="w-5 h-5" /> {t('fullStackDev')}</span>
            <span className="flex items-center gap-1"><Zap className="w-5 h-5" /> {t('uiuxEnthusiast')}</span>
            <span className="flex items-center gap-1"><Globe className="w-5 h-5" /> {t('webCreator')}</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm text-gray-400 mt-2"
          >
            {t('description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-4 flex gap-4"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="text-gray-900 hover:text-white hover:bg-gray-600 hover:border-none" onClick={() => window.open('/tu-cv.pdf', '_blank')}>
                    <Download className="h-4 w-4" />
                    <span className="sr-only">{t('downloadCV')}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('downloadCV')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="text-gray-900 hover:text-white hover:bg-gray-600 hover:border-none" onClick={() => window.open('https://linkedin.com/in/tu-perfil', '_blank')}>
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">{t('visitLinkedIn')}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('visitLinkedIn')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="text-gray-900 hover:text-white hover:bg-gray-600 hover:border-none" onClick={() => window.open('https://github.com/tu-usuario', '_blank')}>
                    <Github className="h-4 w-4" />
                    <span className="sr-only">{t('visitGitHub')}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('visitGitHub')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative w-48 h-48 mt-8 md:mt-0 rounded-full overflow-hidden border-4 border-violet-500 shadow-lg shadow-violet-500/50"
        >
          <Image
            src="https://media.licdn.com/dms/image/v2/D4E03AQF_uFiMaJgzRg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724167396147?e=1733961600&v=beta&t=sU53k0O-E-24-dnLtD_F1LkcULaalFLrgG9surSRyNk"
            alt={t('name')}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </header>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="z-10 max-w-2xl mx-auto text-center mt-12"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentNewsIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={news[currentNewsIndex].image}
                alt="Noticia"
                width={50}
                height={50}
                className="rounded-full"
              />
              <p className="text-lg text-gray-300">
                {news[currentNewsIndex].text}
              </p>
            </div>
            <Dialog open={isNewsDialogOpen} onOpenChange={setIsNewsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="mt-4 text-white">
                  {t('viewAllNews')} <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white">
                <DialogHeader>
                  <DialogTitle>{t('myLatestNews')}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {news.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Image
                        src={item.image}
                        alt={`Noticia ${index + 1}`}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <p className="text-sm">{item.text}</p>
                        <a
                          href={item.link}
                          className="text-xs text-violet-400 hover:underline mt-1 inline-block"
                          onClick={() => setIsNewsDialogOpen(false)}
                        >
                          {t('readMore')}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex justify-center gap-6 z-10 mt-12"
      >
        {[
          { icon: Home, label: t('home') },
          { icon: User, label: t('aboutMe') },
          { icon: Briefcase, label: t('projects') },
          { icon: Award, label: t('achievements') },
          { icon: Mail, label: t('contact') },
        ].map((item, index) => (
          <motion.a
            key={item.label}
            href={`#${item.label.toLowerCase()}`}
            className="flex flex-col items-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className="w-6 h-6 mb-1 group-hover:text-violet-500 transition-colors" />
            <span className="text-sm">{item.label}</span>
          </motion.a>
        ))}
      </motion.nav>
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-violet-900/20 to-transparent"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div 
        className="absolute bottom-4 right-4 z-20 flex gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        {Object.keys(i18n.options.resources as Languages).map((lang) => (
          <Button
            key={lang}
            variant="ghost"
            size="sm"
            className={`text-gray-400 hover:text-white hover:bg-gray-800 ${i18n.language === lang ? 'bg-gray-800 text-white' : ''}`}
            onClick={() => changeLanguage(lang)}
          >
            {lang.toUpperCase()}
          </Button>
        ))}
      </motion.div>
    </div>
  )
}