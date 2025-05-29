import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"
import { SignUpUser } from "@Types/user";

const useUserSignUpStore = create<SignUpUser>()(
  devtools(
    persist(
      (set) => ({
        name: "",
        setName: (name: string) => set({ name }),
      }),
      {
        name: "user-signup-store",
      }
    )
  )
);

export default useUserSignUpStore;
