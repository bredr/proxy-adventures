import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  background: white;
  margin: 0.5em;
  font-size: 1em;
`;

const Label = styled.label`
  font-size: 1em;
`;

const Div = styled.div`

`;

const Message = styled.p`
  font-size: 0.7em;
  width: 60vw;
  height: 1em;
  padding: 0.5em;
  margin-left: 20vh;
  margin-right: 20vh;
  background: #61dafb;
  border: none;
  border-radius: 5px;
`;



export class Hello extends React.Component<any, { message?: string, name?: string }> {

  constructor(props: any) {
    super(props);
    this.state = {
      message: undefined
    };
  }

  handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    this.setState({ name, message: undefined });
    const { data: message } = await axios.get<string>(`/api/hello/${name}`);
    this.setState({ message });
  }

  render() {
    const { message } = this.state;
    return (
      <Div>
        <Label>Name:
          <Input type="text" value={this.state.name} onChange={this.handleChange} />
        </Label>
        <Message>{message || "Waiting..."}</Message>
      </Div>);
  }

}