import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useForm} from 'react-bootstrap/Form';
import { Alert } from 'bootstrap';
import { useVerificalogin } from '../hooks/useApi';
const Login = () => {

const {verificarLogin} = useVerificalogin();
const {register, handleSubmit, formStatr:{errors}} = useForm();

const onSubmit = (data) => {
    console.log("Dados:",data);

    const respostaVerificacao = verificarLogin(data);

    if(respostaVerificacao === "Login efecutado com sucesso"){
      alert(respostaVerificacao);
      navigate("/home");
    }
    else{
      setAlertClass("md-5 mt-2");
      setAlertMessage(respostaVerificacao);
    }
}

const onError = (errors) => {
    console.log("Erros:",errors);

}

const [alertClass,setAlertClass] = useState("md-5 d-none");
const [alertMessage,setAlertMessage] = useState("");
//----------------------------------------
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfir] = useState("");
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");

    const validarEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };
    const Logar =()=>{
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const usuarioExistente = users.find((user) => user.email === email);

    if (senha === "" || confirmarSenha === "" || email === "" || nome === ""){
        alert ("Os campos não podem ser vazios")
        setConfir("");
        setEmail("");
        setNome("");
        setSenha("");
        return;
    } ;
    if(senha.length < 8){
        alert ("A senha deve ter no mínimo 8 caracteres")
        setConfir("");
        setEmail("");
        setNome("");
        setSenha("");
        return;
    } ;
    if (senha != confirmarSenha){
        alert ("As senhas não são iguais")
        setConfir("");
        setEmail("");
        setNome("");
        setSenha("");
        return;
    } ;

    if (usuarioExistente) {
        alert("Este email já está cadastrado!");
        setConfir("");
        setEmail("");
        setNome("");
        setSenha("");
        return;
    };

    if(!validarEmail(email)) {
        alert("Formato de email inválido!");
        setConfir("");
        setEmail("");
        setNome("");
        setSenha("");
        return;
    };

    const novoUsuario = {
        nome: nome,
        email: email,
        senha: senha,
    };

    users.push(novoUsuario);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Cadastro realizado com sucesso!");

    setConfir("");
    setEmail("");
    setNome("");
    setSenha("");

};
    return (
      <Form style={{ width: "75%", margin: "auto", textAling: "center" }} onSubmit={handleSubmit(onSubmit, onError)}
      >
  
   <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Digite o email"  {...register("email", {required:"O email é obrigatorio",
       pattern:{
        value:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i,
        message:"Email inválido"
       } ,
       validate : (value) => value.includes("@") || "Email inválido"
        })}
        value={email} 
        onChange={(e) => setEmail(e.target.value) }/>
      {errors.email && <span className="text-danger">{errors.email.message}</span>}

      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Senha"  {...register("senha",{required:"A senha é obrigatoria",})}
        value={senha} 
        onChange={(e) => setSenha(e.target.value)} />
      </Form.Group>
        {errors.senha && <p className="error">{errors.senha.message}</p>}

      <Form.Group className="mb-3" controlId="confirmarSenha">
        <Form.Label>Confirmar Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChange={(e) => setConfir(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleCadastro}>
        Logar
      </Button>

      <Alert 
      className={alertClass} variant="danger" 
      style={{ position: "absolute", top: "10px", right: "10px" }}
   />
    </Form>
    );
}



export default Login;