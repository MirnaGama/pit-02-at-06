/* eslint-disable react/jsx-indent */

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Card from '../../components/Card';
import api from '../../utils/api';

export default function login({ history }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.get('/api/user/auth', form);
      localStorage.setItem('token', response.data.token);

      // redirecionamento
      history.push('/todo');
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <Container className="mt-5">
      <Card title="Login">
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
            />
          </Form.Group>

          <Button type="submit">Login</Button>
        </Form>
      </Card>
    </Container>
  );
}
