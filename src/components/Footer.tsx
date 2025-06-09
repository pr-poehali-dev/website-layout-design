import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://cdn.poehali.dev/files/33c99d5b-2895-4305-97f7-943b0ff2ccb4.png"
              alt="Керченская"
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Керченская - ваш надёжный партнёр для решения любых задач. Мы
              работаем с 2015 года и помогли тысячам клиентов достичь своих
              целей.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Консультации
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Проектирование
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Реализация
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Поддержка
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Icon name="Phone" size={16} className="mr-2" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Icon name="Mail" size={16} className="mr-2" />
                <span>info@kerchenskaya.ru</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Icon name="MapPin" size={16} className="mr-2" />
                <span>г. Керчь, ул. Ленина, 1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Керченская. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
