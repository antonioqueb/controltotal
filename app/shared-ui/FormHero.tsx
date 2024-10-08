// app\shared-ui\FormHero.tsx
"use client";
import * as React from "react";
import { Button } from "@/app/shared-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/shared-ui/card";
import { Input } from "@/app/shared-ui/input";
import { Label } from "@/app/shared-ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/shared-ui/select";
import { Textarea } from "@/app/shared-ui/textarea";
import { handleBudgetRequest } from "@/app/actions/budgetActions";

interface FormHeroProps {
  className?: string;
}

const FormHero: React.FC<FormHeroProps> = ({ className }) => {
  const [descriptionError, setDescriptionError] = React.useState<string>('');
  const [phoneError, setPhoneError] = React.useState<string>('');

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const description = form.description.value;
    const phone = form.phone.value;
    let isValid = true;

    if (description.length < 50) {
      setDescriptionError('La descripción debe tener al menos 50 caracteres.');
      isValid = false;
    } else {
      setDescriptionError('');
    }

    if (phone.length < 10) {
      setPhoneError('El número de teléfono debe tener al menos 10 dígitos.');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (isValid) {
      form.submit();
    }
  };

  return (
    <Card
      id="FormHero"
      className={`w-full max-w-2xl mx-auto shadow-lg relative z-20 bg-white dark:bg-zinc-800 p-6 rounded-lg ${className}`}
    >
      <CardHeader>
        <CardTitle className="text-2xl xl:text-4xl text-black dark:text-white">
          Recibir Presupuesto
        </CardTitle>
        <CardDescription className="text-lg text-zinc-600 dark:text-zinc-300">
          Describa su proyecto para recibir una cotización personalizada.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleBudgetRequest} className="py-2" onSubmit={validateForm}>
          <div className="grid w-full items-center gap-2">
            <div className="flex flex-col space-y-1.5 py-1">
              <Label htmlFor="email" className="text-lg text-zinc-800 dark:text-zinc-300">
                Correo Electrónico
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="correo@empresa.com"
                className="text-base text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 placeholder-zinc-400 dark:placeholder-zinc-400"
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5 py-1">
              <Label htmlFor="phone" className="text-lg text-zinc-800 dark:text-zinc-300">
                Teléfono de Contacto
              </Label>
              <Input
                id="phone"
                name="phone"
                className="text-base text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 placeholder-zinc-400 dark:placeholder-zinc-400"
                type="tel"
                placeholder="Teléfono de contacto"
                required
              />
              {phoneError && <p className="text-red-600 dark:text-red-400">{phoneError}</p>}
            </div>
            <div className="flex flex-col space-y-1.5 py-1">
              <Label htmlFor="projectType" className="text-lg text-zinc-800 dark:text-zinc-300">
                Tipo de Proyecto
              </Label>
              <Select name="projectType">
                <SelectTrigger
                  id="projectType"
                  className="text-base text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600"
                >
                  <SelectValue placeholder="Seleccione el tipo de proyecto" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem className="text-base" value="softwareDevelopment">
                    Desarrollo de Software
                  </SelectItem>
                  <SelectItem className="text-base" value="automation">
                    Automatización
                  </SelectItem>
                  <SelectItem className="text-base" value="cloudIntegration">
                    Integración Cloud
                  </SelectItem>
                  <SelectItem className="text-base" value="erpIntegration">
                    Integración ERP
                  </SelectItem>
                  <SelectItem className="text-base" value="mobileAppDevelopment">
                    Desarrollo de Aplicaciones Móviles
                  </SelectItem>
                  <SelectItem className="text-base" value="webDevelopment">
                    Desarrollo Web
                  </SelectItem>
                  <SelectItem className="text-base" value="dataAnalysis">
                    Análisis de Datos
                  </SelectItem>
                  <SelectItem className="text-base" value="cyberSecurity">
                    Ciberseguridad
                  </SelectItem>
                  <SelectItem className="text-base" value="customSolutions">
                    Soluciones Personalizadas
                  </SelectItem>
                  <SelectItem className="text-base" value="consulting">
                    Consultoría
                  </SelectItem>
                  <SelectItem className="text-base" value="other">
                    Otro
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5 py-1">
              <Label htmlFor="description" className="text-lg text-zinc-800 dark:text-zinc-300">
                Descripción del Proyecto
              </Label>
              <Textarea
                id="description"
                name="description"
                className="text-base text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 placeholder-zinc-400 dark:placeholder-zinc-400"
                placeholder="Proporcione una descripción detallada del proyecto"
                required
              />
              {descriptionError && <p className="text-red-600 dark:text-red-400">{descriptionError}</p>}
            </div>
          </div>
          <CardFooter className="flex justify-end mt-8 gap-4">
            <Button variant="outline" type="button">
              Cancelar
            </Button>
            <Button type="submit">Enviar</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormHero;
