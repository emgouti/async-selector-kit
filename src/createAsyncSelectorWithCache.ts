import { createAsyncSelectorResults } from "./createAsyncSelectorResults";
import { createSelector } from "reselect";


export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, DefaultValue = []>(params: {
  async: (cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: () => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: []): [
    (state: State) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State) => boolean,
    (state: State) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, Props, DefaultValue = []>(params: {
  async: (cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: () => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: []): [
    (state: State, props: Props) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State, props: Props) => boolean,
    (state: State, props: Props) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, DefaultValue = []>(params: {
  async: (val1: R1, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1]): [
    (state: State) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State) => boolean,
    (state: State) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, Props, DefaultValue = []>(params: {
  async: (val1: R1, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1]): [
    (state: State, props: Props) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State, props: Props) => boolean,
    (state: State, props: Props) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2]): [
    (state: State) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State) => boolean,
    (state: State) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, Props, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2]): [
    (state: State, props: Props) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State, props: Props) => boolean,
    (state: State, props: Props) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3]): [
    (state: State) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State) => boolean,
    (state: State) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, Props, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3]): [
    (state: State, props: Props) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State, props: Props) => boolean,
    (state: State, props: Props) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, R4, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3, val4: R4) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4]): [
    (state: State) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State) => boolean,
    (state: State) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, R4, Props, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3, val4: R4) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4]): [
    (state: State, props: Props) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State, props: Props) => boolean,
    (state: State, props: Props) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, R4, R5, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5]): [
    (state: State) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State) => boolean,
    (state: State) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, R4, R5, Props, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5]): [
    (state: State, props: Props) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State, props: Props) => boolean,
    (state: State, props: Props) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, R4, R5, R6, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6]): [
    (state: State) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State) => boolean,
    (state: State) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, R4, R5, R6, Props, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6]): [
    (state: State, props: Props) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State, props: Props) => boolean,
    (state: State, props: Props) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, R4, R5, R6, R7, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7]): [
    (state: State) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State) => boolean,
    (state: State) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, R4, R5, R6, R7, Props, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7]): [
    (state: State, props: Props) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State, props: Props) => boolean,
    (state: State, props: Props) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7, (state: State) => R8]): [
    (state: State) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State) => boolean,
    (state: State) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, Props, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7, (state: State, props: Props) => R8]): [
    (state: State, props: Props) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State, props: Props) => boolean,
    (state: State, props: Props) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, R9, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7, (state: State) => R8, (state: State) => R9]): [
    (state: State) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State) => boolean,
    (state: State) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, R9, Props, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7, (state: State, props: Props) => R8, (state: State, props: Props) => R9]): [
    (state: State, props: Props) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State, props: Props) => boolean,
    (state: State, props: Props) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7, (state: State) => R8, (state: State) => R9, (state: State) => R10]): [
    (state: State) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State) => boolean,
    (state: State) => any | undefined,
    (state: State) => void
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, Props, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10, cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10, cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7, (state: State, props: Props) => R8, (state: State, props: Props) => R9, (state: State, props: Props) => R10]): [
    (state: State, props: Props) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State, props: Props) => boolean,
    (state: State, props: Props) => any | undefined,
    (state: State) => void
  ];


export function createAsyncSelectorWithCache(params, selectors: any = []) {
  const getCache = params.getCache;
  if (typeof getCache !== 'function') {
    throw new Error('getCache must be a function.');
  }

  const cache = createSelector(selectors, getCache);

  const selectorResults = (createAsyncSelectorResults as any)({
    ...params,
    shouldUseAsync: (...values) => {
      if (params.shouldUseAsync) {
        return params.shouldUseAsync(...values) && !Boolean(values[selectors.length]);
      } else {
        return !Boolean(values[selectors.length]);
      }
    }
  }, [...selectors, cache]);

  const getValue = createSelector(
    [selectorResults[0], cache],
    (asyncResult, cache) => {
      if (cache) {
        return cache;
      } else {
        return asyncResult;
      }
    }
  );
  selectorResults[0] = getValue;

  const getIsWaiting = createSelector(
    [selectorResults[1], cache],
    (isWaiting, cache) => {
      if (cache) {
        return false;
      } else {
        return isWaiting;
      }
    }
  );
  selectorResults[1] = getIsWaiting;

  return selectorResults;
}
