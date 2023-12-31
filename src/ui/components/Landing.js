import * as fcl from "@onflow/fcl";
import Image from "next/image";
import { useRouter } from 'next/router';
import { classNames } from "../lib/utils";
import { useRecoilState } from "recoil";
import { transactionInProgressState } from "../lib/atoms";
import styles from "../styles/Landing.module.css";
import Link from 'next/link';

export default function Landing(props) {
  const router = useRouter();
  const [transactionInProgress] = useRecoilState(transactionInProgressState);

  return (
    <div className="flex flex-col gap-y-10 sm:gap-y-20">
      <div className="mt-5 sm:mt-10 flex gap-y-4 sm:gap-y-5 flex-col-reverse sm:flex-row justify-between items-center">
        <div className="px-2 flex flex-col gap-y-6 sm:gap-y-8 items-start">
          <div className="flex flex-col gap-y-2">
            <div className={styles.landing}>
              <div className={styles.ltitle}>
                <div className="underline text-black font-bold decoration-drizzle-green decoration-4">Sorteio</div>
                <div className="underline text-black font-bold decoration-drizzle-green decoration-4">Drops</div>
              </div>
            </div>
            <label className="-mt-1 font-flow text-black font-bold text-5xl sm:text-6xl">nunca foi</label>
            <label className="font-flow text-black font-bold text-5xl sm:text-6xl">tão simples!</label>
          </div>
          <div className="flex flex-col">
  <label className="-mt-5 font-flow text-gray-400 font-medium text-md">
    Distribua Seus Tokens, é tão fácil como mandar um PIX!
  </label>
  <div className="flex items-center gap-4">
    <Link href="https://www.twitter.com/flowbrasilchain">
      <a target="_blank" rel="noopener noreferrer" className="cursor-pointer font-flow text-drizzle-green font-medium text-md underline decoration-drizzle-green decoration-3">
        Siga-nos no Twitter
      </a>
    </Link>
    <span className="text-gray-400">|</span>
    <Link href="https://global.transak.com/">
      <a target="_blank" rel="noopener noreferrer" className="cursor-pointer font-flow text-drizzle-green font-medium text-md underline decoration-drizzle-green decoration-3">
        Ainda não tem token flow? Compre agora!
      </a>
    </Link>
  </div>
</div>

          {props.user && props.user.loggedIn ? (
            <div className="-mt-5 flex flex-col gap-y-2">
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                <Link href="/create/ft_drop">
                  <button className="bg-drizzle-green hover:bg-drizzle-green-dark text-black px-4 py-2 rounded-md shadow-sm">Criar Drop de Moedas</button>
                </Link>
                <button 
                  className="bg-drizzle-green hover:bg-drizzle-green-dark text-black px-4 py-2 rounded-md shadow-sm"
                  onClick={() => {
                    router.push(`/${props.user.addr}`)
                  }}
                >
                  Ver e Gerenciar Histórico
                </button>
                <a 
                  href="/lista" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-drizzle-green hover:bg-drizzle-green-dark text-black px-4 py-2 rounded-md shadow-sm inline-block"
                >
                  LISTA VIP | Sorteio de Tokens
                </a>
                {}
              </div>
            </div>
          ) : (
            <button
              type="button"
              disabled={transactionInProgress}
              className={classNames(
                transactionInProgress ? "bg-drizzle-green-light text-gray-400" : "bg-drizzle-green hover:bg-drizzle-green-dark text-black",
                "h-12 px-6 text-base rounded-2xl font-flow font-semibold shadow-sm text-black"
              )}
              onClick={() => { fcl.authenticate() }}
            >
              Entrar
            </button>
          )}
        </div>

        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] relative">
          <Image src="/landing.png" alt="Imagem representativa da landing page" layout="responsive" width={400} height={400} objectFit="cover" priority={true} />
        </div>
      </div>
    </div>
  );
}
