'use client';

import { AvatarImage, AvatarFallback, Avatar } from "@/app/shared-ui/avatar";
import React from "react";

export default function Testimonials() {
  return (
    <section className="w-full mt-24 mb-28">
      <div className="w-full">
        <div className="space-y-4 text-start">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl dark:text-zinc-50">Testimonios</h2>
          <p className="mx-auto text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Dejemos que ellos hablen por nosotros. Estos son algunos de los comentarios que hemos recibido:
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            name="Gema P."
            position="Project Manager, Ark Project"
            feedback="La mejor elección que he hecho fue contratarlos para mí proyectos, son pacientes, profesionales y me han guíado en todo el proyecto. Si tienen la oportunidad de trabajar con ellos no duden en hacerlo."
            initials="GP"
            avatarSrc="/placeholder-avatar.jpg"
          />
          <TestimonialCard
            name="Carlos P."
            position="CEO, BarberApp"
            feedback="Es increíble lo rápido que los equipos arman los prototipos y los entregan. La calidad del trabajo es excelente y el soporte es inmejorable."
            initials="LG"
            avatarSrc="/placeholder-avatar.jpg"
          />
          <TestimonialCard
            name="Luis Argaez"
            position="Director, Agencia Argaez"
            feedback="Muy útil la plataforma de seguimiento, me ayudó a mantenerme informado en todo momento del progreso del proyecto. El equipo de soporte es muy amable."
            initials="LA"
            avatarSrc="/placeholder-avatar.jpg"
          />
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  name: string;
  position: string;
  feedback: string;
  initials: string;
  avatarSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  feedback,
  initials,
  avatarSrc,
}) => {
  return (
    <div className="group space-y-4 rounded-lg border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-stone-900">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage alt={`@${name}`} src={avatarSrc} />
          <AvatarFallback className="dark:text-zinc-200">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold dark:text-zinc-200">{name}</h3>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">{position}</p>
        </div>
      </div>
      <p className="text-lg/relaxed leading-relaxed text-zinc-500 dark:text-zinc-400">
        {feedback}
      </p>
    </div>
  );
};
