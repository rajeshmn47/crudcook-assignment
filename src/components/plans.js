import { Grid } from "@mui/material";
import styled from "@emotion/styled";

const WorkContainer = styled.div`
  background-image: url("./backgroundicons.png");
  width: 100%;
  background-size: cover;
`;

const Work = styled.div`
  margin: 20px 20px;
  background: linear-gradient(
    68.31deg,
    #84d6a6 18.14%,
    #4eb7a8 64.56%,
    #2da4aa 102.21%
  );
  border-radius: 15px;
  padding: 60px 30px;
`;

const WorkImage = styled.img`
  width: 800px;
  display: block;
  margin: 0 auto;
  margin-bottom: 60px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  position: relative;
`;
const Icon = styled.img`
  width: 30px;
  margin-bottom: 15px;
`;
const Data = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 23.39px rgba(0, 0, 0, 0.38);
  border-radius: 5px;
  width: 300px;
  padding: 10px 25px;
  min-height: 130px;
  height: 700px;
`;

const Para = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 275;
  font-size: 10.8748px;
  line-height: 127%;

  /* or 14px */
  text-align: center;
  letter-spacing: -0.025em;

  color: #000000;
`;
const Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 28px;

  /* identical to box height */
  margin: 50px 0;
  text-align: center;
  letter-spacing: -0.025em;
  margin-top: 100px;
  color: #000000;
`;

const SubTitle = styled.h6`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 10.4863px;
  line-height: 19px;
  margin: 2px 0;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.025em;

  color: #000000;
`;

const TopIcon = styled.img`
  position: absolute;
  display: block;
  top: -20px;
  left: 45%;
  width: 40px;
  z-index: 1000000;
`;

const Price = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  font-size: 37.4224px;
  line-height: 47px;
  text-align: center;
  letter-spacing: -0.035em;

  color: #3e3e3e;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 20px;
`;

const ItemDetail = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  /* identical to box height */
  letter-spacing: -0.025em;

  color: #3e3e3e;
`;

const Rightmark = styled.img`
  width: 20px;
  margin-right: 20px;
`;

const SmallDetail = styled.h3``;

const GetStartedBtn = styled.button`
  display: block;
  margin: 10px auto;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 43.2054px;
  margin-top: 70px;
  padding: 10px 45px;
  /* identical to box height */
  display: flex;
  align-items: center;

  text-align: center;
  letter-spacing: -0.025em;

  color: #ffffff;
  background: #7d4888;
  border: 6px solid #838383;
  border-radius: 10px;
`;

const Sdetail=styled.p`
font-family: 'Poppins';
font-style: italic;
font-weight: 500;
font-size: 11.5769px;
line-height: 32px;
text-align: center;
letter-spacing: -0.025em;

color: #000000;


`
export default function Plans() {
  return (
    <>
      <Title>Plans And Pricing</Title>
      <WorkContainer>
        <Work>
          <Grid container>
            <Grid item lg={4} md={4}>
              <Card>
                <TopIcon src="./topone.png" alt="" />

                <Data>
                  <Title>SaaS</Title>
                  <Price>$1,399</Price>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>Call Log.</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>Project Management.</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>Client Overview.</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>Invoicing.</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>Propose.</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>Payments.</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>Appointments.</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>Chat.</ItemDetail>
                  </Item>
                </Data>
              </Card>
            </Grid>
            <Grid item lg={4} md={4}>
              <Card>
                <TopIcon src="./toptwo.png" alt="" />

                <Data>
                  <Title>SaaS</Title>
                  <Price>$1,399</Price>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>All SaaS Features</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>All VoIP Features</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>All SaaS Features</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>All VoIP Features</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>All SaaS Features</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>All VoIP Features</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>All SaaS Features</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>All VoIP Features</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>All SaaS Features</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>All VoIP Features</ItemDetail>
                  </Item>
                </Data>
              </Card>
            </Grid>{" "}
            <Grid item lg={4} md={4}>
              <Card>
                <TopIcon src="./topone.png" alt="" />
                <TopIcon src="./toptwo.png" alt="" />

                <Data>
                  <Title>SaaS</Title>
                  <Price>$1,399</Price>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>All SaaS Features</ItemDetail>
                  </Item>
                  <Item>
                    <Rightmark src="./rightmark.svg" alt="" />
                    <ItemDetail>All VoIP Features</ItemDetail>
                  </Item>
                </Data>
              </Card>
            </Grid>
          </Grid>
          <GetStartedBtn>Get Started</GetStartedBtn>
          <Sdetail>
          Not Sure? Get in touch with a specialist 
          </Sdetail>
        </Work>
      </WorkContainer>
    </>
  );
}
