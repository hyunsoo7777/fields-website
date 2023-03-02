import Title from "../common/Title";
import TeamCont from "../include/TeamCont";

function Team(props) {
  return (
    <div
      className="w-full bg-white pt-[200px] pb-[250px] flex flex-col items-center text-center z-30"
      ref={props.teamContainerRef}
    >
      <div className="w-[1040px] rounded-b-[100px]">
        <Title
          title="Our team"
          color="text-primary"
          fontSize="text-[100px]"
          fontWeight="font-semibold"
          bottom="mb-[180px]"
        ></Title>
        <TeamCont></TeamCont>
      </div>
    </div>
  );
}

export default Team;
