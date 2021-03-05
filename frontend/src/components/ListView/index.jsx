import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

import axios from '../../utils/api';
import Card from '../Card';
import Table from '../Table';

export default function index({
  AddButton, refetchCount, columns, endpoint, title,
}) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(endpoint);
      setRows(response.data.data);
      setLoading(false);
    } catch (e) {
      toast.error('Falha na requisição...');
    }
  };

  useEffect(() => {
    fetchData();
  }, [refetchCount]);

  return (
    <Container className="mt-5">
      <Card title={title}>
        <AddButton />

        <div className="mt-4">
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
              // eslint-disable-next-line react/jsx-indent
              <Table columns={columns} rows={rows} />
              // eslint-disable-next-line indent
            )}
        </div>
      </Card>
    </Container>
  );
}
