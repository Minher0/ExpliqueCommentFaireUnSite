'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  Github, 
  Rocket, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Copy, 
  ExternalLink,
  Key,
  User,
  MessageSquare,
  Terminal,
  Shield,
  Zap,
  Globe,
  BookOpen,
  Code2,
  Link2,
  Coffee
} from "lucide-react"
import { useState, useRef } from "react"

export default function Home() {
  const [copiedText, setCopiedText] = useState<string | null>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const promptRef = useRef<HTMLDivElement>(null)

  const scrollToSteps = () => {
    stepsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPrompt = () => {
    promptRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(id)
    setTimeout(() => setCopiedText(null), 2000)
  }

  const steps = [
    {
      number: "01",
      title: "Créer un compte GitHub",
      description: "Rendez-vous sur github.com et créez un compte gratuit. GitHub est la plateforme qui hébergera le code source de votre site web. C'est gratuit et essentiel pour tout développeur.",
      icon: User,
      link: "https://github.com/signup",
      linkText: "Créer un compte GitHub",
      details: [
        "Utilisez un email valide que vous consultez régulièrement",
        "Choisissez un nom d'utilisateur professionnel et mémorable",
        "Activez l'authentification à deux facteurs (2FA) pour la sécurité",
        "Gardez vos identifiants en lieu sûr"
      ]
    },
    {
      number: "02", 
      title: "Créer un token GitHub (Personal Access Token)",
      description: "Un token est comme un mot de passe qui permet à GLM d'accéder à votre compte GitHub pour créer et pousser du code. C'est plus sécurisé que de partager votre mot de passe principal.",
      icon: Key,
      link: "https://github.com/settings/tokens/new",
      linkText: "Créer un token GitHub",
      details: [
        "Allez dans Settings → Developer settings → Personal access tokens → Tokens (classic)",
        "Cliquez sur 'Generate new token (classic)'",
        "Donnez un nom descriptif à votre token (ex: 'GLM Access')",
        "⚠️ IMPORTANT : Cochez la permission 'repo' (full control of private repositories) - c'est indispensable !",
        "Copiez le token et enregistrez-le dans un endroit sûr (note, fichier sécurisé...)",
        "Le token ne sera plus jamais affiché après avoir quitté la page !"
      ],
      tokenExample: "ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      number: "03",
      title: "Créer un compte Vercel",
      description: "Vercel est la plateforme qui hébergera et publiera votre site web gratuitement. Elle s'intègre parfaitement avec GitHub et offre des performances exceptionnelles avec un CDN mondial.",
      icon: Rocket,
      link: "https://vercel.com/signup",
      linkText: "Créer un compte Vercel",
      details: [
        "Vous pouvez vous inscrire directement avec votre compte GitHub",
        "Cela facilite la connexion entre vos repositories et Vercel",
        "Le plan gratuit est très généreux pour les projets personnels",
        "Aucune carte de crédit requise pour commencer"
      ]
    },
    {
      number: "04",
      title: "Créer un token Vercel",
      description: "Le token Vercel permet à GLM de déployer automatiquement votre site sur Vercel. Sans ce token, vous devriez faire le déploiement manuellement.",
      icon: Shield,
      link: "https://vercel.com/account/tokens",
      linkText: "Créer un token Vercel",
      details: [
        "Connectez-vous à votre compte Vercel",
        "Allez dans Settings → Tokens",
        "Cliquez sur 'Create Token'",
        "Donnez un nom (ex: 'GLM Deploy') et une durée de vie",
        "Copiez immédiatement le token et enregistrez-le en lieu sûr",
        "Le token ne sera plus jamais visible après fermeture de la page !"
      ],
      tokenExample: "vcp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      number: "05",
      title: "Faire un prompt à GLM de z.ai",
      description: "C'est l'étape magique ! Vous allez demander à GLM de créer votre site en lui fournissant vos tokens. GLM va générer le code, le pousser sur GitHub et déployer sur Vercel automatiquement. Après la création, vous pouvez continuer à lui donner des instructions pour modifier votre site !",
      icon: MessageSquare,
      link: "https://z.ai",
      linkText: "Accéder à GLM z.ai",
      details: [
        "Décrivez clairement le site que vous souhaitez",
        "Fournissez votre token GitHub et Vercel dans le prompt",
        "Indiquez le nom du repository à créer",
        "Une fois le site créé, gardez vos tokens pour les modifications futures",
        "Vous pouvez continuer à donner des instructions à GLM pour améliorer votre site !"
      ]
    }
  ]

  const promptTemplate = `Tu va m'aider à créer un site web. Pour ça tu écriras le code sur GitHub grâce à ce token [TON_TOKEN_GITHUB] sur ce repo https://github.com/[TON_USERNAME]/[NOM_DU_REPO]. Le site sera publié sur Vercel que tu pourras accéder grâce à ce token [TON_TOKEN_VERCEL].

Voici le concept du site : [DÉCRIS TON SITE ICI - type, fonctionnalités, design souhaité]`

  const features = [
    {
      icon: Zap,
      title: "Zéro code à écrire",
      description: "GLM génère tout le code pour vous. Vous n'avez pas besoin de connaître HTML, CSS ou JavaScript."
    },
    {
      icon: Globe,
      title: "Site en ligne en 5 minutes",
      description: "De la création des comptes à votre site en ligne, tout peut être fait en moins de 5 minutes."
    },
    {
      icon: Shield,
      title: "Sécurisé par tokens",
      description: "Les tokens peuvent être révoqués à tout moment. Ne partagez jamais votre mot de passe principal."
    },
    {
      icon: Code2,
      title: "Code professionnel",
      description: "GLM génère du code moderne avec Next.js, TypeScript et les meilleures pratiques du marché."
    }
  ]

  const tips = [
    {
      title: "🔒 Enregistrer ses tokens",
      content: "Gardez vos tokens GitHub et Vercel dans un endroit sûr (note secrète, gestionnaire de mots de passe, fichier sécurisé). Vous en aurez besoin pour chaque interaction avec GLM : création du site, modifications, mises à jour... Ne les perdez pas !"
    },
    {
      title: "Sécurité des tokens",
      content: "Vos tokens sont comme des clés d'accès. Ne les partagez qu'avec des IA de confiance comme GLM. Vous pouvez les révoquer à tout moment dans les paramètres de GitHub et Vercel si vous pensez qu'ils ont été compromis."
    },
    {
      title: "Bien décrire son projet",
      content: "Plus votre description est précise, meilleur sera le résultat. Mentionnez le type de site (portfolio, blog, e-commerce...), les couleurs souhaitées, les fonctionnalités principales, et le style général (moderne, minimaliste, coloré...)."
    },
    {
      title: "🔄 Continuer après la création",
      content: "Une fois votre site créé, vous pouvez continuer à donner des instructions à GLM pour le modifier : changer les couleurs, ajouter des fonctionnalités, corriger des bugs... Chaque modification sera automatiquement déployée sur Vercel. Gardez vos tokens accessibles !"
    },
    {
      title: "Nom de domaine personnalisé",
      content: "Vercel vous donne une URL gratuite (votre-site.vercel.app). Vous pouvez connecter votre propre nom de domaine (ex: monsite.com) dans les paramètres du projet sur Vercel."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
        
        <nav className="relative z-10 container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Créer un Site avec GLM</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
              <svg viewBox="0 0 76 65" fill="currentColor" className="w-5 h-5">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
            </a>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
          <Badge variant="outline" className="mb-6 border-purple-500/50 text-purple-300 bg-purple-500/10">
            <Sparkles className="w-3 h-3 mr-1" />
            Guide Complet pour Débutants
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Créez votre site web en 5 minutes<br />avec GLM de z.ai
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Pas besoin de savoir coder ! Suivez ce guide simple : créez vos comptes, 
            générez vos tokens, et laissez GLM créer et déployer votre site automatiquement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={scrollToSteps} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8">
              <ArrowRight className="mr-2 w-4 h-4" />
              Commencer le guide
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToPrompt} className="border-slate-700 text-slate-300 hover:bg-slate-800">
              <MessageSquare className="mr-2 w-4 h-4" />
              Voir l&apos;exemple de prompt
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi cette méthode ?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              La façon la plus simple de créer un site web professionnel sans aucune connaissance technique.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section ref={stepsRef} className="py-16 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-green-500/50 text-green-300 bg-green-500/10">
              Les 5 étapes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Guide étape par étape</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Suivez ces 5 étapes simples et votre site sera en ligne en moins de 5 minutes.
            </p>
          </div>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-purple-500/30 transition-all group overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Number badge */}
                  <div className="lg:w-48 p-6 flex lg:flex-col items-center lg:items-center gap-4 lg:gap-2 bg-slate-800/30 border-b lg:border-b-0 lg:border-r border-slate-700">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <step.icon className="w-6 h-6 text-purple-400 hidden lg:block" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-white">
                          {step.title}
                        </h3>
                        <p className="text-slate-400">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {step.tokenExample && (
                      <div className="bg-slate-800/50 rounded-lg p-3 mb-4 font-mono text-sm text-purple-300 overflow-x-auto">
                        <code>{step.tokenExample}</code>
                      </div>
                    )}
                    
                    <a 
                      href={step.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {step.linkText}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Template Section */}
      <section ref={promptRef} className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-cyan-500/50 text-cyan-300 bg-cyan-500/10">
              Le prompt magique
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exemple de prompt à envoyer à GLM</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Copiez ce modèle et personnalisez-le avec vos propres tokens et la description de votre projet.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader className="flex flex-row items-center justify-between py-3 px-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-400">Prompt à copier et personnaliser</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-slate-400 hover:text-white"
                  onClick={() => copyToClipboard(promptTemplate, 'prompt')}
                >
                  {copiedText === 'prompt' ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-1 text-green-400" />
                      Copié !
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-1" />
                      Copier
                    </>
                  )}
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
                  <code className="text-slate-300 whitespace-pre-wrap">{promptTemplate}</code>
                </pre>
              </CardContent>
            </Card>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Key className="w-4 h-4 text-purple-400" />
                    Remplacer par votre token GitHub
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-400">
                  [TON_TOKEN_GITHUB] → ghp_xxxxxxxxxxxx
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Shield className="w-4 h-4 text-purple-400" />
                    Remplacer par votre token Vercel
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-400">
                  [TON_TOKEN_VERCEL] → vcp_xxxxxxxxxxxx
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-orange-500/50 text-orange-300 bg-orange-500/10">
              Conseils importants
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bonnes pratiques</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Quelques conseils pour tirer le meilleur parti de cette méthode.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {tips.map((tip, index) => (
                <AccordionItem key={index} value={`tip-${index}`} className="bg-slate-900/50 border border-slate-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      {tip.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    {tip.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça fonctionne ?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Un workflow simple et automatisé pour créer votre présence en ligne.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                { icon: User, label: "1. Vos comptes", sublabel: "GitHub + Vercel" },
                { icon: Key, label: "2. Vos tokens", sublabel: "Accès sécurisé" },
                { icon: MessageSquare, label: "3. Prompt GLM", sublabel: "Décrivez votre site" },
                { icon: Code2, label: "4. Code généré", sublabel: "Poussé sur GitHub" },
                { icon: Rocket, label: "5. Site en ligne", sublabel: "Déployé sur Vercel" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-0 md:flex-col">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-sm">{item.label}</p>
                    <p className="text-xs text-slate-400">{item.sublabel}</p>
                  </div>
                  {index < 4 && (
                    <ArrowRight className="w-5 h-5 text-purple-400 md:hidden" />
                  )}
                </div>
              ))}
            </div>
            <div className="hidden md:flex items-center justify-center mt-4">
              <div className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-purple-400" />
                <ArrowRight className="w-5 h-5 text-purple-400" />
                <ArrowRight className="w-5 h-5 text-purple-400" />
                <ArrowRight className="w-5 h-5 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à créer votre site ?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Commencez maintenant ! Créez vos comptes, générez vos tokens, et demandez à GLM de créer le site de vos rêves.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8" asChild>
              <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 w-4 h-4" />
                Créer un compte GitHub
              </a>
            </Button>
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200 px-8" asChild>
              <a href="https://z.ai" target="_blank" rel="noopener noreferrer">
                <Sparkles className="mr-2 w-4 h-4" />
                Accéder à GLM z.ai
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">Créer un Site avec GLM</span>
            </div>
            <p className="text-slate-500 text-sm text-center">
              Guide créé pour aider les débutants à créer leur premier site web avec l&apos;IA.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <svg viewBox="0 0 76 65" fill="currentColor" className="w-5 h-5">
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
              </a>
              <a href="https://z.ai" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <Sparkles className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Buy Me a Coffee Button */}
      <a 
        href="https://buymeacoffee.com/minhero" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-4 left-4 z-40 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-amber-500/90 hover:bg-amber-500 text-white text-sm font-medium transition-all shadow-lg hover:shadow-xl backdrop-blur-sm hover:scale-105"
        aria-label="Offrir un café"
      >
        <Coffee className="w-4 h-4" />
        <span className="hidden sm:inline">Offrir un café</span>
      </a>
    </div>
  )
}
