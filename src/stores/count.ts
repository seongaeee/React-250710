import { create } from 'zustand'
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage
} from 'zustand/middleware'

export const useCountStore = create(
  persist(
    // 내용
    subscribeWithSelector(
      combine(
        {
          count: 0,
          double: 0
        },
        set => ({
          increase: () => {
            set(({ count }) => ({ count: count + 1 }))
          },
          decrease: () => {
            set(({ count }) => ({ count: count - 1 }))
          }
        })
      )
    ),
    // 옵션
    {
      name: 'countStore',
      version: 1,
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)

useCountStore.subscribe(
  // 선택자 함수
  state => state.count,
  // 실행할 함수
  count => {
    useCountStore.setState({
      double: count * 2
    })
  }
)
