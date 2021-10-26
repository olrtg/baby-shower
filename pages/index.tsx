import type { NextPage } from 'next';
import { Product } from '../@baby-shower/components/product';
import { Footer } from '../@baby-shower/components/footer';
import { Italic } from '../@baby-shower/components/utils/italic';

const Home: NextPage = () => {
  return (
    <main className="antialiased bg-pink-100">
      <div className="max-w-4xl mx-auto space-y-24">
        <section className="max-w-2xl pt-24 mx-auto text-center">
          <div className="space-y-4 text-2xl leading-normal">
            <p>
              Bueno, básicamente esta es una <Italic>mini app</Italic> que hice
              con el propósito de tratar de{' '}
              <Italic>evitar regalos duplicados</Italic> para los{' '}
              <Italic>baby showers</Italic> de mi hermana <Italic>Karim</Italic>
              .
            </p>
            <p>
              ¿Como funciona? Solamente tenés que <Italic>seleccionar</Italic>{' '}
              el/los producto/s y la cantidad (como un carrito de compras),
              luego <Italic>guardar</Italic> el regalo dejando un correo y por
              último vas a recibir un correo con el resumen de tu regalo.
            </p>
            <p>
              Te agradezco de todo <Italic>corazón</Italic> por tomarte el
              tiempo :D
            </p>
            <p>
              Por cierto, me hubiera gustado que el color de esta página sea de{' '}
              <Italic>color azul</Italic> pero bueno {'>'}:c
            </p>
          </div>
        </section>

        <section>
          <h1 className="mb-4 font-serif text-4xl">
            Paso 1: <Italic>seleccioná tu regalo</Italic>
          </h1>
          <div className="grid grid-cols-3 gap-6">
            <Product
              name={'Pañal RN'}
              description={'1x paquete de pañales para recién nacidos.'}
              available={20}
            />
            <Product
              name={'Pañal P'}
              description={'1x paquete de pañales en tamaño P.'}
              available={20}
            />
            <Product
              name={'Pañal M'}
              description={'1x paquete de pañales en tamaño M.'}
              available={20}
            />
            <Product
              name={'Pañal RN'}
              description={'1x paquete de pañales para recién nacidos.'}
              available={20}
            />
            <Product
              name={'Pañal P'}
              description={'1x paquete de pañales en tamaño P.'}
              available={20}
            />
            <Product
              name={'Pañal M'}
              description={'1x paquete de pañales en tamaño M.'}
              available={20}
            />
            <Product
              name={'Pañal RN'}
              description={'1x paquete de pañales para recién nacidos.'}
              available={20}
            />
            <Product
              name={'Pañal P'}
              description={'1x paquete de pañales en tamaño P.'}
              available={20}
            />
            <Product
              name={'Pañal M'}
              description={'1x paquete de pañales en tamaño M.'}
              available={20}
            />
          </div>
        </section>

        <section>
          <h1 className="mb-4 font-serif text-4xl">
            Paso 2: <Italic>guardá tu regalo</Italic>
          </h1>
          <form className="flex items-center space-x-4">
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              className="p-4 rounded"
              required
            />
            <button
              type="submit"
              className="px-6 py-4 text-white bg-pink-900 rounded"
            >
              Guardar regalo
            </button>
          </form>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default Home;
