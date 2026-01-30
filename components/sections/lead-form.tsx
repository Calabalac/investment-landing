"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Check } from "lucide-react";

// Simple Input component since I didn't create it in UI folder yet, 
// or I can create it inline here if it's the only place. 
// But good practice is to have it separate. I'll create it inline here for speed or import if I made it.
// I listed "Input" in the task list but haven't made it. I'll make a quick one here or separate. 
// Let's make it separate to be clean.

function SimpleInput({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={`flex h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            {...props}
        />
    );
}

export function LeadFormSection() {
    return (
        <section id="contact-form" className="relative py-24 bg-slate-900 text-white overflow-hidden">
            {/* Background image placeholder */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop')] bg-cover bg-center" />

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto bg-slate-800/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                            Получите полную информацию напрямую от застройщика
                        </h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Презентация • Планировки • Расчёт доходности • Условия рассрочки
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 mb-8">
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Заявка ни к чему не обязывает</span>
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Консультация бесплатная</span>
                        </div>
                    </div>

                    <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="name" className="sr-only">Имя</label>
                            <SimpleInput id="name" placeholder="Ваше имя" required className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus-visible:ring-amber-500" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="sr-only">Телефон / мессенджер</label>
                            <SimpleInput id="phone" type="tel" placeholder="Телефон / мессенджер" required className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus-visible:ring-amber-500" />
                        </div>
                        <Button size="xl" variant="accent" className="w-full text-lg font-bold">
                            Получить информацию
                        </Button>
                        <p className="text-center text-xs text-slate-500 mt-4">
                            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                        </p>
                    </form>
                </div>
            </Container>
        </section>
    );
}
