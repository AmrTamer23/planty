import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type PlantsStore = {
  plants: Plant[];
  addPlant: (plant: Plant) => void;
  removePlant: (id: string) => void;
  updatePlant: (id: string, plant: Plant) => void;
};

export const usePlantsStore = create(
  persist<PlantsStore>(
    (set) => ({
      plants: [],
      addPlant: (plant) => {
        set((state) => {
          return {
            ...state,
            plants: [...state.plants, plant],
          };
        });
      },
      removePlant: (id) => {
        set((state) => {
          return {
            ...state,
            plants: state.plants.filter((plant) => plant.id !== id),
          };
        });
      },
      updatePlant: (id, plant) => {
        set((state) => {
          return {
            ...state,
            plants: state.plants.map((p) => {
              if (p.id === id) {
                return plant;
              }
              return p;
            }),
          };
        });
      },
    }),
    {
      name: "plantly-plants-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
