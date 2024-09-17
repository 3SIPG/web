const express = require('express');
const app = express();
const port = 4444;

// Mock database
const categorias = [
  { id: 1, nome: 'Geografia' },
  { id: 2, nome: 'História' }
];

const perguntas = [
  { id: 1, texto: 'Qual é a capital da França?', categoria_id: 1 },
  { id: 2, texto: 'Quem foi o primeiro presidente dos EUA?', categoria_id: 2 }
];

const respostas = [
  { id: 1, texto: 'Paris', correta: true, pergunta_id: 1 },
  { id: 2, texto: 'Londres', correta: false, pergunta_id: 1 },
  { id: 3, texto: 'George Washington', correta: true, pergunta_id: 2 },
  { id: 4, texto: 'Abraham Lincoln', correta: false, pergunta_id: 2 }
];

// Endpoint para obter categorias
app.get('/api/categorias', (req: any, res: { json: (arg0: { id: number; nome: string; }[]) => void; }) => {
  res.json(categorias);
});

// Endpoint para obter perguntas por categoria
app.get('/api/categorias/:categoriaId/perguntas', (req: { params: { categoriaId: any; }; }, res: { json: (arg0: { id: number; texto: string; categoria_id: number; }[]) => void; }) => {
  const { categoriaId } = req.params;
  const perguntasPorCategoria = perguntas.filter(p => p.categoria_id == categoriaId);
  res.json(perguntasPorCategoria);
});

// Endpoint para obter uma pergunta específica com suas respostas
app.get('/api/perguntas/:perguntaId', (req: { params: { perguntaId: any; }; }, res: { json: (arg0: { pergunta: { id: number; texto: string; categoria_id: number; } | undefined; respostas: { id: number; texto: string; correta: boolean; pergunta_id: number; }[]; }) => void; }) => {
  const { perguntaId } = req.params;
  const pergunta = perguntas.find(p => p.id == perguntaId);
  const respostasDaPergunta = respostas.filter(r => r.pergunta_id == perguntaId);
  res.json({ pergunta, respostas: respostasDaPergunta });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
