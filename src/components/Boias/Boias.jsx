import React from 'react';
import styled from 'styled-components';
import { FaLifeRing } from 'react-icons/fa';
import Logo from "../../assets/Mapa-VilaVelha.png";

const BoiasWrapper = styled.div`
  position: relative;
  text-align: center;
`;

const MapaImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const BoiaIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  font-size: 24px;
  cursor: pointer;

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.div`
  visibility: hidden;
  width: 220px;
  background-color: #575151;
  color: #fff;
  text-align: left;
  border-radius: 6px;
  padding: 10px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -110px;
  opacity: 0;
  transition: opacity 0.3s;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #575151 transparent transparent transparent;
  }
`;

const ListItem = styled.li`
  list-style: ${({ isBeach }) => (isBeach ? 'none' : 'disc')};
  margin-left: ${({ isBeach }) => (isBeach ? '0' : '20px')};
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(56, 54, 54, 0.7);
  color: white;
  padding: 10px;
  border-radius: 6px;
  z-index: 2;
`;

const boiasData = [
  {
    left: '20%',
    bottom: '10%',
    title: 'Boia 1',
    info: [
      { text: 'Ponta da Fruta', isBeach: true },
      'Nível de Poluição: Moderado (120 ppm)',
      'Temperatura da Água: 22°C',
      'pH: 7.4 (Neutro)',
      'Salinidade: 35 ppt',
      'Presença de Bactérias Nocivas: Baixa (E. coli: 20 CFU/100ml)',
    ],
  },
  {
    left: 'Praia dos Recifes',
    bottom: '10%',
    left: '40%',
    title: 'Boia 2',
    info: [
      { text: 'Praia 2', isBeach: true },
      'Nível de Poluição: Alto (200 ppm)',
      'Temperatura da Água: 24°C',
      'pH: 7.8 (Ligeiramente Alcalino)',
      'Salinidade: 36 ppt',
      'Presença de Bactérias Nocivas: Moderada (E. coli: 50 CFU/100ml)',
    ],
  },
  {
    left: 'Jockey de Iraparica',
    left: '60%',
    bottom: '15%',
    title: 'Boia 3',
    info: [
      { text: 'Praia 3', isBeach: true },
      'Nível de Poluição: Baixo (80 ppm)',
      'Temperatura da Água: 21°C',
      'pH: 7.0 (Neutro)',
      'Salinidade: 34 ppt',
      'Presença de Bactérias Nocivas: Nenhuma Detectada',
    ],
  },
  {
    left: 'Praia de Itapuã',
    left: '80%',
    bottom: '8%',
    title: 'Boia 4',
    info: [
      { text: 'Ponta da Fruta', isBeach: true },
      'Nível de Poluição: Crítico (300 ppm)',
      'Temperatura da Água: 26°C',
      'pH: 6.8 (Ligeiramente Ácido)',
      'Salinidade: 37 ppt',
      'Presença de Bactérias Nocivas: Alta (E. coli: 100 CFU/100ml)',
    ],
  },
];

const Boias = () => {
  return (
    <BoiasWrapper>
      <div style={{ position: 'relative' }}>
        <MapaImage src={Logo} alt="Mapa de Vila Velha" />
        <TextOverlay>Passe o mouse nas boias <br /> e veja as informações</TextOverlay>
        {boiasData.map((boia, index) => (
          <BoiaIcon
            key={index}
            style={{ left: boia.left, bottom: boia.bottom }}
          >
            <FaLifeRing />
            <Tooltip className="tooltip">
              <strong>{boia.title}</strong>
              <ul>
                {boia.info.map((item, idx) => (
                  <ListItem key={idx} isBeach={item.isBeach}>
                    {item.text || item}
                  </ListItem>
                ))}
              </ul>
            </Tooltip>
          </BoiaIcon>
        ))}
      </div>
    </BoiasWrapper>
  );
}

export default Boias;
