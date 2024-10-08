import Link from "next/link";
import Image from "next/image";

export default function Servicios() {
  return (
    <div className="mx-auto pt-16 pb-4">
      <div className="space-y-4 text-start py-4">
        <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl dark:text-zinc-50">
          Principales Oportunidades
        </h2>
        <p className="mx-auto text-lg text-pretty text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
          Tu empresa puede dejar atrás esos desafíos con nuestras soluciones. Imagina sistemas que
          funcionan a la perfección, procesos automatizados y una comunicación interna impecable.
          Con años de experiencia y un historial probado, nuestro equipo está listo para guiarte
          hacia la Integración de Sistemas, el Desarrollo de Software y la Arquitectura de Software.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <div className="group relative dark:bg-stone-900 rounded-xl overflow-hidden">
          <div className="relative w-full min-h-80 bg-zinc-200 rounded-md lg:h-80">
            <Image
              alt="Desarrollo de Software"
              className="w-full h-full object-center object-cover"
              src="/softwae-development.jpg"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
              <h3 className="text-xl">
                <Link href="#">
                  Desarrollo de Software
                </Link>
              </h3>
              <p className="mt-2 text-lg">
                Creamos soluciones personalizadas adaptadas a las necesidades específicas de tu negocio,
                utilizando las últimas tecnologías del mercado.
              </p>
              <Link className="text-lg font-medium text-primary hover:text-primary-light pb-4" href="#">
                Saber Más →
              </Link>
            </div>
          </div>
        </div>
        <div className="group relative dark:bg-stone-900 rounded-xl overflow-hidden">
          <div className="relative w-full min-h-80 bg-zinc-200 rounded-md lg:h-80">
            <Image
              alt="Integraciones Complejas"
              className="w-full h-full object-center object-cover"
              src="/integrations.jpg"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
              <h3 className="text-xl">
                <Link href="#">
                  Integraciones Complejas
                </Link>
              </h3>
              <p className="mt-2 text-lg">
                Especialistas en integrar diferentes sistemas y plataformas, asegurando una comunicación
                fluida y eficiente entre tus herramientas digitales.
              </p>
              <Link className="text-lg font-medium text-primary hover:text-primary-light pb-4" href="#">
                Saber Más →
              </Link>
            </div>
          </div>
        </div>
        <div className="group relative dark:bg-stone-900 rounded-xl overflow-hidden">
          <div className="relative w-full min-h-80 bg-zinc-200 rounded-md lg:h-80">
            <Image
              alt="Arquitectura de Software"
              className="w-full h-full object-center object-cover"
              src="/devops.jpg"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
              <h3 className="text-xl">
                <Link href="#">
                  Arquitectura de Software
                </Link>
              </h3>
              <p className="mt-2 text-lg">
                Diseñamos la arquitectura de tu software, garantizando un sistema escalable, seguro y
                de alto rendimiento.
              </p>
              <Link className="text-lg font-medium text-primary hover:text-primary-light pb-4" href="#">
                Saber Más →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
