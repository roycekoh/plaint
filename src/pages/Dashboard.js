import {
  StyledTitle,
  StyledSubTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
  StyledFormArea,
  colors,
  ExtraText,
} from "./../components/Styles";

//logo
import Logo from "./../assets/logo.png";

// auth & redux
import { connect } from "react-redux";
import { logoutUser } from "./../auth/actions/userActions";

// React router
import { useHistory } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Dashboard = ({ logoutUser, user }) => {
  const history = useHistory();
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Avatar image={Logo} />
      </div>
      <StyledFormArea bg={colors.dark2}>
          {/* eslint-disable-next-line react/prop-types */}
          <StyledTitle size={65}>Welcome, {user.name}</StyledTitle>
          {/* eslint-disable-next-line react/prop-types */}
        <ExtraText color={colors.light1}>{user.email}</ExtraText>
        <ExtraText color={colors.light1}>
            {/* eslint-disable-next-line react/prop-types */}
            {new Date(user.dateOfBirth).toLocaleDateString()}
        </ExtraText>
        <ButtonGroup>
          <StyledButton to="#" onClick={() => logoutUser(history)}>
            Logout
          </StyledButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};

const mapStateToProps = ({ session }) => ({
  user: session.user,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
