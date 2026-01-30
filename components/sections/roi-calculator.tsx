"use client";

import { Container } from "@/components/ui/container";
import { Check, HandCoins } from "lucide-react";

export function ROICalculatorSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-emerald-600 uppercase bg-emerald-50 rounded-full">
                            Цифры и факты
                        </span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                            Как это работает на практике
                        </h2>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            Мы создали модель, где вы выступаете как пассивный инвестор в крупном бизнесе.
                            Всю операционную деятельность берет на себя профессиональная управляющая компания.
                        </p>

                        <div className="flex items-start gap-4 mb-8">
                            <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                <HandCoins className="w-6 h-6 text-amber-600" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-1">Пассивный доход</h4>
                                <p className="text-slate-600">Вы получаете прибыль без участия в операционном управлении отелем.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl blur-xl" />
                        <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                            <div className="bg-slate-900 px-8 py-6">
                                <h3 className="text-2xl font-bold text-white">Пример инвестиции</h3>
                                <p className="text-slate-400">Расчет доходности для одного номера</p>
                            </div>
                            <div className="p-8">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center pb-6 border-b border-slate-100">
                                        <span className="text-slate-500 font-medium">Инвестиция</span>
                                        <span className="text-2xl font-bold text-slate-900">от $70 000</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-6 border-b border-slate-100">
                                        <span className="text-slate-500 font-medium">Доходность</span>
                                        <span className="text-2xl font-bold text-emerald-600">10–14% годовых</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-6 border-b border-slate-100">
                                        <span className="text-slate-500 font-medium">Выплаты</span>
                                        <span className="text-xl font-semibold text-slate-900">Ежемесячно / Ежеквартально</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-6 border-b border-slate-100">
                                        <span className="text-slate-500 font-medium">Срок договора</span>
                                        <span className="text-xl font-semibold text-slate-900">от 7 лет</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-500 font-medium">Управление</span>
                                        <span className="text-xl font-semibold text-slate-900">Под ключ</span>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100 bg-slate-50 -mx-8 -mb-8 px-8 py-4">
                                    <div className="flex items-center gap-3 text-emerald-700 font-medium">
                                        <Check className="w-5 h-5 text-emerald-600" />
                                        Вы получаете пассивный доход без операционных рисков
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
