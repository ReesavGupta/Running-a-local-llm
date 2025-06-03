import  ollama  from 'ollama'

async function chatWithOllama(modelName, promptText) {
  try {
    const response = await ollama.chat({
      model: modelName,
      messages: [{ role: 'user', content: promptText }],
    })
    return response.message.content
  } catch (error) {
    console.error('Error interacting with Ollama:', error.message)
    if (error.cause && error.cause.code === 'ECONNREFUSED') {
      return `Error: Connection refused. Please ensure Ollama is running.`
    }
    return `Error interacting with Ollama: ${error.message}. Please ensure Ollama is running and the model '${modelName}' is available.`
  }
}

async function main() {
  const modelToUse = 'llama3' // Change this to your desired model (e.g., "mistral", "phi3", "tinyllama")
  const userPrompt = 'Why is the sky blue?'

  console.log(`Prompt -> ${modelToUse} -> ${userPrompt}`)

  const aiResponse = await chatWithOllama(modelToUse, userPrompt)

  console.log(`Response -> ${aiResponse}`)
}

main()
