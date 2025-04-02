import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";


const Illustration = ({ transitionFromLanding }) => {
  return (
    <PageWrapper fromLanding={transitionFromLanding}>
      <div className="page page-illustration">
        <Navbar animated={transitionFromLanding} />
        <div className="content">Welcome to the Art Side</div>
      </div>
    </PageWrapper>
  );
};

export default Illustration;
