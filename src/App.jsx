import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle2, Circle, BookOpen, Trophy, Target } from 'lucide-react'
import './App.css'

const studyModules = [
   {
    id: 1,
    title: "Fundamentos de Python e OOP",
    contents: [
      "Revisão rápida de sintaxe Python (tipagem, listas, dicionários)",
      "Classes, objetos, atributos e métodos",
      "Encapsulamento, herança, polimorfismo, abstração"
    ],
    category: "Essencial"
  }, 
  {
    id: 2,
    title: "Gerenciamento de Ambientes e Pacotes",
    contents: [
      "O que é PyPI e repositório de pacotes",
      "pip vs. conda: conceitos, quando usar cada um",
      "Criar e ativar ambientes virtuais"
    ],
    category: "Essencial"
  },
  {
    id: 3,
    title: "Front-end Básico para Web",
    contents: [
      "HTML semântico",
      "CSS: Flexbox, Grid e responsividade",
      "JavaScript ES6+: DOM, fetch API, módulos"
    ],
    category: "Essencial"
  },
 {
    id: 4,
    title: "GIT",
    contents: [
      "Revisão rápida de sintaxe Python (tipagem, listas, dicionários)",
      "Classes, objetos, atributos e métodos",
      "Encapsulamento, herança, polimorfismo, abstração"
    ],
    category: "Essencial"
  },
   {
    id: 5,
    title: "Design Patterns em Python",
    contents: [
      "Padrões criacionais (Factory, Singleton, Builder)",
      "Padrões estruturais (Adapter, Decorator, Facade)",
      "Padrões comportamentais (Strategy, Observer)"
    ],
    category: "Intermediário"
  },
    {
    id: 6,
    title: "APIs REST",
    contents: [
      "Conceitos RESTful: recursos, endpoints, verbos HTTP, status codes",
      "Autenticação via token / OAuth",
      "Hands-on com Flask-RESTful ou Django REST Framework"
    ],
    category: "Intermediário"
  },
  {
    id: 7,
    title: "APIs GraphQL",
    contents: [
      "Schema, tipos, queries e mutations",
      "Resolvers e integração com Django (Graphene-Django)",
      "Boas práticas de versionamento"
    ],
    category: "Intermediário"
  },

  {
    id: 8,
    title: "Django – Fundamentos",
    contents: [
      "Estrutura de projeto: apps, URLs, views, templates",
      "ORM: models, migrations",
      "Admin, formulários, validações"
    ],
    category: "Intermediário"
  },

  {
    id: 9,
    title: "Deploy de Projetos Python",
    contents: [
      "Plataformas: Heroku, PythonAnywhere, AWS Elastic Beanstalk, Render, DigitalOcean App Platform",
      "CI/CD básico (GitHub Actions para testes e deploy automático)"
    ],
    category: "Intermediário"
  },
  {
    id: 10,
    title: "API Gateways & Microsserviços",
    contents: [
      "O papel de um API Gateway (roteamento, rate-limit, autenticação centralizada)",
      "Exemplos: Kong, AWS API Gateway",
      "Arquitetura de microsserviços conectados"
    ],
    category: "Avançado"
  },
{
    id: 11,
    title: "Testes em Python",
    contents: [
      "Por que testar? tipos de teste (unitário, integração)",
      "Introdução ao pytest: instalação, estrutura de testes",
      "Asserções, fixtures, parametrização"
    ],
    category: "Avançado"
  },

  {
    id: 12,
    title: "Redes e Sockets",
    contents: [
      "Modelo OSI vs TCP/IP",
      "IP, TCP, UDP, portas",
      "Sockets em Python (socket module): cliente e servidor básicos"
    ],
    category: "Avançado"
  },
  {
    id: 13,
    title: "Inteligência artificial, machine learning e deep learning",
    contents: [
      "Inteligência artificial, machine learning e deep learning",
      "Engenharia de prompt",
      "LLM ChatGPT"
    ],
    category: "Bônus"
  },
  {
    id: 14,
    title: "Análise de dados com Python, Pandas e Matplotlib",
    contents: [
      "Introdução à análise de dados",
      "Pandas",
      "Matplotlib",
    ],
    category: "Diferêncial"
  },
]

const categoryColors = {
  "Essencial": "bg-blue-100 text-blue-800 border-blue-200",
  "Intermediário": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Avançado": "bg-purple-100 text-purple-800 border-purple-200",
  "Bônus": "bg-orange-100 text-orange-800 border-orange-200",
  "Diferêncial": "bg-red-100 text-red-800 border-red-200"
}

