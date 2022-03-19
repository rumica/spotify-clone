import React, { useState } from 'react'
import Section from 'components/Section'

function Home() {

  const items = [
    {
      id: 1,
      title: "Classical Essentials",
      description: "Original Soundtrack",
      image: "https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
    {
      id: 2,
      title: "Hit Radyo",
      description: "Original Soundtrack",
      image: "https://i.scdn.co/image/ab67706f00000002f48abbedb4525dae3f529657",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
    {
      id: 3,
      title: "Classical Essentials",
      description: "Original Soundtrack",
      image: "https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },
    {
      id: 4,
      title: "Classical Essentials",
      description: "Original Soundtrack",
      image: "https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    },
    {
      id: 5,
      title: "Classical Essentials",
      description: "Original Soundtrack",
      image: "https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    },
    {
      id: 6,
      title: "Classical Essentials",
      description: "Original Soundtrack",
      image: "https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
    },
  ]

  return (
    <div>
        <Section 
          title="Yakınlarda çalınanlar"
          more="/seemore"
          items={items}
        />
        <Section 
          title="Çalma listelerin"
          more="/seemore"
          items={items}
        />
        <Section 
          title="En çok dinlediğin mix'ler"
          more="/seemore"
          items={items}
        />
    </div>
  )
}

export default Home