import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "Star",
      title: "Высокое качество",
      description:
        "Мы гарантируем высочайшее качество всех предоставляемых услуг и индивидуальный подход.",
    },
    {
      icon: "Clock",
      title: "Быстрая работа",
      description:
        "Оперативное выполнение заказов и соблюдение всех установленных сроков.",
    },
    {
      icon: "Shield",
      title: "Надёжность",
      description:
        "Многолетний опыт работы и тысячи довольных клиентов - наша лучшая рекомендация.",
    },
    {
      icon: "Users",
      title: "Команда профи",
      description:
        "Опытные специалисты с многолетним стажем работы в своих областях.",
    },
    {
      icon: "Heart",
      title: "С заботой",
      description:
        "Мы относимся к каждому проекту с особым вниманием и заботой о результате.",
    },
    {
      icon: "Zap",
      title: "Инновации",
      description:
        "Используем самые современные технологии и методы для достижения лучших результатов.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем комплексные решения для вашего бизнеса с гарантией
            качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={feature.icon as any}
                    size={24}
                    className="text-green-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
