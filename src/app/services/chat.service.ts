import axios from 'axios';

// Define the base URL and any required headers
const API_URL = 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3';
const API_TOKEN = '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';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

// Define the function to send messages to the Hugging Face chat API
export const sendChatMessage = async (messages: { sender: string; content: string }[]) => {
  try {
    // const MessageContent = messages.map((msg) => msg.content).join('\n');
    const MessageContent = messages[messages.length - 1].content;

    const response = await axiosInstance.post('', {
      inputs: MessageContent, // Concatenate messages as a single input text
    });

    // Acessando o campo generated_text corretamente
    const generatedText = response.data?.[0]?.generated_text || ''; // Acessa o primeiro objeto do array e pega o generated_text

    return generatedText; // Retorna o texto gerado
  } catch (error) {
    console.error('Error sending message to Hugging Face chat API:', error);
    throw error; // Repassa o erro para ser tratado onde necessário
  }
};
