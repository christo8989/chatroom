import { create as zCreate, StateCreator, StoreMutatorIdentifier } from 'zustand'
import { combine } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const create = <
  T extends object,
  U extends object,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
  initialState: T,
  actions: StateCreator<T, Mps, Mcs, U>,
) => (
  zCreate(
    // @ts-expect-errors
    combine<T, U, Mps, Mcs>(initialState, immer(actions))
  )
)