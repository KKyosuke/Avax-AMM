import {useEffect, useState} from "react";
import {BigNumber, ethers} from "ethers";
import UsdcArtifact from "../utils/USDCToken.json";
import JoeArtifact from "../utils/JOEToken.json";
import AmmArtifact from "../utils/AMM.json";
import {AMM as AmmContractType, JOEToken as JoeContractType, USDCToken as UsdcContractType} from "../typechain-types";
import {getEthereum} from "../utils/ethereum";

export const UsdcAddress = "0xE906BcD6f604ffa88C1FF607D4492fd58EEBce70";
export const JoeAddress = "0x0C3f59ECCe74e74C85A15e2Ff2A34fCa0f1087c3";
export const AmmAddress = "0x6f208c183294af6dEbF4cb6180Ad35F05306DDeF";

export type TokenType = {
  symbol: string;
  contract: UsdcContractType | JoeContractType;
};

export type AmmType = {
  sharePrecision: BigNumber;
  contract: AmmContractType;
};

type ReturnUseContract = {
  usdc: TokenType | undefined;
  joe: TokenType | undefined;
  amm: AmmType | undefined;
};

export const useContract = (
  currentAccount: string | undefined
): ReturnUseContract => {
  const [usdc, setUsdc] = useState<TokenType>();
  const [joe, setJoe] = useState<TokenType>();
  const [amm, setAmm] = useState<AmmType>();
  const ethereum = getEthereum();

  const getContract = (
    contractAddress: string,
    abi: ethers.ContractInterface,
    storeContract: (_: ethers.Contract) => void
  ) => {
    if (!ethereum) {
      console.log("Ethereum object doesn't exist!");
      return;
    }
    if (!currentAccount) {
      // ログインしていない状態でコントラクトの関数を呼び出すと失敗するため
      // currentAccountがundefinedの場合はcontractオブジェクトもundefinedにします。
      console.log("currentAccount doesn't exist!");
      return;
    }
    try {
      // @ts-ignore: ethereum as ethers.providers.ExternalProvider
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner(); // 簡易実装のため, 引数なし = 初めのアカウント(account#0)を使用する
      const Contract = new ethers.Contract(contractAddress, abi, signer);
      storeContract(Contract);
    } catch (error) {
      console.log(error);
    }
  };

  const generateUsdc = async (contract: UsdcContractType) => {
    try {
      console.error("generateUsdc")
      const symbol = await contract.symbol();
      setUsdc({symbol: symbol, contract: contract} as TokenType);
    } catch (error) {
      console.log(error);
    }
  };

  const generateJoe = async (contract: UsdcContractType) => {
    try {
      console.error("generateJoe")
      const symbol = await contract.symbol();
      setJoe({symbol: symbol, contract: contract} as TokenType);
    } catch (error) {
      console.log(error);
    }
  };

  const generateAmm = async (contract: AmmContractType) => {
    try {
      console.error("generateAmm")
      const precision = await contract.PRECISION();
      setAmm({sharePrecision: precision, contract: contract} as AmmType);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContract(UsdcAddress, UsdcArtifact.abi, (Contract: ethers.Contract) => {
      generateUsdc(Contract as UsdcContractType);
    });
    getContract(JoeAddress, JoeArtifact.abi, (Contract: ethers.Contract) => {
      generateJoe(Contract as JoeContractType);
    });
    getContract(AmmAddress, AmmArtifact.abi, (Contract: ethers.Contract) => {
      generateAmm(Contract as AmmContractType);
    });
  }, [ethereum, currentAccount]);

  return {
    usdc,
    joe,
    amm,
  };
};