import styled from "@emotion/styled";
import WorkCategories from "./categories";
import Plans from "./plans";
import Proffessionals from "./proffessionals";

const Container = styled.div`
  margin-top: 90px;
`;

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

const FooterImage = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
  margin-bottom: 60px;
`;
function Footer() {
  return (
    <Container>
      <FooterImage src="./footerimage.png" alt="" />
    </Container>
  );
}

export default Footer;
