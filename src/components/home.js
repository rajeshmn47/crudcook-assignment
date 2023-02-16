import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import WorkCategories from "./categories";
import Footer from "./footer";
import Plans from "./plans";
import Proffessionals from "./proffessionals";

const Container = styled.div``;

const Main = styled.div`
  background-image: url("./mainimage.png");
  width: 100%;
  height: 100vh;
  background-size: cover;
`;

const IconsImg = styled.div`
  background-image: url("./iconslinked.png");
  width: 100%;
  height: 500px;
  background-size: cover;
`;

const Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 28px;

  /* identical to box height */
  margin: 60px 0;
  text-align: center;
  letter-spacing: -0.025em;
  margin-top: 100px;
  color: #000000;
`;

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

const Navbar = styled(Grid)`
  padding: 20px 30px;
`;

const GetstBtn = styled.button`
  background: linear-gradient(
    91.57deg,
    #84d6a6 5.31%,
    #4eb7a8 54.78%,
    #2da4aa 94.92%
  );
  border-radius: 15px;
  color: #ffffff;
  border: none;
  outline: none;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14.9102px;

  /* identical to box height, or 37px */
  text-align: center;
  letter-spacing: -0.025em;

  color: #ffffff;
  float: right;
`;

const Sync = styled.div`
  width: 500px;
  background: linear-gradient(90deg, #89cca3 0%, #4eb6a7 55%, #2ba4aa 100%);

  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  padding: 20px 20px;
  margin-top: 350px;
`;

const SyncTitle = styled.h3`
  font-size: 90px;
  color: #ffffff;
`;

const SyncSub = styled.h6`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  width: 100px;
  /* or 56px */
  letter-spacing: -0.025em;
  text-align: left;
  color: #000000;
`;
function Home() {
  return (
    <Container>
      <Main>
        <Navbar container justifyContent="space-between">
          <Grid item md={2} lg={2}>
            Why Synccos
          </Grid>

          <Grid item md={2} lg={2}>
            contact
          </Grid>
          <Grid item md={8} lg={8} style={{ float: "right" }}>
            <GetstBtn>get started</GetstBtn>
          </Grid>
        </Navbar>
        <Sync>
          <Grid container>
            <Grid item md={4} lg={4}>
              <SyncSub>Where company operating systems</SyncSub>
            </Grid>
            <Grid item md={8} lg={8}>
              <SyncTitle>SYNC</SyncTitle>
            </Grid>
          </Grid>
        </Sync>
      </Main>
      <IconsImg></IconsImg>
      <Title>Business Management Made Easy</Title>
      <WorkContainer>
        <Work>
          <WorkImage src="./design.png" alt="work" />
          <WorkCategories />
        </Work>
      </WorkContainer>
      <Proffessionals />
      <Plans />
      <Footer />
    </Container>
  );
}

export default Home;
