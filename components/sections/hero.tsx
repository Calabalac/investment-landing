"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 z-10" />
                {/* Placeholder for real image: Add 'bg-[url(/path/to/image.jpg)]' or <Image /> tag later */}
                <div className="w-full h-full bg-slate-800 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
            </div>

            <Container className="relative z-20 pt-20 pb-16">
                <div className="max-w-3xl text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-amber-400 uppercase bg-amber-500/10 rounded-full border border-amber-500/20 backdrop-blur-sm">
                            Инвестиции в недвижимость напрямую от застройщика
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6">
                            Апарт-отели в Украине — готовый бизнес с доходностью <span className="text-amber-400">10–14% годовых</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light">
                            Без посредников • Без комиссии • Конфиденциально
                        </p>

                        <ul className="grid gap-3 mb-10 text-lg">
                            {[
                                "Гарантированный доход",
                                "Управляющая компания",
                                "Рассрочка без удорожания",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-slate-100">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <Button size="xl" variant="primary" className="text-lg w-full sm:w-auto font-semibold group">
                                Получить презентацию от застройщика
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>

                        <p className="text-slate-400 text-sm max-w-md">
                            Оставьте заявку — свяжемся и отправим расчёт доходности
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