function App() {
  const [completedModules, setCompletedModules] = useState(new Set())
  const [showCelebration, setShowCelebration] = useState(false)

  // Carregar progresso do localStorage
  useEffect(() => {
    const saved = localStorage.getItem('studyProgress')
    if (saved) {
      setCompletedModules(new Set(JSON.parse(saved)))
    }
  }, [])

  // Salvar progresso no localStorage
  useEffect(() => {
    localStorage.setItem('studyProgress', JSON.stringify([...completedModules]))
    
    // Verificar se todos os módulos foram concluídos
    if (completedModules.size === studyModules.length && completedModules.size > 0) {
      setShowCelebration(true)
      setTimeout(() => setShowCelebration(false), 3000)
    }
  }, [completedModules])

  const toggleModule = (moduleId) => {
    const newCompleted = new Set(completedModules)
    if (newCompleted.has(moduleId)) {
      newCompleted.delete(moduleId)
    } else {
      newCompleted.add(moduleId)
    }
    setCompletedModules(newCompleted)
  }

  const progressPercentage = (completedModules.size / studyModules.length) * 100

  const groupedModules = studyModules.reduce((acc, module) => {
    if (!acc[module.category]) {
      acc[module.category] = []
    }
    acc[module.category].push(module)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-python-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-python-blue rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Estuda isso Fabião meu brother
                </h1>
                <p className="text-gray-600">Segue essa budega que vai te ensinar tudo o que precisa saber para se tornar um desenvolvedor Python profissional</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Progresso Geral</p>
                <p className="text-2xl font-bold text-python-blue">
                  {completedModules.size}/{studyModules.length}
                </p>
              </div>
              <div className="w-16 h-16 relative">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3776ab"
                    strokeWidth="3"
                    strokeDasharray={`${progressPercentage}, 100`}
                    className="transition-all duration-500 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-python-blue">
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Barra de progresso */}
          <div className="mt-6">
            <Progress value={progressPercentage} className="h-3" />
          </div>
        </div>
      </header>

      {/* Celebração */}
      {showCelebration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 text-center animate-bounce">
            <Trophy className="w-16 h-16 text-python-yellow mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Parabéns! 🎉
            </h2>
            <p className="text-gray-600">
              Você concluiu todos os módulos do plano de estudos!
            </p>
          </div>
        </div>
      )}

      {/* Introdução */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-python-blue" />
              <span>Como usar esta bagaça</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">1. Essencial (Módulos 1–4)</h3>
                <p className="text-sm text-blue-700">Estabeleça a base com ambientes, OOP e testes para garantir código organizado e confiável, controle de versionamento e frontend básico se for fazer aplicações web.</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">2. Intermediário (Módulos 5–9)</h3>
                <p className="text-sm text-yellow-700">Aprender sobre decisões de design patterns, API's e comunicações entre servidor e cliente + deploy de projetos.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">3. Avançados (Módulos 10–12)</h3>
                <p className="text-sm text-green-700">Dominar a completa programação em python, abstraindo o 100% que todo desenvolvedor python tem que saber</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Módulos de Estudo */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {Object.entries(groupedModules).map(([category, modules]) => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <span>{category}</span>
              <Badge className={categoryColors[category]}>
                {modules.filter(m => completedModules.has(m.id)).length}/{modules.length}
              </Badge>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module) => {
                const isCompleted = completedModules.has(module.id)
                return (
                  <Card 
                    key={module.id} 
                    className={`transition-all duration-300 hover:shadow-lg ${
                      isCompleted 
                        ? 'bg-green-50 border-green-200 shadow-md' 
                        : 'hover:shadow-md'
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-sm font-medium text-python-blue bg-python-blue/10 px-2 py-1 rounded">
                              Módulo {module.id}
                            </span>
                            <Badge className={categoryColors[module.category]}>
                              {module.category}
                            </Badge>
                          </div>
                          <CardTitle className={`text-lg ${isCompleted ? 'text-green-800' : 'text-gray-900'}`}>
                            {module.title}
                          </CardTitle>
                        </div>
                        <Button
                          variant={isCompleted ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleModule(module.id)}
                          className={`ml-2 ${
                            isCompleted 
                              ? 'bg-green-600 hover:bg-green-700 text-white' 
                              : 'border-python-blue text-python-blue hover:bg-python-blue hover:text-white'
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <Circle className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {module.contents.map((content, index) => (
                          <li 
                            key={index} 
                            className={`text-sm flex items-start space-x-2 ${
                              isCompleted ? 'text-green-700' : 'text-gray-600'
                            }`}
                          >
                            <span className="w-1.5 h-1.5 bg-python-yellow rounded-full mt-2 flex-shrink-0"></span>
                            <span>{content}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-python-blue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-python-yellow font-semibold mb-2">
            Trilha de Estudos de Programação Python para o Fabio
          </p>
          <p className="text-blue-200">
            Segue essa budega que vai te ensinar tudo o que precisa saber para se tornar um desenvolvedor Python profissional.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

