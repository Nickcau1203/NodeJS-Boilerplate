import { Router } from "express";
import UserRepository from "../models/users/UserRepository.js";

const userRoutes = Router();

const userRepository = new UserRepository();

userRoutes.get("/", (req, res) => {
    const usuarios = userRepository.getAllusers();

    return res.status(200).json({
    message:
    usuarios.length == 0
    ?"Não há usuários cadastrados"
    :`Total de usuários: ${usuarios.length}`,
   usuarios,
   });
});

userRoutes.post("/", (req, res) => {
    const { name, email, password } = req.body;

    const usuario =userRepository.addUser(name, email, password);

    return res.status(201).json({
        message: "Usuário cadastrado com sucesso!",
        usuario,
    });
});

userRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    const user = userRepository.getUserById(id);

    if (!user) {
        return res.status(404).json({
            message: `Usuário com id ${id} não encontrado!`,
        });
    }

    return res.status(200).json({
        message: `Usuário com id ${id} encontrado com sucesso!`,
        user,
    });
})
userRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body; 
    const user = userRepository.updateUser(id, name, email, password);  

    if (!user) {
        return res.status(404).json({
            message: `Usuário com id ${id} não encontrado!`,
        });
    }

    return res.status(200).json({
        message: `Usuário com id ${id} atualizado com sucesso!`,
        user,
    });
});

userRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;

    const user = userRepository.deleteUser(id);

    if (!user) {
        return res.status(404).json({
            message: `Usuário com id ${id} não encontrado!`,
        });
    }

    return res.status(200).json({
        message: `Usuário com id ${id} deletada com sucesso!`,
        user,
    });
});


export default userRoutes;