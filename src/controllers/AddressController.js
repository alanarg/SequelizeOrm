const Address = require('../models/Address');
const User = require('../models/User');

module.exports= {
    async store(req,res){
        const {user_id} = req.params; 
        const {cep, rua, numero} = req.body;   
        //Verificando se o usuário existe
       
            const user = await User.findByPk(user_id);

        
        if(!user){
            return res.status(400).json({ error: 'Usuário não encontrado'});
        }

        const address = await Address.create({
            cep,
            rua,
            numero,
            user_id,
        });

        return res.json(address);
    },
    async index(req,res){
        const {user_id} = req.params;
        //Fazendo um join das tabelas, no sequelize é possível com o include
        User.findByPk(user_id, {
            include:{association:'addresses'}
        }).then(user=>{ res.json(user)});

        // return res.json(user);

    }
};