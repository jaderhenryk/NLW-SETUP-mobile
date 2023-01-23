import { Dimensions, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import clsx from 'clsx'
import dayjs from 'dayjs'

import { generateProgressPercentage } from '../utils/generate-progress-porcentage'

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5

export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5)

interface Props extends TouchableOpacityProps {
  date: Date
  amount?:    number
  completed?: number
}

export function HabitDay({amount = 0, completed = 0, date, ...rest}: Props) {
  const completePercent = amount > 0 ? generateProgressPercentage(amount, completed) : 0
  const today = dayjs().startOf('day').toDate()
  const isToday = dayjs(date).isSame(today)
  return (
    <TouchableOpacity 
      className={clsx("rounded-lg border-2 m-1", {
        ["bg-zinc-900 border-zinc-800"]: completePercent === 0,
        ["bg-violet-900 border-violet-700"]: completePercent > 0 && completePercent < 20,
        ["bg-violet-800 border-violet-600"]: completePercent >= 20 && completePercent < 40,
        ["bg-violet-700 border-violet-500"]: completePercent >= 40 && completePercent < 60,
        ["bg-violet-600 border-violet-500"]: completePercent >= 60 && completePercent < 80,
        ["bg-violet-500 border-violet-400"]: completePercent >= 80,
        ["border-white border-4"]: isToday
      })}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
      {...rest}
    />
  );
}