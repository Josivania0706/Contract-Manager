import jsonServer from 'json-server';

const metasRouter = jsonServer.router('./mock/metas.json');
const db = metasRouter.db;

export default (req, res, next) => {

    if (req.method === 'GET' && req.path === '/metas') {

        const data = db.get('meses');
        // Verifique as credenciais do usuário
        console.log('valor recebido:', data);

        if (!data) {
            console.log('Não foi encontrado nada');
            return res.status(401).json({ message: 'Nãofoi possivel acessar' });
        }

        // Retorne resposta
        res.status(200).json({ data });
    }
    else if (req.method === 'PUT' && req.path === '/meses/alterar') {

        const mêsData = req.body;
        const id = mêsData.id;
        // Atualize o mês com base no ID
        db.get('meses')
            .find({ id: parseInt(id) })
            .assign(mêsData)
            .write();

        res.status(200).json({ message: 'Mês atualizado com sucesso' });
    }
    else if (req.method === 'POST' && req.path === '/meses/cadastrar') {

        const mesData = req.body;

        const nomeMesLowerCase = mesData.NomeMes.toLowerCase();

        const mêsExistente = db
            .get('meses')
            .find({ NomeMes: nomeMesLowerCase, ano: mesData.ano })
            .value();


        if (mêsExistente) {
            return res.status(400).json({ message: 'Não é possível cadastrar, já registrado' });
        }

        const novoId = Date.now();
        const novoMês = {
            id: novoId,
            NomeMes: mesData.NomeMes.toLowerCase(),
            ano: mesData.ano,
            valorTotal: mesData.valorTotal,
        };

        db.get('meses')
            .push(novoMês)
            .write();

        res.status(200).json({ message: 'Novo mês cadastrado com sucesso' });
    }
    else {
        next();
    }

};