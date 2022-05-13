export interface IProjectInfo {
  title: string;
  subtitle: string;
  features: {
    title: string;
    info: string;
  }[];
  actions: {
    href: string;
    text: string;
    ariaLabel: string;
  }[];
}
