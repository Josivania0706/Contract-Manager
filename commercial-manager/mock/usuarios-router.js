import jsonServer from 'json-server';
import jwt from 'jsonwebtoken';


const usuariosRouter = jsonServer.router('./mock/user.json');
const db = usuariosRouter.db;
const SECRET_KEY = 'seu_secreto'; // Substitua com uma chave segura para assinar o token

export default (req, res, next) => {
    if (req.method === 'POST' && req.path === '/login') {
        const { email, password } = req.body;

        // Verifique as credenciais do usuário
        console.log('Email e senha recebidos:', email, password);

        const user = db.get('usuarios').find({ email, password }).value();

        console.log('Usuário encontrado:', user);

        if (!user) {
            console.log('Credenciais inválidas');
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        // Gere um novo token de acesso
        const newToken = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });

        // Atualize o accessToken do usuário no arquivo usuarios.json
        db.get('usuarios')
            .find({ email, password })
            .assign({ accessToken: newToken })
            .write();

        // Log para verificar o novo token gerado
        console.log('Novo accessToken gerado:', newToken);

        // Retorne o token como resposta
        res.status(200).json({ token: newToken });
    } else {
        // Passe a solicitação para o próximo middleware
        next();
    }
};