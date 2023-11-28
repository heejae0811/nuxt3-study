export const useHello = () => {
  const sayHello = () => console.log('Hello from useHello')

  return {
    sayHello
  }
}