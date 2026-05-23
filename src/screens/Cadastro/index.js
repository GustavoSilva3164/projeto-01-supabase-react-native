import { useState } from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Switch
} from 'react-native'

import { supabase } from '../../services/supabase'

import { styles } from '../../styles/styles'

export default function Cadastro() {
  const [nome, setNome] = useState('')

  const [plataforma, setPlataforma] = useState('')

  const [descricao, setDescricao] = useState('')

  const [imagem, setImagem] = useState('')

  const [publico, setPublico] = useState(false)

  async function cadastrarJogo() {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    const { error } = await supabase
      .from('jogos')
      .insert([
        {
          nome,
          plataforma,
          descricao,
          imagem,
          publico,
          user_id: user.id
        }
      ])

    if (error) {
      Alert.alert('Erro', error.message)
      return
    }

    Alert.alert('Sucesso', 'Jogo cadastrado')

    setNome('')
    setPlataforma('')
    setDescricao('')
    setImagem('')
    setPublico(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Cadastro
      </Text>

      <TextInput
        placeholder="Nome"
        placeholderTextColor="#999"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Plataforma"
        placeholderTextColor="#999"
        style={styles.input}
        value={plataforma}
        onChangeText={setPlataforma}
      />

      <TextInput
        placeholder="Descrição"
        placeholderTextColor="#999"
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        placeholder="URL da imagem"
        placeholderTextColor="#999"
        style={styles.input}
        value={imagem}
        onChangeText={setImagem}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20
        }}
      >
        <Text
          style={{
            color: '#fff',
            marginRight: 10
          }}
        >
          Público
        </Text>

        <Switch
          value={publico}
          onValueChange={setPublico}
        />
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarJogo}
      >
        <Text style={styles.textoBotao}>
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  )
}