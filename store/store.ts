import { create } from 'zustand'

interface State {
    passwordLength: number,
    includeUpperCase: boolean,
    includeLowerCase: boolean,
    includeNumbers: boolean,
    includeSymbols: boolean,
}

const [useStore] = create<State>((set, get) => ({
    passwordLength: 12,
    includeUpperCase: true,
    includeLowerCase: true,
    includeNumbers: true,
    includeSymbols: false,
    setPasswordLength: (length: number) => set(state => ({ ...state, passwordLength: length })),
    toggleUpperCase: () => set(state => ({ ...state, includeUpperCase: !state.includeUpperCase }))
    toggleLowerCase: () => set(state => ({ ...state, includeLowerCase: !state.includeLowerCase }))
    toggleNumbers: () => set(state => ({ ...state, includeNumbers: !state.includeNumbers }))
    toggleSymbols: () => set(state => ({ ...state, includeSymbols: !state.includeSymbols }))
}))

export { useStore }
