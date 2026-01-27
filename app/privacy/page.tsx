import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | WebClinic",
  description: "Политика обработки персональных данных WebClinic.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Политика конфиденциальности
        </h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 text-lg mb-8">
            Дата последнего обновления: 27 января 2026 года
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Общие положения</h2>
          <p className="text-slate-600 mb-4">
            Настоящая Политика конфиденциальности определяет порядок обработки 
            и защиты персональных данных пользователей сайта webclinic.dev 
            (далее — «Сайт»), принадлежащего WebClinic (далее — «Компания»).
          </p>
          <p className="text-slate-600 mb-4">
            Использование Сайта означает согласие пользователя с настоящей Политикой 
            и указанными в ней условиями обработки персональных данных.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Какие данные мы собираем</h2>
          <p className="text-slate-600 mb-4">
            Мы можем собирать следующие персональные данные:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
            <li>Имя и контактные данные (email, телефон, Telegram)</li>
            <li>Название компании</li>
            <li>Информация о проекте и бюджете</li>
            <li>Техническая информация о посещении сайта (IP-адрес, браузер, устройство)</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Как мы используем данные</h2>
          <p className="text-slate-600 mb-4">
            Собранные данные используются для:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
            <li>Связи с вами по вопросам заявки</li>
            <li>Подготовки коммерческого предложения</li>
            <li>Улучшения работы сайта</li>
            <li>Анализа эффективности рекламных кампаний</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Защита данных</h2>
          <p className="text-slate-600 mb-4">
            Мы принимаем необходимые меры для защиты ваших данных:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
            <li>Используем защищённое соединение (HTTPS)</li>
            <li>Ограничиваем доступ к данным внутри компании</li>
            <li>Не передаём данные третьим лицам без вашего согласия</li>
            <li>Храним данные только столько, сколько необходимо</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Cookies</h2>
          <p className="text-slate-600 mb-4">
            Сайт использует cookies для улучшения пользовательского опыта 
            и сбора аналитики. Вы можете отключить cookies в настройках браузера, 
            однако это может повлиять на работу сайта.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Ваши права</h2>
          <p className="text-slate-600 mb-4">
            Вы имеете право:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
            <li>Запросить информацию о хранящихся данных</li>
            <li>Потребовать исправления неточных данных</li>
            <li>Потребовать удаления ваших данных</li>
            <li>Отозвать согласие на обработку данных</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Контакты</h2>
          <p className="text-slate-600 mb-4">
            По вопросам, связанным с обработкой персональных данных, 
            обращайтесь по email: hello@webclinic.dev
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">8. Изменения</h2>
          <p className="text-slate-600 mb-4">
            Мы оставляем за собой право вносить изменения в настоящую Политику. 
            Актуальная версия всегда доступна на данной странице.
          </p>
        </div>
      </div>
    </section>
  );
}
