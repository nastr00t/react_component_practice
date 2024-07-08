import './App.css'
import { MyComponent } from './components/MyComponent'
import { SecondComponet } from './components/SecondComponet';

function App() {
  const name = "Elvis";
  const lastName = "Acosta González"
  return (
    <>
      <div>
        <h3>Pactica de componentes</h3>
        { /* cargar el primer componente */}
        <MyComponent name={name} lastName={
          lastName} />
      </div>
      <hr />
      <div>
      {/* Este es el segundo componente */}
        <SecondComponet />
      </div>
    </>
  )
}

export default App
