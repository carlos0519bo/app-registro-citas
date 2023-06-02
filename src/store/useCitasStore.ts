import create from 'zustand';
import { persist } from 'zustand/middleware';
import { FormProps } from '../interfaces/form';

type Store = {
  patientList: FormProps[];
};

type Actions = {
  addToRegistryList: (data: FormProps) => void;
  removeFromRegistryList: (id: string) => void;
};

export const useCitasStore = create(
  persist<Store & Actions>(
    (set) => ({
      patientList: [],
      addToRegistryList: (data) =>
        set((state) => ({ patientList: [data, ...state.patientList] })),
      removeFromRegistryList: (id) =>
        set((state) => ({
          patientList: state.patientList.filter((item) => item.id !== id),
        })),
    }),
    {
      name: 'citas-app-storage',
    }
  )
);
