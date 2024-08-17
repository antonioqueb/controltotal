// app\shared-ui\ContactSection.tsx
"use client";
import * as React from "react";
import { Button } from "@/app/shared-ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/shared-ui/card";
import { Input } from "@/app/shared-ui/input";
import { Label } from "@/app/shared-ui/label";
import { Textarea } from "@/app/shared-ui/textarea";
import { handleContactForm } from "@/app/actions/contactFormHandler";
import Image from "next/image";

const ContactSection: React.FC = () => {
  const [messageError, setMessageError] = React.useState<string>("");

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = form.message.value;

    if (message.length < 50) {
      setMessageError("El mensaje debe tener al menos 50 caracteres.");
    } else {
      setMessageError("");
      form.submit();
    }
  };

  return (
    <Card id="ContactSection" className="dark:bg-stone-900 mx-auto px-7 py-16 border rounded-lg shadow-lg mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="text-3xl xl:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Contáctanos
            </CardTitle>
            <CardDescription className="mt-4 text-lg text-zinc-500">
              Estamos aquí para ayudarte con cualquier duda o inquietud que tengas. No dudes en contactarnos y uno de nuestros representantes se pondrá en contacto contigo lo antes posible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleContactForm} className="mt-8 space-y-6" onSubmit={validateForm}>
              <div className="flex flex-col space-y-1.5">
                <Label className="block text-lg font-medium text-zinc-700 dark:text-zinc-200" htmlFor="name">
                  Nombre
                </Label>
                <Input
                  className="mt-1 block w-full rounded-md border-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 shadow-sm focus:border-primary focus:ring-primary sm:text-lg"
                  id="name"
                  name="name"
                  placeholder="Ingresa tu nombre"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="block text-lg font-medium text-zinc-700 dark:text-zinc-200" htmlFor="email">
                  Correo electrónico
                </Label>
                <Input
                  className="mt-1 block w-full rounded-md border-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 shadow-sm focus:border-primary focus:ring-primary sm:text-lg"
                  id="email"
                  name="email"
                  placeholder="Ingresa tu correo electrónico"
                  type="email"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="block text-lg font-medium text-zinc-700 dark:text-zinc-200" htmlFor="message">
                  Mensaje
                  {/* a */}
                </Label>
                <Textarea
                  className="mt-1 block w-full rounded-md border-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 shadow-sm focus:border-primary focus:ring-primary sm:text-lg"
                  id="message"
                  name="message"
                  placeholder="Escribe tu mensaje aquí"
                  rows={4}
                  required
                />
                {messageError && <p className="text-red-600 dark:text-red-400">{messageError}</p>}
              </div>
              <CardFooter className="w-full">
                <Button
                  className="w-full justify-center rounded-md bg-primary text-lg font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  type="submit"
                >
                  Enviar
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="Contact Image"
            className="object-cover rounded-lg w-full h-full" 
            src="/contact.jpg"
            width={500}
            height={500}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default ContactSection;
