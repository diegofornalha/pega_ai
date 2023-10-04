import Decimal from "decimal.js"
import { classNames } from "../../lib/utils"
import { useSWRConfig } from 'swr'
import * as fcl from "@onflow/fcl"

import { useRecoilState } from "recoil"
import {
  transactionInProgressState,
  transactionStatusState
} from "../../lib/atoms"
import { register, claim } from "../../lib/mist-transactions"

const isClaimable = (claimStatus) => {
  if (!claimStatus) return false
  let aStatus = claimStatus.availability.status.rawValue
  let eStatusR = claimStatus.eligibilityForRegistration.status.rawValue
  let eStatusC = claimStatus.eligibilityForClaim.status.rawValue 
  if (aStatus == "2" && eStatusR == "0") return true
  if ((aStatus == "3" || aStatus == "4") && eStatusC == "1") return true
  return false
}

// [Emoji, Description, Amount, Title]
const parseClaimStatus = (user, claimStatus, displayName, isPreview) => {
  const elements = {
    emoji: "🎉", description: "YOU WON", amount: `${displayName} #ID`, title: "PREVIEWING"
  }
  if (isPreview) { return elements }

  if (!user || !user.loggedIn) {
    elements.emoji = "👀"
    elements.description = "CONECTE A CARTEIRA PARA VERIFICAR A ELEGIBILIDADE"
    elements.amount = null
    elements.title = "Conectar carteira"
    return elements
  }

  if (!claimStatus) {
    elements.emoji = "❓"
    elements.description = "UNKNOWN STATUS"
    elements.amount = null
    elements.title = "UNKNOWN"
    return elements
  }

  let aStatus = claimStatus.availability.status.rawValue
  let eStatusR = claimStatus.eligibilityForRegistration.status.rawValue
  let eStatusC = claimStatus.eligibilityForClaim.status.rawValue
  let eligibleNFT = claimStatus.eligibilityForClaim.eligibleNFTs[0]
  let winnerAmount = `${displayName} #${eligibleNFT}`
  if (aStatus === "1") {
    // ended expired and no capacity
    elements.emoji = "⛔️"
    elements.title = "SORTEIO TERMINOU"
    // Keep the draw result
    if (eStatusC == "5") {
      elements.description = "VOCÊ REIVINDICOU" 
      elements.amount = winnerAmount
    } else if (eStatusC == "1") {
      elements.description = "VOCÊ GANHOU" 
      elements.amount = winnerAmount
    } else {
      elements.description = "NÃO ESTÁ DISPONÍVEL"
      elements.amount = null 
    }
  } else if (aStatus === "5") {
    elements.emoji = "⛔️"
    elements.title = "SORTEIO EXPIROU"
    // Keep the draw result
    if (eStatusC == "5") {
      elements.description = "VOCÊ REIVINDICOU" 
      elements.amount = winnerAmount
    } else if (eStatusC == "1") {
      elements.description = "VOCÊ GANHOU" 
      elements.amount = winnerAmount
    } else {
      elements.description = "NÃO ESTÁ DISPONÍVEL"
      elements.amount = null 
    }
  } else if (aStatus === "3") {
    if (eStatusC == "5") {
      elements.emoji = "🎉"
      elements.description = "VOCÊ REIVINDICOU" 
      elements.amount = winnerAmount
      elements.title = "FOI REIVINDICADO"
    } else if (eStatusC == "1") {
      elements.emoji = "🎉"
      elements.description = "VOCÊ GANHOU" 
      elements.amount = winnerAmount
      elements.title = "REIVINDICAR"
    } else if (eStatusC == "3" && eStatusR == "4") {
      elements.emoji = "🎲"
      elements.description = "VOCÊ ESTÁ NA LISTA DE ESPERA"  
      elements.amount = null
      elements.title = "SORTEIO EM ANDAMENTO"
    } else if (eStatusR == "0") {
      // eligible for registration but not late
      elements.emoji = "🦥"
      elements.description = "VOCÊ DEIXOU PASSAR O REGISTRO"
      elements.title = "TARDE DEMAIS"
      elements.amount = null  
    } else {
      elements.emoji = "🙉"
      elements.description = "VOCÊ NÃO É ELEGÍVEL"
      elements.title = "NÃO ELEGÍVEL"
      elements.amount = null 
    }
  } else if (aStatus === "4") {
    if (eStatusC == "5") {
      elements.emoji = "🎉"
      elements.description = "VOCÊ REIVINDICOU" 
      elements.amount = winnerAmount
      elements.title = "FOI REIVINDICADO"
    } else if (eStatusC == "1") {
      elements.emoji = "🎉"
      elements.description = "VOCÊ GANHOU" 
      elements.amount = winnerAmount
      elements.title = "REIVINDICAR"
    } else if (eStatusC == "3" && eStatusR == "4") {
      elements.emoji = "🙈"
      elements.description = "VOCÊ NÃO É O GANHADOR"
      elements.title = "NÃO GANHOU"
      elements.amount = null
    } else if (eStatusR == "0") {
      // eligible for registration but not late
      elements.emoji = "🦥"
      elements.description = "VOCÊ DEIXOU PASSAR O REGISTRO"
      elements.title = "TARDE DEMAIS"
      elements.amount = null  
    } else {
      elements.emoji = "🙉"
      elements.description = "VOCÊ NÃO É ELEGÍVEL"
      elements.title = "NÃO ELEGÍVEL"
      elements.amount = null 
    }
  } else if (aStatus === "0") {
    elements.emoji = "🕙"
    elements.description = "TIC TAC ..."   
    elements.title = "NÃO INICIADO AINDA"
    elements.amount = null
  } else if (aStatus === "6") {
    elements.emoji = "⏸️"
    elements.title = "SORTEIO EM PAUSA"
    if (eStatusC == "5") {
      elements.description = "VOCÊ REINVINDICOU" 
      elements.amount = winnerAmount
      elements.description = "VOCÊ GANHOU"" 
      elements.amount = winnerAmount
    } else if (eStatusC == "3") {
      if (eStatusR == "4") {
        elements.description = "VOCÊ FOI REGISTRADO"
        elements.amount = null
      } else if (eStatusR == "2") {
        elements.description = "VOCÊ NÃO ESTÁ NA LISTA"" 
        elements.amount = null
      } else if (eStatusR == "0") {
        elements.description = "VOCÊ ESTÁ NA LISTA" 
        elements.amount = null
      }
    } 
  } else if (aStatus === "2") {
    if (eStatusR === "0") {
      elements.emoji = "✅"
      elements.description = "VOCÊ ESTÁ NA LISTA"
      elements.title = "REGISTRAR AGORA"
      elements.amount = null
    } else if (eStatusR === "2") {
      elements.emoji = "🙉"
      elements.description = "VOCÊ NÃO ESTÁ NA LISTA"
      elements.title = "NÃO ELEGÍVEL"
      elements.amount = null
    } else if (eStatusR === "4") {
      elements.emoji = "✅"
      elements.description = "VOCÊ ESTÁ REGISTRADO"
      elements.title = "VOLTE MAIS TARDE"
      elements.amount = null
    }  
  }

  return elements
}

