import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="https://cdn.poehali.dev/files/33c99d5b-2895-4305-97f7-943b0ff2ccb4.png"
              alt="Керченская"
              className="h-8 w-auto"
            />
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              О нас
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Услуги
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:block">
              Войти
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Связаться
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
