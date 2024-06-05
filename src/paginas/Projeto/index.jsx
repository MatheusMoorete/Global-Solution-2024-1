import TrasitionPages from "../../components/Transition/TrasitionPages";
import {
  PageContainer,
  StyledTitle,
  TitleContainer,
} from "../../components/StyledBasics/StyleBasics";

import MyFooter from "../../components/Footer/MyFooter";

import styled from "styled-components";
import ButttonScrollToTop from "../../components/ButttonScrollToTop/ButttonScrollToTop";

const MarcaTexto = styled.strong`
  background-color: #fdd275;
`;


const Tema1 = () => {
  const scrollThreshold = 100;
  return (
    <TrasitionPages>
      <ButttonScrollToTop scrollThreshold={scrollThreshold} />
      <PageContainer>
        <TitleContainer>
          <StyledTitle>
             <strong> A Solução: Oceano Vivo</strong>
          </StyledTitle>
        </TitleContainer>
        <p>Você sabia que a qualidade da água dos oceanos é uma preocupação crescente? A poluição, as mudanças climáticas e as atividades humanas estão afetando drasticamente a saúde dos nossos mares. A falta de monitoramento contínuo e eficaz da balneabilidade das águas costeiras impede a detecção rápida de poluentes, colocando em risco a saúde humana e os ecossistemas marinhos. Além disso, a ausência de dados precisos dificulta a implementação de políticas públicas eficazes e a conscientização da população.</p>
    <p>Assim, essa intempérie gera problemas de níveis ambiental, econômico e sociais:</p>
    <ul>
        <li><strong>Ambiental:</strong> Degradação dos habitats marinhos e perda de biodiversidade.</li>
        <li><strong>Econômico:</strong> Diminuição do turismo, pesca prejudicada e custos elevados para limpeza e remediação.</li>
        <li><strong>Social:</strong> Riscos à saúde pública, com banhistas expostos a águas contaminadas e comunidades costeiras impactadas economicamente.</li>
    </ul>
    <p>E quem sofre com esses problemas vai do turista e banhistas até aos órgãos reguladores ambientais:</p>
    <ul>
        <li>Governos e órgãos reguladores ambientais</li>
        <li>Empresas de turismo e lazer costeiro</li>
        <li>Pescadores e comunidades costeiras</li>
        <li>ONGs ambientais e pesquisadores</li>
        <li>Banhistas e turistas</li>
    </ul>
    <p>Estima-se que o mercado global de monitoramento ambiental marinho alcance USD 6,1 bilhões até 2027, com uma taxa de crescimento anual composta (CAGR) de 4,3% de 2020 a 2027. Dessa forma surge a Oceano Vivo que desenvolverá bóias marítimas com sensores de ultra precisão que monitoram a balneabilidade das águas costeiras em tempo real. Essas bóias serão instaladas em pontos estratégicos ao longo das zonas costeiras e estarão equipadas com sensores que medem níveis de poluição, temperatura da água, pH e presença de bactérias nocivas. Os dados coletados serão transmitidos para uma plataforma online onde o cliente poderá acessar todas as informações captadas pela sua bóia. Dessa forma, o monitoramento contínuo permite a detecção rápida de problemas, facilitando ações de mitigação e que consequentemente gera um ganho econômico e social pela proteção e permanência de atividades turísticas e pesqueiras.</p>
    <p>Nossa fonte de receita será por intermédio da venda ou aluguel das bóias marítimas e de serviços de implementação, que inclui manutenção das boias e análise de dados personalizados.</p>
    <p>Oceano Vivo se propõe a ser um marco na sustentabilidade dos oceanos, combinando inovação tecnológica com responsabilidade ambiental e social.</p>
      </PageContainer>
      <MyFooter />
    </TrasitionPages>
  );
};

export default Tema1;