export default function ActionCard(props) {
  const [transactionInProgress, setTransactionInProgress] = useRecoilState(transactionInProgressState)
  const [, setTransactionStatus] = useRecoilState(transactionStatusState)
  const { mutate } = useSWRConfig()

  const { isPreview, raffle, host, user, nft, claimStatus, setShowClaimedModal, setShowRegisteredModal, setRewardInfo } = props
  const displayName = isPreview ? (nft && nft.name) : (raffle.nftInfo && raffle.nftInfo.name)

  // [Emoji, Description, Amount, Title]
  const {emoji, description, amount, title} = parseClaimStatus(user, claimStatus, displayName, isPreview)

  return (
    <div>
      <div className="flex flex-col bg-white text-black
      min-w-[240px] sm:max-w-[240px] min-h-[240px] justify-center
  ring-1 ring-black ring-opacity-5 rounded-3xl overflow-hidden p-5
  shadow-drizzle
  ">
        <label className="block w-full text-center text-[60px]">{emoji}</label>
        <label className="block w-full mt-5 text-center text-lg font-semibold font-flow">{description}</label>
        <label className="block w-full text-center mt-1 text-xl font-bold font-flow text-drizzle-green break-words">{amount}</label>
        <button
          type="button"
          className={classNames(
            (isPreview || (user && user.loggedIn && !isClaimable(claimStatus))) ? "bg-disabled-gray" :
              (transactionInProgress ? "bg-drizzle-green-light" : "bg-drizzle-green hover:bg-drizzle-green-dark"),
            `mt-5 h-[48px] text-base font-medium shadow-sm text-black rounded-2xl`
          )}
          disabled={isPreview || (user && user.loggedIn && !isClaimable(claimStatus)) || transactionInProgress}
          onClick={async () => {
            if (!user || !user.loggedIn) {
              fcl.authenticate()
              return
            }

            if (isPreview || !isClaimable(claimStatus) || !raffle) {
              return
            }

            // Registering
            if (claimStatus.availability.status.rawValue == "2") {
              const res = await register(raffle.raffleID, host.address,
                setTransactionInProgress,
                setTransactionStatus)

              if (res && res.status === 4 && res.statusCode === 0) {
                const event = res.events.find((e) => e.type.includes("RaffleRegistered"))
                if (event) {
                  setShowRegisteredModal(true)
                }
              } 
            } else if (claimStatus.availability.status.rawValue == "3" || claimStatus.availability.status.rawValue == "4") {
              const res = await claim(raffle.raffleID, host.address, raffle.nftInfo,
                setTransactionInProgress,
                setTransactionStatus)

              if (res && res.status === 4 && res.statusCode === 0) {
                const event = res.events.find((e) => e.type.includes("RaffleClaimed"))
                if (event) {
                  setRewardInfo(amount)
                  setShowClaimedModal(true)
                }
              }  
            }

            mutate(["raffleClaimStatusFetcher", raffle.raffleID, host.address, user && user.addr])
            mutate(["raffleFetcher", raffle.raffleID, host.address])
          }}
        >
          {title}
        </button>
      </div>
    </div>
  )
}