export interface SkillType extends React.HTMLAttributes<Element> {
  onCancel: (title: string) => void;
  title: string;
}

export interface SkillListType {
  skills: string[];
  removedSkill: (title: string) => void;
}
