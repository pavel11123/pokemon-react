import { pokemonData } from "./pokemon";
import { Table as TableAnt, Typography, Image } from "antd";

const { Text } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Number",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Class",
    dataIndex: "classification",
    key: "classification",
  },
  {
    title: "MaxHP",
    dataIndex: "maxHP",
    key: "maxHP",
    sorter: (a, b) => a.maxHP - b.maxHP,
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (src) => <Image src={src} width={150} />,
  },
];

const dataPokemon = pokemonData.map((pokemon) => ({
  name: pokemon.name,
  number: pokemon.number,
  classification: pokemon.classification,
  maxHP: pokemon.maxHP,
  image: pokemon.image,
  key: pokemon.id,
}));

console.log(dataPokemon);

const Table = () => {
  return <TableAnt dataSource={dataPokemon} columns={columns}></TableAnt>;
};
export default Table;
