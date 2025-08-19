import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedService, setSelectedService] = useState('');
  const [projectScope, setProjectScope] = useState('');
  const [timeline, setTimeline] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const services = [
    { name: 'SMM', price: 50000, icon: 'Share2' },
    { name: 'Реклама', price: 75000, icon: 'Target' },
    { name: 'SEO', price: 60000, icon: 'TrendingUp' },
    { name: 'Контент', price: 40000, icon: 'FileText' },
    { name: 'Брендинг', price: 100000, icon: 'Zap' },
    { name: 'Аналитика', price: 35000, icon: 'BarChart3' },
  ];

  const team = [
    { name: 'Александр Темный', role: 'Стратег', experience: '8 лет' },
    { name: 'Анна Красная', role: 'Креативный директор', experience: '6 лет' },
    { name: 'Дмитрий Серый', role: 'Аналитик', experience: '5 лет' },
    { name: 'Мария Огненная', role: 'SMM-менеджер', experience: '4 года' },
  ];

  const cases = [
    { title: 'Увеличили продажи на 340%', client: 'E-commerce', result: '+340% конверсии' },
    { title: 'Запустили в топ поиска', client: 'Финтех', result: 'ТОП-3 по ключевым запросам' },
    { title: 'Построили личный бренд', client: 'Блогер', result: '1M+ подписчиков' },
  ];

  const calculatePrice = () => {
    const service = services.find(s => s.name === selectedService);
    if (!service) return;

    let basePrice = service.price;
    
    // Multiplier based on scope
    const scopeMultiplier = projectScope === 'small' ? 0.7 : projectScope === 'medium' ? 1 : 1.5;
    
    // Multiplier based on timeline
    const timelineMultiplier = timeline === 'urgent' ? 1.5 : timeline === 'normal' ? 1 : 0.8;
    
    const finalPrice = basePrice * scopeMultiplier * timelineMultiplier;
    setCalculatedPrice(finalPrice);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/img/c0a6ffbc-4045-40bc-a4d4-a48ed9ba91b0.jpg" alt="Crown" className="w-10 h-10" />
              <h1 className="text-2xl font-oswald font-bold demonic-text-gradient">INFERNAL MARKETING</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-red-500 transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-700 hover:text-red-500 transition-colors">Портфолио</a>
              <a href="#team" className="text-gray-700 hover:text-red-500 transition-colors">Команда</a>
              <a href="#calculator" className="text-gray-700 hover:text-red-500 transition-colors">Калькулятор</a>
              <a href="#contact" className="text-gray-700 hover:text-red-500 transition-colors">Контакты</a>
            </nav>
            <Button className="demonic-gradient text-white hover:bg-red-600">
              Получить консультацию
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-oswald font-bold text-black mb-6">
              ДЕМОНИЧЕСКИЙ
              <span className="block demonic-text-gradient">МАРКЕТИНГ</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Мы превращаем ваш бизнес в силу, которая доминирует на рынке. 
              Используем темные искусства маркетинга для достижения световых результатов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="demonic-gradient text-white px-8 py-6 text-lg">
                <Icon name="Flame" className="mr-2" size={20} />
                Начать доминировать
              </Button>
              <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 px-8 py-6 text-lg">
                <Icon name="PlayCircle" className="mr-2" size={20} />
                Посмотреть кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-oswald font-bold text-black mb-4">НАШИ УСЛУГИ</h2>
            <p className="text-xl text-gray-600">Арсенал для захвата рынка</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-red-200">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 demonic-gradient rounded-lg flex items-center justify-center">
                      <Icon name={service.icon} size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-xl font-oswald text-black">{service.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Профессиональные услуги {service.name.toLowerCase()} для максимального результата.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold demonic-text-gradient">
                      от {service.price.toLocaleString()} ₽
                    </span>
                    <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-50">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-oswald font-bold text-black mb-4">ПОРТФОЛИО</h2>
            <p className="text-xl text-gray-600">Наши победы в маркетинговых войнах</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Badge variant="outline" className="w-fit border-red-500 text-red-500">
                    {case_.client}
                  </Badge>
                  <CardTitle className="text-xl font-oswald text-black">{case_.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold demonic-text-gradient mb-4">
                    {case_.result}
                  </div>
                  <Button variant="ghost" className="text-red-500 hover:bg-red-50 p-0">
                    Читать кейс <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-oswald font-bold text-black mb-4">НАША КОМАНДА</h2>
            <p className="text-xl text-gray-600">Демоны маркетинга в действии</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 demonic-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-oswald text-black">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <Badge variant="outline" className="border-red-500 text-red-500">
                    {member.experience}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-oswald font-bold text-black mb-4">КАЛЬКУЛЯТОР СТОИМОСТИ</h2>
            <p className="text-xl text-gray-600">Узнайте стоимость проекта за 30 секунд</p>
          </div>
          <Card className="max-w-2xl mx-auto bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-oswald text-center">Рассчитать стоимость</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="service">Выберите услугу</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(service => (
                      <SelectItem key={service.name} value={service.name}>
                        {service.name} - от {service.price.toLocaleString()} ₽
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="scope">Масштаб проекта</Label>
                <Select value={projectScope} onValueChange={setProjectScope}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите масштаб" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Малый проект (-30%)</SelectItem>
                    <SelectItem value="medium">Средний проект</SelectItem>
                    <SelectItem value="large">Крупный проект (+50%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="timeline">Сроки реализации</Label>
                <Select value={timeline} onValueChange={setTimeline}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите сроки" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="extended">Расширенные сроки (-20%)</SelectItem>
                    <SelectItem value="normal">Стандартные сроки</SelectItem>
                    <SelectItem value="urgent">Срочно (+50%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculatePrice} 
                className="w-full demonic-gradient text-white py-6 text-lg"
                disabled={!selectedService || !projectScope || !timeline}
              >
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать стоимость
              </Button>

              {calculatedPrice > 0 && (
                <div className="text-center p-6 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-lg text-gray-600 mb-2">Примерная стоимость проекта:</p>
                  <p className="text-4xl font-bold demonic-text-gradient">
                    {calculatedPrice.toLocaleString()} ₽
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    *Окончательная стоимость определяется после детального анализа проекта
                  </p>
                  <Button className="mt-4 demonic-gradient text-white">
                    Обсудить проект
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-oswald font-bold text-black mb-4">БЛОГ</h2>
            <p className="text-xl text-gray-600">Секреты темного маркетинга</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Психология цвета в демоническом маркетинге',
              '10 приемов для увеличения конверсии',
              'Как доминировать в социальных сетях'
            ].map((title, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-48 demonic-gradient rounded-t-lg mb-4"></div>
                  <CardTitle className="text-xl font-oswald text-black">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Подробный разбор эффективных стратегий и тактик для достижения максимального результата.
                  </p>
                  <Button variant="ghost" className="text-red-500 hover:bg-red-50 p-0">
                    Читать статью <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 demonic-gradient text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-oswald font-bold mb-4">СВЯЖИТЕСЬ С НАМИ</h2>
            <p className="text-xl opacity-90">Готовы начать доминировать?</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-oswald font-bold mb-6">Начнем работу</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} />
                  <span>+7 (666) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} />
                  <span>hello@infernal-marketing.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} />
                  <span>Москва, ул. Темная, 13</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-red-500">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-red-500">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-red-500">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <Card className="bg-white text-black">
                <CardHeader>
                  <CardTitle className="font-oswald">Получить консультацию</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                  <Input placeholder="Телефон" />
                  <Input placeholder="Название компании" />
                  <Button className="w-full demonic-gradient text-white">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/img/c0a6ffbc-4045-40bc-a4d4-a48ed9ba91b0.jpg" alt="Crown" className="w-8 h-8" />
              <span className="text-xl font-oswald font-bold">INFERNAL MARKETING</span>
            </div>
            <p className="text-gray-400">© 2024 Все права защищены темными силами</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;