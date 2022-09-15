import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({ transactions }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {transactions.map(({ id, price, amount, date }) => (
          <Tr key={id}>
            <Td>{id}</Td>
            <Td>{price}</Td>
            <Td>{amount}</Td>
            <Td>{date}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
// "id": 6,
//   "price": 3190.00,
//   "amount": 0.24843000,
//   "date": "2022-02-01T11:14:11.105Z"
