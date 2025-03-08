import { CounterSchema } from "@/entities/Counter";
export declare const getCounterValue: ((state: import("../../../../../helpers/StoreProvider/StateSchema.ts").StateSchema) => number) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: CounterSchema) => number;
    memoizedResultFunc: ((resultFuncArgs_0: CounterSchema) => number) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => number;
    dependencies: [(state: import("../../../../../helpers/StoreProvider/StateSchema.ts").StateSchema) => CounterSchema];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    argsMemoize: typeof import("reselect").weakMapMemoize;
    memoize: typeof import("reselect").weakMapMemoize;
};
