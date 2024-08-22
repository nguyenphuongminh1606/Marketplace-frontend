import { useState } from 'react'
interface IMethodCallInterface {
  methodFunction: () => Promise<void>
  text: string
}
const MethodCall = ({ methodFunction, text }: IMethodCallInterface) => {
  const [loading, setloading] = useState<boolean>(false)
  const callMethodFunction = async () => {
    setloading(true)
    await methodFunction
    setloading(false)
  }
  return (
    <button className="btn m-2" onClick={callMethodFunction}>
      {loading ? <span className="loading loading-spinner" /> : text}
    </button>
  )
}

export default MethodCall
