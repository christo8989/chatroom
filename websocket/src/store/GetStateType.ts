export type GetStateType<T extends (...args: any) => any> = Parameters<Parameters<T>[0]>[0];