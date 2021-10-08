import styled from "styled-components";
import axios from "axios";
import React from "react";
import { Card } from "antd";
import { Button } from "antd";

import ReactLoading from "react-loading";

const MainDiv = styled.div`
  min-height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  margin-bottom: 1vh;
`;
const LoadingDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputsSearch = styled.div`
  & > input {
    width: 10vw;
    margin: 0;
  }
  & > select {
    font-size: 2vw;
  }
  margin-top: 2vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 10vh;
`;

const Label = styled.p`
  align-self: center;
  font-size: 1.1vw;
  margin-right: 0.5vw;
  margin-bottom: 0;
  margin-left: 0.5vw;
`;

const JobList = styled.div`
  & > div {
    width: 33%;
    margin-right: 0.2%;
    margin-top: 1vh;
    @media (max-width: 600px) {
      width: 50%;
      margin-right: 0;
    }
    @media (max-width: 400px) {
      width: 100%;
      margin-right: 0;
    }
  }
  width: 90%;
  flex-wrap: wrap;
  display: flex;
`;
const JobContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const JobItem = styled.div``;

const JobPrice = styled.p`
  text-align: right;
`;
const PaymentMethods = styled.p`
  font-size: 1.5vw;
`;

export class Find extends React.Component {
  state = {
    minValue: "",
    maxValue: "",
    TitleDescription: "",
    order: "",
    list: [],
    done: false,
  };
  onChangeMin = (event) => {
    this.setState({ minValue: event.target.value });
  };
  onChangeMax = (event) => {
    this.setState({ maxValue: event.target.value });
  };
  onChangeTitleDescription = (event) => {
    this.setState({ TitleDescription: event.target.value });
  };
  onChangeOrder = (event) => {
    this.setState({ order: event.target.value });
  };
  getAllLists = async () => {
    let response;
    try {
      response = await axios.get("https://labeninjas.herokuapp.com/jobs", {
        headers: { authorization: "c031e0dd-6176-4cbf-9978-49c392be9b8c" },
      });
    } catch (error) {}
    response = response.data.jobs;
    let responseDate = response.map((item) => {
      let myDate = Date.parse(`${item.dueDate}`);
      return {
        ...item,
        dueDate: myDate,
        showDetails: false,
      };
    });

    this.setState({ list: responseDate });
  };
  updateJob = async (item) => {
    this.props.cartCallBack(item);
    const body = {
      taken: !item.taken,
    };
    try {
      axios.post(`https://labeninjas.herokuapp.com/jobs/${item.id}`, body, {
        headers: { authorization: "c031e0dd-6176-4cbf-9978-49c392be9b8c" },
      });
    } catch (error) {}
    this.getAllLists();
  };

  deleteJob = (item) => {
    this.props.deleter(item);
    this.updateJob(item);
  };

  showDetails = (id) => {
    const newList = this.state.list.map((item) => {
      if (item.id === id)
        return {
          ...item,

          showDetails: !item.showDetails,
        };
      else {
        return {
          ...item,
        };
      }
    });
    this.setState({ list: [...newList] });
  };

  componentDidMount() {
    this.getAllLists().then(() => {
      this.setState({ done: true });
    });
  }
  render() {
    const filteredItems = this.state.list.filter((item) => {
      if (
        (item.price >= this.state.minValue || this.state.minValue === "") &&
        (item.price <= this.state.maxValue || this.state.maxValue === "")
      ) {
        if (
          item.title
            .toLowerCase()
            .includes(this.state.TitleDescription.toLowerCase()) ||
          item.description.includes(this.state.TitleDescription)
        ) {
          return true;
        }
      } else {
        return false;
      }
    });
    if (this.state.order === "Valor crescente") {
      filteredItems.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (this.state.order === "Valor decrescente") {
      filteredItems.sort((a, b) => (a.price < b.price ? 1 : -1));
    } else if (this.state.order === "Título") {
      filteredItems.sort(function (a, b) {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    } else if (this.state.order === "Prazo") {
      filteredItems.sort((a, b) =>
        Number(a.dueDate) < Number(b.dueDate) ? 1 : -1
      );
    }

    const itemsList = filteredItems.map((item) => {
      let stringPayments = "";
      for (const method of item.paymentMethods) {
        stringPayments += `${method} `;
      }
      let yourDate = new Date(item.dueDate);
      let test = yourDate.toISOString().split("T")[0];

      return (
        <Card.Grid className="cardItem" key={item.id}>
          <h5>{item.title}</h5>
          {item.description.length < 20 || item.showDetails ? (
            <p>{item.description}</p>
          ) : (
            <p>{item.description.slice(0, 20)}...</p>
          )}
          <p>{test}</p>
          {item.showDetails ? (
            <PaymentMethods>{stringPayments}</PaymentMethods>
          ) : (
            ""
          )}
          <JobPrice>{item.price}R$</JobPrice>
          {
            // item.taken ?
            // <Button onClick={()=>this.deleteJob(item)}>Descontratar</Button>:
            <Button onClick={() => this.updateJob(item)}>Contratar</Button>
          }
          {item.showDetails ? (
            <Button onClick={() => this.showDetails(item.id)}>Cancelar</Button>
          ) : (
            <Button onClick={() => this.showDetails(item.id)}>Veja mais</Button>
          )}
        </Card.Grid>
      );
    });
    return (
      <MainDiv>
        {!this.state.done ? (
          <LoadingDiv>
            <ReactLoading
              type={"bars"}
              color={"#2C7CC7"}
              height={100}
              width={100}
            />
          </LoadingDiv>
        ) : (
          <MainDiv>
            <InputsSearch>
              <Label>Valor Mínimo</Label>
              <input value={this.state.minValue} onChange={this.onChangeMin} />
              <Label>Valor Máximo</Label>
              <input value={this.state.miaxValue} onChange={this.onChangeMax} />
              <Label>Busca por Título e Descrição</Label>
              <input
                value={this.state.TitleDescription}
                onChange={this.onChangeTitleDescription}
              />
              <select onChange={this.onChangeOrder}>
                <option>Sem ordem</option>
                <option>Valor decrescente</option>
                <option>Valor crescente</option>
                <option>Título</option>
                <option>Prazo</option>
              </select>
            </InputsSearch>
            <JobContainer>
              <JobList>{itemsList}</JobList>
            </JobContainer>
          </MainDiv>
        )}
      </MainDiv>
    );
  }
}
