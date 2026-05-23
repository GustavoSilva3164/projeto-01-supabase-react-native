import { useEffect, useState } from 'react'

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import { supabase } from '../../services/supabase'

import { styles } from '../../styles/styles'

export default function Perfil({ navigation }) {
  const [email, setEmail] = useState('')

  useEffect(() => {
    buscarUsuario()
  }, [])

  async function buscarUsuario() {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    setEmail(user.email)
  }

  async function sair() {
    await supabase.auth.signOut()

    navigation.replace('Login')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Perfil
      </Text>

      <Text
        style={{
          color: '#fff',
          fontSize: 18,
          marginBottom: 20
        }}
      >
        {email}
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={sair}
      >
        <Text style={styles.textoBotao}>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  )
}