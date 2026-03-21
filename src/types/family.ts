export interface Person {
  name:       string;
  nickname:   string | null;
  initials:   string;
  role:       string;
  generation: number;
  deceased:   boolean;
  spouse:     string | null;
  photo:      string;
}

export interface TreeNode {
  couple:   string[];
  children: TreeNode[];
  note?:    string;
}

export interface FamilyData {
  familyName: string;
  subtitle:   string;
  tree:       TreeNode;
  people:     Record<string, Person>;
}
