import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function EmptyHabit() {
  const { navigate } = useNavigation()
  return (
    <Text
      className="text-zinc-400 text-base"
    >
      Não há hábitos cadastrados para esse dia {' '}
      <Text 
        className="text-violet-400 text-base underline active:text-violet-500"
        onPress={() => navigate('new')}
      >
        Clique aqui para cadastrar um.
      </Text>
    </Text>
  )
}