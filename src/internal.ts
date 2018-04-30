export interface IContext {
  name: string;
  path: string;
}

export abstract class Renderable {

  public abstract bespokes(): string[];

  public abstract identifiers(): string[];

  public render(context: IContext): string {
    this.verify();

    return this.renderImpl(context);
  }

  protected abstract renderImpl(context: IContext): string;

  private verify(): void {
    this.verifyUniqueBespoke();
    this.verifyUniqueIdentifiers();
  }

  private verifyUniqueBespoke(): void {
    const bespokeArray: string[] = this.bespokes();
    const bespokeSet: Set<string> = new Set(bespokeArray);
    if (bespokeSet.size < bespokeArray.length) {
      throw new Error("Duplicated Bespoke Sections");
    }
  }

  private verifyUniqueIdentifiers(): void {
    const identifierArray: string[] = this.identifiers();
    const identifierSet: Set<string> = new Set(identifierArray);
    if (identifierSet.size < identifierArray.length) {
      throw new Error("Duplicated Identifier Names");
    }
  }
}
