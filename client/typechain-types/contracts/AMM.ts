/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface AMMInterface extends utils.Interface {
  functions: {
    "PRECISION()": FunctionFragment;
    "getEquivalentToken(address,uint256)": FunctionFragment;
    "getWithdrawEstimate(address,uint256)": FunctionFragment;
    "provide(address,uint256,address,uint256)": FunctionFragment;
    "share(address)": FunctionFragment;
    "totalAmount(address)": FunctionFragment;
    "totalShare()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "PRECISION"
      | "getEquivalentToken"
      | "getWithdrawEstimate"
      | "provide"
      | "share"
      | "totalAmount"
      | "totalShare"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getEquivalentToken",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getWithdrawEstimate",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "provide",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "share",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalAmount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalShare",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getEquivalentToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWithdrawEstimate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "provide", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "share", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalShare", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export interface AMM extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AMMInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEquivalentToken(
      _inToken: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getWithdrawEstimate(
      _token: PromiseOrValue<string>,
      _share: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    provide(
      _tokenX: PromiseOrValue<string>,
      _amountX: PromiseOrValue<BigNumberish>,
      _tokenY: PromiseOrValue<string>,
      _amountY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    share(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalAmount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      _share: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  getEquivalentToken(
    _inToken: PromiseOrValue<string>,
    _amountIn: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getWithdrawEstimate(
    _token: PromiseOrValue<string>,
    _share: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  provide(
    _tokenX: PromiseOrValue<string>,
    _amountX: PromiseOrValue<BigNumberish>,
    _tokenY: PromiseOrValue<string>,
    _amountY: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  share(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalAmount(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalShare(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    _share: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    getEquivalentToken(
      _inToken: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWithdrawEstimate(
      _token: PromiseOrValue<string>,
      _share: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    provide(
      _tokenX: PromiseOrValue<string>,
      _amountX: PromiseOrValue<BigNumberish>,
      _tokenY: PromiseOrValue<string>,
      _amountY: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    share(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalAmount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalShare(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _share: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    getEquivalentToken(
      _inToken: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWithdrawEstimate(
      _token: PromiseOrValue<string>,
      _share: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    provide(
      _tokenX: PromiseOrValue<string>,
      _amountX: PromiseOrValue<BigNumberish>,
      _tokenY: PromiseOrValue<string>,
      _amountY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    share(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalAmount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalShare(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _share: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEquivalentToken(
      _inToken: PromiseOrValue<string>,
      _amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWithdrawEstimate(
      _token: PromiseOrValue<string>,
      _share: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    provide(
      _tokenX: PromiseOrValue<string>,
      _amountX: PromiseOrValue<BigNumberish>,
      _tokenY: PromiseOrValue<string>,
      _amountY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    share(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalAmount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _share: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
