import React, { useState } from 'react';
import { 
  Search, MessageCircle, Send, Clock, CheckCircle,
  BookOpen, Volume2, PenTool, Users, FileText, HelpCircle,
  Mail, Phone, MessageSquare, AlertCircle, User, Tag, X
} from 'lucide-react';
import './Faq.css';
import './AtividadesExtras.css'; // Arquivo CSS separado
import { useTheme } from './darkTheme'

export default function TirarDuvidasQ() {
  const [activeTab, setActiveTab] = useState('faq');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    question: ''
  });
  const [questions, setQuestions] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const { darkMode } = useTheme();

  const categories = [
    { id: 'all', name: 'Todas', icon: <BookOpen size={20} /> },
    { id: 'grammar', name: 'Gramática', icon: <FileText size={20} /> },
    { id: 'vocabulary', name: 'Vocabulário', icon: <BookOpen size={20} /> },
    { id: 'pronunciation', name: 'Pronúncia', icon: <Volume2 size={20} /> },
    { id: 'conversation', name: 'Conversação', icon: <MessageCircle size={20} /> },
    { id: 'writing', name: 'Escrita', icon: <PenTool size={20} /> }
  ];

  const faqData = [
    {
      id: 1,
      category: 'grammar',
      question: 'Qual a diferença entre Simple Past e Present Perfect?',
      answer: 'O Simple Past é usado para ações concluídas no passado (I studied yesterday). O Present Perfect conecta passado e presente (I have studied English for 3 years).'
    },
    {
      id: 2,
      category: 'vocabulary',
      question: 'Como memorizar vocabulário mais efetivamente?',
      answer: 'Use flashcards, crie frases com as palavras novas, pratique contextos reais e revise regularmente. A repetição espaçada é muito eficaz.'
    },
    {
      id: 3,
      category: 'pronunciation',
      question: 'Como melhorar minha pronúncia em inglês?',
      answer: 'Pratique com áudios nativos, grave sua própria voz para comparar, use apps de pronúncia e pratique regularmente com tongue twisters.'
    },
    {
      id: 4,
      category: 'grammar',
      question: 'Quando usar "a" ou "an"?',
      answer: 'Use "a" antes de consoantes (a book) e "an" antes de vogais ou som de vogal (an apple, an hour).'
    },
    {
      id: 5,
      category: 'conversation',
      question: 'Como perder o medo de falar inglês?',
      answer: 'Comece falando sozinho, pratique com amigos, participe de grupos de conversação e lembre-se que errar faz parte do aprendizado.'
    },
    {
      id: 6,
      category: 'writing',
      question: 'Como estruturar um parágrafo em inglês?',
      answer: 'Use: Topic sentence (ideia principal) + Supporting sentences (detalhes/exemplos) + Concluding sentence (conclusão).'
    }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitQuestion = () => {
    if (formData.name && formData.email && formData.question) {
      const newQuestion = {
        id: Date.now(),
        ...formData,
        date: new Date().toLocaleDateString('pt-BR'),
        status: 'pending'
      };
      setQuestions([newQuestion, ...questions]);
      setFormData({ name: '', email: '', category: '', question: '' });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  const getCategoryInfo = (categoryId) => {
    return categories.find(cat => cat.id === categoryId) || categories[0];
  };

  return (
    <section className="faq-container">
      {/* Header */}
      <div className="container">

        <header className="header-section">
          <h1 className="atividades-title">Centro de Dúvidas:</h1>
          <div className="title-underline"></div>
          <p className="description">Encontre respostas ou envie sua pergunta</p>
          <div className="status-info">
            <CheckCircle size={20} />
            <span>Respondemos em até 24h</span>
          </div>
        </header>

        {/* Navigation */}
        <div className="tabela-navigation">
          <button 
            className={`tabela-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            <HelpCircle size={20}  style={{color: darkMode ? "#f7fafc" : "#1A202C"}}/>
            <span style={{color: darkMode ? "#f7fafc" : "#1A202C"}}>Perguntas Frequentes</span>
          </button>
          <button 
            className={`tabela-button ${activeTab === 'ask' ? 'active' : ''}`}
            onClick={() => setActiveTab('ask')}
          >
            <MessageSquare size={20} style={{color: darkMode ? "#f7fafc" : "#1A202C"}}/>
            <span style={{color: darkMode ? "#f7fafc" : "#1A202C"}}>Fazer Pergunta</span>
          </button>
        </div>

        {/* Success Alert */}
        {showSuccess && (
          <div className="success-alert">
            <CheckCircle size={20} />
            <span>Sua pergunta foi enviada com sucesso!</span>
            <button onClick={() => setShowSuccess(false)} className="close-btn">
              <X size={18} />
            </button>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="faq-content">
            {/* Search */}
            <div className="search-section">
              <div className="search-bar">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Pesquisar dúvidas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Category Filter */}
              <div className="category-grid">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className="category-icon">{category.icon}</div>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ List */}
            <div className="faq-list">
              <div className="list-header">
                <h2>Perguntas Mais Frequentes</h2>
                <span className="count">{filteredFAQ.length}</span>
              </div>
              
              <div className="faq-items">
                {filteredFAQ.map((item) => {
                  const categoryInfo = getCategoryInfo(item.category);
                  return (
                    <details key={item.id} className="faq-item">
                      <summary className="faq-question">
                        <div className="question-left">
                          <span className="category-badge">
                            {categoryInfo.name}
                          </span>
                          <span className="question-text">{item.question}</span>
                        </div>
                        <div className="expand-icon">+</div>
                      </summary>
                      <div className="faq-answer">
                        <AlertCircle size={16} />
                        <p>{item.answer}</p>
                      </div>
                    </details>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Ask Question Tab */}
        {activeTab === 'ask' && (
          <div className="ask-content">
            <div className="ask-form">
              <div className="form-header">
                <h2>Envie sua Dúvida</h2>
                <p>Nossa equipe responderá em breve</p>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>
                    <User size={16} />
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <Mail size={16} />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div className="form-group full-width">
                  <label>
                    <Tag size={16} />
                    Categoria
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecione uma categoria</option>
                    {categories.slice(1).map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group full-width">
                  <label>
                    <MessageCircle size={16} />
                    Sua Pergunta
                  </label>
                  <textarea
                    name="question"
                    rows="4"
                    value={formData.question}
                    onChange={handleInputChange}
                    placeholder="Descreva sua dúvida de forma detalhada..."
                  ></textarea>
                  <span className="form-help">Seja específico para uma resposta precisa</span>
                </div>

                <button 
                  className="btn-submit"
                  onClick={handleSubmitQuestion}
                  disabled={!formData.name || !formData.email || !formData.question}
                >
                  <Send size={20} />
                  Enviar Pergunta
                </button>
              </div>
            </div>

            {/* My Questions */}
            {questions.length > 0 && (
              <div className="my-questions">
                <h3>Minhas Perguntas</h3>
                <div className="questions-grid">
                  {questions.map((q) => (
                    <div key={q.id} className="question-card">
                      <div className="question-header">
                        <span className="category-tag">
                          {getCategoryInfo(q.category).name || 'Geral'}
                        </span>
                        <span className="date">{q.date}</span>
                      </div>
                      <p className="question-preview">{q.question}</p>
                      <div className="question-status">
                        <Clock size={14} />
                        <span>Aguardando resposta...</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Contact Footer */}
        <footer className="contact-section">
          <h3>Precisa de ajuda urgente?</h3>
          <div className="contact-grid">
            <div className="contact-card">
              <Mail size={24} />
              <span>suporte@englishacademy.com</span>
            </div>
            <div className="contact-card">
              <Phone size={24} />
              <span>(11) 99999-9999</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}