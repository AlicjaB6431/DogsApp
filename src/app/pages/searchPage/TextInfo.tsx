import styled from 'styled-components';

export default function TextInfo() {
  return (
    <>
      <InfoText>
        Ten pies to wierny i przyjacielski czworonóg, który świetnie czuje się w roli rodzinnego
        towarzysza. Dobrze dogaduje się z dziećmi, uwielbia pieszczoty i wspólne zabawy. Jest łatwy
        w prowadzeniu, choć bywa uparty. Sprawdzi się zarówno w małym mieszkaniu jak i w domu z
        ogrodem.
      </InfoText>

      <InfoText>
        Wysokość w kłębie 30–35 cm, masa ciała 22–25 kg. Sierść krótka, delikatna, lśniąca,
        umaszczenie płowe, pręgowane lub łaciate. Charakter czujny, śmiały, oddany, odważny,
        łagodny, czasem uparty. W zależności od dnia pokazuje różne oblicza swojej natury.
      </InfoText>
    </>
  );
}

const InfoText = styled.p`
  font-size: ${(props) => props.theme.textSize.xSmall};
  line-height: 1.5;
  width: 90%;
`;
