import { create } from "zustand";

// managing all states here
export const useGlobalState = create((set) => ({
    isInviteOpen: false,
    setIsInviteOpen: (isInviteOpen) => set({isInviteOpen})
}))