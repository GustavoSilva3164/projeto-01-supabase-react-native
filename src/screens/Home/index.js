import { useEffect, useState } from 'react'

import {
  View,
  Text,
  FlatList
} from 'react-native'

import { supabase } from '../../services/supabase'

import { styles } from '../../styles/styles'

import CardJogo from '../../components/CardJogo'

export default function Home() {
  const [jogos, setJogos] = useState([])

  useEffect(() => {
    buscarJogos()
  }, [])

  async function buscarJogos() {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    const { data } = await supabase
      .from('jogos')
      .select('*')
      .or(`publico.eq.true,user_id.eq.${user.id}`)

    setJogos(data)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Jogos
      </Text>

    <FlatList
      data={jogos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CardJogo jogo={item} />
      )}
      showsVerticalScrollIndicator={false}
    />

    </View>
  )
}