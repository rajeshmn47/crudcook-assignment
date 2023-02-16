import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Rating from "@mui/material/Rating";

const Container = styled.div`
  padding: 10px 100px;
`;

const Card = styled.div`
  width: 150px;
  box-shadow: 0px 0px 23.39px rgba(0, 0, 0, 0.38);
  height: 200px;
  background: #ffffff;
  border-radius: 5px;
  padding: 20px 30px;
  position: relative;
`;
const Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;
  text-align: center;
  letter-spacing: -0.025em;
  margin-bottom: 50px;
  color: #000000;
  margin-top: 30px;
`;

const Para = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.025em;
  margin-top: 15px;
  color: #000000;
`;

const TopIcon = styled.img`
  position: absolute;
  display: block;
  top: -20px;
  left: 40%;
  width: 40px;
  z-index: 1000000;
`;
export default function Proffessionals() {
  return (
    <Container>
      <Title>What The Professionals Says</Title>
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={4} style={{ display: "flex", justifyContent: "center" }}>
          <Card>
            <TopIcon src="./circle.png" alt="" />
            <Rating
              name="simple-controlled"
              value={5}
              style={{ marginTop: "15px" }}
            />
            <Para>
              Synccos helped me utilize my service company from the beginning
              till the end, from onboarding new clients until invoicing them.
            </Para>
          </Card>
        </Grid>
        <Grid item md={4} style={{ display: "flex", justifyContent: "center" }}>
          <Card>
            <TopIcon src="./circle.png" alt="" />
            <Rating
              name="simple-controlled"
              value={5}
              style={{ marginTop: "15px" }}
            />
            <Para>
              Integrating with 3rd software was very easy, the customer service
              from Synccos was a breeze.
            </Para>
          </Card>
        </Grid>
        <Grid item md={4} style={{ display: "flex", justifyContent: "center" }}>
          <Card>
            <TopIcon src="./circle.png" alt="" />
            <Rating
              name="simple-controlled"
              value={5}
              style={{ marginTop: "15px" }}
            />
            <Para>
              The Synccos VoIP system helps me to never lose a potential client,
              keep track on any missed call.
            </Para>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
