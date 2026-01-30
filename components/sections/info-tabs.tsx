"use client";

import { Container } from "@/components/ui/container";
import * as Tabs from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const tabsData = [
    {
        value: "how-it-works",
        label: "Как это работает",
        title: "Простая и прозрачная схема работы",
        content: (
            <div className="space-y-4">
                <p>Вы покупаете номер в апарт-отеле, как обычную квартиру. Это ваша частная собственность.</p>
                <p>Вы заключаете договор с управляющей компанией, которая берет на себя всё обслуживание: поиск гостей, уборку, ремонт, рекламу.</p>
                <p>Прибыль от работы отеля делится между инвестором и УК. Вы получаете пассивный доход ежемесячно.</p>
            </div>
        ),
    },
    {
        value: "best-investment",
        label: "Лучшая инвестиция",
        title: "Апарт-отель — это лучшая инвестиция для получения дохода",
        content: (
            <div className="space-y-4">
                <p>В отличие от квартир, апарт-отель работает как бизнес. Загрузка выше, цена номера выше, и есть дополнительные услуги (ресторан, спа).</p>
                <p>Это обеспечивает доходность 10–14% годовых против 5-6% в жилой недвижимости.</p>
            </div>
        ),
    },
    {
        value: "why-real-estate",
        label: "Почему недвижимость",
        title: "Почему нужно инвестировать именно в недвижимость",
        content: (
            <div className="space-y-4">
                <p>Недвижимость — это самый надежный актив. Она не обесценится в ноль, как акции, и защищает капитал от инфляции.</p>
                <p>Это реальный актив, который можно потрогать, передать по наследству или продать.</p>
            </div>
        ),
    },
    {
        value: "pension",
        label: "Ваша пенсия",
        title: "Инвестиция в Апарт-отель — это твоя пенсия",
        content: (
            <div className="space-y-4">
                <p>Создайте себе подушку безопасности на будущее. Доход от апартамента обеспечит вам стабильный уровень жизни, независимо от государственных выплат.</p>
                <p>Актив будет расти в цене со временем, увеличивая ваш капитал.</p>
            </div>
        ),
    },
];

export function InfoTabsSection() {
    return (
        <section className="py-24 bg-white">
            <Container>
                <Tabs.Root defaultValue="how-it-works" className="flex flex-col">
                    <Tabs.List className="flex flex-wrap justify-center gap-2 mb-12 border-b border-slate-200 w-full">
                        {tabsData.map((tab) => (
                            <Tabs.Trigger
                                key={tab.value}
                                value={tab.value}
                                className={cn(
                                    "px-6 py-3 text-sm font-medium text-slate-500 transition-all hover:text-slate-900 border-b-2 border-transparent",
                                    "data-[state=active]:border-slate-900 data-[state=active]:text-slate-900",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
                                )}
                            >
                                {tab.label}
                            </Tabs.Trigger>
                        ))}
                    </Tabs.List>

                    <div className="mt-4">
                        {tabsData.map((tab) => (
                            <Tabs.Content key={tab.value} value={tab.value} className="focus-visible:outline-none animate-in fade-in zoom-in-95 duration-200">
                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    <div className="bg-slate-100 rounded-2xl aspect-video flex items-center justify-center text-slate-400 font-medium border-2 border-dashed border-slate-300">
                                        {/* Placeholder for Video/Image */}
                                        [Место для видео/изображения]
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-6">
                                            {tab.title}
                                        </h3>
                                        <div className="text-lg text-slate-600 leading-relaxed">
                                            {tab.content}
                                        </div>
                                    </div>
                                </div>
                            </Tabs.Content>
                        ))}
                    </div>
                </Tabs.Root>
            </Container>
        </section>
    );
}
