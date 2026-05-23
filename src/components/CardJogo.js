import {
  View,
  Text,
  Image
} from 'react-native'

export default function CardJogo({ jogo }) {
  return (
    <View
      style={{
        backgroundColor: '#1e1e1e',
        borderRadius: 15,
        marginBottom: 20,
        overflow: 'hidden'
      }}
    >
      <Image
        source={{
          uri:
            jogo.imagem ||
            'https://placehold.co/600x400'
        }}
        resizeMode="contain"
        style={{
          width: '100%',
          aspectRatio: 16 / 9,
          backgroundColor: '#111'
        }}
      />

      <View
        style={{
          padding: 15
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold'
          }}
        >
          {jogo.nome}
        </Text>

        <Text
          style={{
            color: '#aaa',
            marginTop: 5
          }}
        >
          {jogo.plataforma}
        </Text>

        <Text
          style={{
            color: '#fff',
            marginTop: 10
          }}
        >
          {jogo.descricao}
        </Text>

        <Text
          style={{
            color: jogo.publico
              ? '#00ff99'
              : '#ff5555',

            marginTop: 10,

            fontWeight: 'bold'
          }}
        >
          {jogo.publico
            ? 'Público'
            : 'Privado'}
        </Text>
      </View>
    </View>
  )
}