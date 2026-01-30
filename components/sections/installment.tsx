"use client";

import { Container } from "@/components/ui/container";
import { CreditCard, Wallet, Percent, CalendarClock } from "lucide-react";

export function InstallmentSection() {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                        Гибкие условия покупки
                    </h2>
                    <p className="text-xl text-slate-600">
                        Инвестировать можно уже сегодня, не выводя всю сумму сразу
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors">
                        <CreditCard className="w-10 h-10 text-emerald-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Рассрочка напрямую</h3>
                        <p className="text-slate-600 text-sm">От застройщика, без участия банка</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors">
                        <Wallet className="w-10 h-10 text-emerald-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Без скрытых платежей</h3>
                        <p className="text-slate-600 text-sm">Честная цена, зафиксированная в договоре</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors">
                        <Percent className="w-10 h-10 text-emerald-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Без удорожания</h3>
                        <p className="text-slate-600 text-sm">0% переплаты при рассрочке</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors">
                        <CalendarClock className="w-10 h-10 text-emerald-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Индивидуальные условия</h3>
                        <p className="text-slate-600 text-sm">Подберем график платежей под вас</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
