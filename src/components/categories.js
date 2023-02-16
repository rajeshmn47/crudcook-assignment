import { Grid } from "@mui/material";
import styled from "@emotion/styled";

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
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
  padding: 10px 10px;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font-weight: 600;
  font-size: 13.4288px;
  line-height: 13px;

  text-align: center;
  letter-spacing: -0.025em;

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
export default function WorkCategories() {
  return (
    <Grid container>
      <Grid item lg={4} md={4}>
        <Card>
          <Icon src="./Framephone.svg" alt="" />
          <Data>
            <Title>Call Log</Title>
            <SubTitle>No more missed opportunities!</SubTitle>
            <Para>
              Keep track of every incoming and outgoing phone call with an
              automated call log that links directly to your phone system. View
              and return missed calls so no leads are lost, and take notes, add
              reminders, or create tasks for every phone call, so nothing gets
              overlooked.
            </Para>
          </Data>
        </Card>
      </Grid>
      <Grid item lg={4} md={4}>
        <Card>
          <Icon src="./feed.svg" alt="" />
          <Data></Data>
        </Card>
      </Grid>
      <Grid item lg={4} md={4}>
        <Card>
          <Icon src="./database.svg" alt="" />
          <Data></Data>
        </Card>
      </Grid>
      <Grid item lg={4} md={4}>
        <Card>
          <Icon src="./Framecalender.svg" alt="" />
          <Data></Data>
        </Card>
      </Grid>
      <Grid item lg={4} md={4}>
        <Card>
          <Icon src="./Framepeople.svg" alt="" />
          <Data></Data>
        </Card>
      </Grid>
      <Grid item lg={4} md={4}>
        <Card>
          <Icon src="./Framebuilding.svg" alt="" />
          <Data>
            <Title>Call Log</Title>
            <SubTitle>No more missed opportunities!</SubTitle>
            <Para>
              Keep track of every incoming and outgoing phone call with an
              automated call log that links directly to your phone system. View
              and return missed calls so no leads are lost, and take notes, add
              reminders, or create tasks for every phone call, so nothing gets
              overlooked.
            </Para>
          </Data>
        </Card>
      </Grid>
      <Grid item lg={4} md={4}>
        <Card>
          <Icon src="./Frametelephone.svg" alt="" />
          <Data></Data>
        </Card>
      </Grid>
      <Grid item lg={4} md={4}>
        <Card>
          <Icon src="./Frameclient.svg" alt="" />
          <Data>
            <Title>Call Log</Title>
            <SubTitle>No more missed opportunities!</SubTitle>
            <Para>
              Keep track of every incoming and outgoing phone call with an
              automated call log that links directly to your phone system. View
              and return missed calls so no leads are lost, and take notes, add
              reminders, or create tasks for every phone call, so nothing gets
              overlooked.
            </Para>
          </Data>
        </Card>
      </Grid>
      <Grid item lg={4} md={4}>
        <Card>
          <Icon src="./FrameTV.svg" alt="" />
          <Data></Data>
        </Card>
      </Grid>
    </Grid>
  );
}
