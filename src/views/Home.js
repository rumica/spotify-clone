import React, { useState } from 'react'
import Section from 'components/Section'

function Home() {

  const items = [
    {
      id: 1,
      title: "Classical Essentials",
      description: "Original Soundtrack",
      image: "https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707"
    },
    {
      id: 2,
      title: "Hit Radyo",
      description: "Original Soundtrack",
      image: "https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707"
    },
    {
      id: 3,
      title: "Classical Essentials",
      description: "Original Soundtrack",
      image: "https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707"
    },
    {
      id: 4,
      title: "Classical Essentials",
      description: "Original Soundtrack",
      image: "https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707"
    },
    {
      id: 5,
      title: "Classical Essentials",
      description: "Original Soundtrack",
      image: "https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707"
    },
    {
      id: 6,
      title: "Classical Essentials",
      description: "Original Soundtrack",
      image: "https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707"
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