import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import calculadoraIcon from '../assets/codigo-binario.png'; // Ajuste o caminho conforme necessário

export default function Calculator() {
  const [display, setDisplay] = useState("0"); // String para exibir a expressão
  const [expression, setExpression] = useState(""); // Expressão para cálculo

  // Função para lidar com a entrada de números e operadores
  function inputHandler(e) {
    const value = e.target.value;

    // Não permite múltiplos zeros iniciais
    if (display === "0" && value === "0") return;
    // Não permite múltiplos pontos decimais
    if (value === "." && display.includes(".")) return;

    // Atualiza a expressão e a exibição
    setDisplay((prev) => (prev === "0" ? value : prev + value));
    setExpression((prev) => (prev === "0" ? value : prev + value));
  }

  // Função para limpar o display e a expressão
  function clear() {
    setDisplay("0");
    setExpression("");
  }

  // Função para alterar o sinal do último número
  function changeSign() {
    if (display !== "0") {
      const newDisplay = display.startsWith("-")
        ? display.slice(1)
        : "-" + display;
      setDisplay(newDisplay);
      setExpression(newDisplay);
    }
  }

  // Função para calcular a expressão com a ordem correta de operações
  function calculate() {
    try {
      // Avalia a expressão usando a função `eval`
      const result = eval(expression);
      setDisplay(result.toString());
      setExpression(result.toString()); // Atualiza a expressão com o resultado
    } catch (error) {
      setDisplay("Error"); // Caso ocorra algum erro na expressão
    }
  }

  // Função para converter entre binário e decimal
  function convertBinaryDecimal() {
    // Verifica se o número é binário (0s e 1s apenas)
    if (/^[01]+$/.test(display)) {
      // Se for binário, converte para decimal
      const decimal = parseInt(display, 2);
      setDisplay(decimal.toString());
      setExpression(decimal.toString());
    } else if (/^\d+$/.test(display)) {
      // Se for decimal, converte para binário
      const binary = parseInt(display, 10).toString(2);
      setDisplay(binary);
      setExpression(binary);
    } else {
      setDisplay("Error");
    }
  }

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12} />
          <h1 className="result">{display}</h1>
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={() => inputHandler({ target: { value: "%" } })}>
            %
          </button>
          <button className="orange" onClick={() => inputHandler({ target: { value: "/" } })}>
            /
          </button>
          <button className="gray" onClick={() => inputHandler({ target: { value: "7" } })}>
            7
          </button>
          <button className="gray" onClick={() => inputHandler({ target: { value: "8" } })}>
            8
          </button>
          <button className="gray" onClick={() => inputHandler({ target: { value: "9" } })}>
            9
          </button>
          <button className="orange" onClick={() => inputHandler({ target: { value: "*" } })}>
            X
          </button>
          <button className="gray" onClick={() => inputHandler({ target: { value: "4" } })}>
            4
          </button>
          <button className="gray" onClick={() => inputHandler({ target: { value: "5" } })}>
            5
          </button>
          <button className="gray" onClick={() => inputHandler({ target: { value: "6" } })}>
            6
          </button>
          <button className="orange" onClick={() => inputHandler({ target: { value: "-" } })}>
            -
          </button>
          <button className="gray" onClick={() => inputHandler({ target: { value: "1" } })}>
            1
          </button>
          <button className="gray" onClick={() => inputHandler({ target: { value: "2" } })}>
            2
          </button>
          <button className="gray" onClick={() => inputHandler({ target: { value: "3" } })}>
            3
          </button>
          <button className="orange" onClick={() => inputHandler({ target: { value: "+" } })}>
            +
          </button>
          <button className="gray" onClick={() => inputHandler({ target: { value: "0" } })}>
            0
          </button>
          <button className="gray" onClick={() => inputHandler({ target: { value: "." } })}>
            .
          </button>
          {/* Botão para conversão binário/decimal */}
          <button
            onClick={convertBinaryDecimal}
            style={{
              backgroundColor: "#505050",
              color: "white",
              border: "none",
              borderRadius: "2em",
              marginTop: "0.5em"
            }}
          >
            <img src={calculadoraIcon} alt="Scientific Mode" style={{ width: "1.5em", height: "1.5em" }} />
          </button>
          <button className="orange" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
