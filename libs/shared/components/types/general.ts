import { ReactNode } from "react"
import { ImageSourcePropType, TouchableOpacityProps } from "react-native/types"

export type IconButtonProps = {
  icon: ReactNode
} & TouchableOpacityProps

export type CircularButtonProps = {
  title?: string
  rightImageUrl?: ImageSourcePropType
  leftImageUrl?: ImageSourcePropType
  backgroundImageUrl?: ImageSourcePropType
} & TouchableOpacityProps
