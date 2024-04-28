import { SkillListType } from "../../types/skill/skill.types";
import Skill from "./skill";

export default function SkillList({ skills, removedSkill }: SkillListType) {
  return (
    <ul className="flex flex-wrap gap-2 items-center my-5">
      {skills.map((skill: string, index: number) => (
        <Skill key={index} title={skill} onCancel={removedSkill} />
      ))}
    </ul>
  );
}
