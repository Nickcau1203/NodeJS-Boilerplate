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

export default userRoutes;