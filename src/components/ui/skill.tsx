import { LiaTimesCircle } from "react-icons/lia";
import cn from "../../libs/styles";
import { SkillType } from "../../types/skill/skill.types";

export default function Skill({ title, onCancel, className }: SkillType) {
  return (
    <button
      onClick={() => onCancel(title)}
      className={cn(
        "bg-slate-100 px-2 rounded-full relative text-primary",
        className,
      )}
    >
      {title}
      <LiaTimesCircle className="text-xl text-primary absolute -top-3 -right-2" />
    </button>
  );
}
