import React from 'react'
import { View } from 'react-native'

export default function Spacer({ x, y }: { x?: number, y?: number }) {
   return (
      <View style={{ marginVertical: y || 20, marginHorizontal: x || 0 }} />
   )
}

