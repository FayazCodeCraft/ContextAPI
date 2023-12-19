interface FamilySecret {
    familyName: string;
    onlyParentCanSee: () => string;
    onlyGrandChildrenShouldKnow: () => string;
}
  
export interface FamilyProps {
    secret: FamilySecret;
  }
  