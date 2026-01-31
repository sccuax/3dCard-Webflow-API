  import './App.css'
  import Render from './components/render3D'
  import {My3DCardSlider} from './components/testin/testin'
  // import ThreeDCard from './components/ThreeDCard.webflow'

  //import { Card3D } from './components/3d-card'

  function App() {


  return (
    <>
    <div className='flex flex-col gap-10'>
          <Render />
      <My3DCardSlider 
      title="Webflow 3D Card"
      text="Explora nuestra galería de proyectos destacados, donde cada imagen cuenta una historia de creatividad e innovación."
      itemId="697baf896022dff3e9a6ff9c"
      buttonText="Ver Más"
      />
    </div>

    </>
  )

  }

  export default App
