import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useIsActiveStore = create(
  combine(
    // 상태
    {
      isActive: true
    },
    // 액션
    set => {
      return {
        toggleActive: () => {
          // const { isActive } = get()
          // set({
          //   isActive: !isActive
          // })
          set(({ isActive }) => ({
            isActive: !isActive
          }))
        }
      }
    }
  )
)
