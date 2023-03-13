import Title from "../common/Title";
import TeamCont from "../include/TeamCont";
import { Mobile, PC } from "../../utils/MediaQuery";

function Team(props) {
  return (
    <div>
      <PC>
        <div
          className="w-screen bg-primary pt-[200px] pb-[250px] flex flex-col items-center text-center z-30"
          ref={props.teamContainerRef}
        >
          <div className="w-[1040px] rounded-b-[100px] flex flex-col items-center">
            <Title
              title="Our team"
              color="text-white"
              fontSize="text-[100px]"
              fontWeight="font-semibold"
              bottom="mb-[180px]"
            ></Title>
            <TeamCont></TeamCont>
          </div>
        </div>
      </PC>
      <Mobile>
        <div
          className="w-[430px] bg-primary pt-[100px] pb-[100px] flex flex-col items-center text-center z-30"
          ref={props.teamContainerRef}
        >
          <Title
            title="Our team"
            color="text-white"
            fontSize="text-[35px]"
            fontWeight="font-semibold"
            bottom="mb-[50px]"
          ></Title>
          <TeamCont></TeamCont>
        </div>
      </Mobile>
    </div>
  );
}

export default Team;
