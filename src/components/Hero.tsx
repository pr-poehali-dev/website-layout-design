import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="https://cdn.poehali.dev/files/33c99d5b-2895-4305-97f7-943b0ff2ccb4.png"
              alt="Керченская"
              className="h-24 w-auto mx-auto mb-6"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Добро пожаловать в
            <span className="text-green-600 block">Керченскую</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ваш надёжный партнёр для решения любых задач. Мы предоставляем
            качественные услуги и индивидуальный подход к каждому клиенту.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              Начать работу
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Узнать больше
              <Icon name="Info" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
