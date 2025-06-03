# Local LLM Interaction Script (Node.js)

This script demonstrates how to interact with a locally running Ollama LLM using Node.js.

## Prerequisites

1.  **Install Ollama:** Follow the instructions on the [Ollama website](https://ollama.ai/) to download and install Ollama for your operating system.
2.  **Download a Model:** Once Ollama is installed, pull a model. You can do this via the command line:
    ```bash
    ollama pull llama3  # Or any other model like mistral, phi3, tinyllama
    ```
3.  **Install Node.js and npm:** If you don't have them installed, download and install them from the [Node.js website](https://nodejs.org/).

## Setup

1.  **Clone the repository (or download the files).**
2.  **Install dependencies:**
    Open your terminal in the project directory and run:
    ```bash
    npm install
    ```

## Running the Script

1.  **Ensure Ollama is running** and the desired model is available.
2.  **Modify the script (optional):**
    Open `ollama_interaction.js` and change the `modelToUse` variable to the model you want to use (e.g., `"mistral"`, `"phi3"`). You can also change the `userPrompt`.
3.  **Run the script:**
    ```bash
    npm start
    ```
    or
    ```bash
    node ollama_interaction.js
    ```

## Example Output

```
Prompt -> llama3 -> Why is the sky blue?
Response -> The sky appears blue to us because of a phenomenon called Rayleigh scattering. Sunlight reaches Earth's atmosphere and is scattered in all directions by all the gases and particles in the air. Blue light is scattered more than other colors because it travels as shorter, smaller waves. This is why we see a blue sky most of the time.
```
