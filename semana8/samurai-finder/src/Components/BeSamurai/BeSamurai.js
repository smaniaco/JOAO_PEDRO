import styled from "styled-components";
import axios from "axios";
import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { Spin } from "antd";
const MainDiv = styled.div`
  height: 90%;
`;

const PageGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
const CheckBoxes = styled.div`
  & > p {
    margin: 0;
  }
  & > input {
    margin: 0 1px;
  }
  margin: 1vh 0;
  font-size: 1.5vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const FormDiv = styled.div`
  & > select {
    font-size: 1.4vw;
  }
  & > input {
    height: 3vw;
  }
  & > p {
    margin-bottom: 1vh !important;
  }
  & > button {
    margin-top: 5px;
    background-color: #379cfa;
    border-radius: 15px;
  }
  border-radius: 15px;

  box-sizing: border-box;
  padding: 1vw;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  grid-row: 2;
  grid-column: 3;
  width: 100%;
`;

export class BeSamurai extends React.Component {
  state = {
    title: "",
    description: "",
    price: "",
    payment: {
      pix: false,
      paypal: false,
      boleto: false,
      debito: false,
      credito: false,
    },
    paymentVal: [],
    date: "",
    redirect: false,
    animate: false,
  };

  onChangeTitle(event) {
    this.setState({ title: event.target.value });
  }
  onChangeDescription(event) {
    this.setState({ description: event.target.value });
  }
  onChangePrice(event) {
    this.setState({ price: event.target.value });
  }
  onChangePayment(name) {
    let object = { ...this.state.payment };
    switch (name) {
      case "pix":
        object.pix = !object.pix;
        break;
      case "paypal":
        object.paypal = !object.paypal;
        break;
      case "credito":
        object.credito = !object.credito;
        break;
      case "debito":
        object.debito = !object.debito;
        break;
      case "boleto":
        object.boleto = !object.boleto;
        break;
    }

    this.setState({ payment: { ...object } });
  }

  onChangeDate(event) {
    if (event.target !== undefined) {
      this.setState({ date: event.target.value });
    }
  }
  createjob = async (event) => {
    let payment = [];
    if (this.state.payment.pix) {
      payment.push("Pix");
    }
    if (this.state.payment.paypal) {
      payment.push("PayPal");
    }
    if (this.state.payment.credito) {
      payment.push("Credito");
    }
    if (this.state.payment.debito) {
      payment.push("debito");
    }
    if (this.state.payment.boleto) {
      payment.push("boleto");
    }

    const body = {
      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price),
      paymentMethods: [...payment],
      dueDate: this.state.date,
    };
    console.log(body);
    try {
      this.setState({ animate: true });
      const response = await axios.post(
        "https://labeninjas.herokuapp.com/jobs",
        body,
        { headers: { authorization: "c031e0dd-6176-4cbf-9978-49c392be9b8c" } }
      );
      console.log(response);
      if (response.status === 200) {
        alert("Job criado com sucesso!");
      }
    } catch (error) {
      console.log(error);
      alert(
        "Parece que tivemos algum problema. Verifique todos os campos, veja se sua o Título e Descrição não são pequenos e se a data é maior do que a data atual"
      );
    }
    this.setState({
      title: "",
      description: "",
      price: "",
      payment: "",
      date: "",
    });

    this.setState({ animate: false });
  };

  render() {
    return (
      <MainDiv>
        <PageGrid id="besamurai">
          <FormDiv>
            <p>Título</p>
            <input
              value={this.state.title}
              onChange={this.onChangeTitle.bind(this)}
            />
            <p>Descrição</p>
            <input
              value={this.state.description}
              onChange={this.onChangeDescription.bind(this)}
            />
            <p>Preço</p>
            <input
              value={this.state.price}
              onChange={this.onChangePrice.bind(this)}
              type="number"
            />
            <CheckBoxes>
              <p>Pix</p>
              <input
                id="pix"
                onChange={() => this.onChangePayment("pix")}
                type="checkbox"
              />
              <p>Crédito</p>
              <input
                id="credito"
                onChange={() => this.onChangePayment("credito")}
                type="checkbox"
              />
              <p>Débito</p>
              <input
                id="debito"
                onChange={() => this.onChangePayment("debito")}
                type="checkbox"
              />
              <p>boleto</p>
              <input
                id="boleto"
                onChange={() => this.onChangePayment("boleto")}
                type="checkbox"
              />
              <p>PayPal</p>
              <input
                id="paypal"
                onChange={() => this.onChangePayment("paypal")}
                type="checkbox"
              />
            </CheckBoxes>
            <input
              type="date"
              value={this.state.date}
              onChange={this.onChangeDate.bind(this)}
              type="date"
            />
            <Button type="primary" onClick={this.createjob}>
              Enviar
            </Button>
            e
          </FormDiv>
        </PageGrid>
      </MainDiv>
    );
  }
}
