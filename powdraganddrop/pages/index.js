import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Drop } from "../src/components/drop/index.tsx"
import { Bin } from "../src/components/bin/index.tsx"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const main = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
}
const container = {
  lineHeight: 1.3,
}
const even = {
  position: "relative",
  left: "calc(6em / 1.1)",
};

const odd = {
  position: "relative",
  marginTop: "-6.5%",
  marginBottom: "-6.5%",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Drag and drop</title>
        <meta name="description" content="Drag And Drop POW" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DndProvider backend={HTML5Backend}>
        <main style={main}>
        <div style={container}>
          <ol style={even}>
            <Bin text="Dummy text 1" />
            <Bin text="Dummy text 2" />
          </ol>  
          <ol style={odd}>
            <Bin />
            <Bin />
            <Bin />
          </ol>
          <ol style={even}>
            <Bin text="Dummy text 3"/>
            <Bin />
          </ol>  
        </div>
          <div style={{ display: "flex", overflow: 'hidden', clear: 'both' }}>
            <Drop name="Item 1"/>
            <Drop name="Item 2"/>
          </div>
        </main>
      </DndProvider>
    </div>
  )
}
